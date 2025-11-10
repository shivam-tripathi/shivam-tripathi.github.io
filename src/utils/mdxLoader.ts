/**
 * MDX Loader Utility
 *
 * This utility allows you to write blog posts as .mdx files
 * and import them directly into the blogs.ts file.
 *
 * Usage:
 * 1. Create a .mdx file in src/articles/
 * 2. Use importMDXArticle() to load it
 * 3. Add the loaded content to the blogPosts array
 *
 * Example:
 * const post = await importMDXArticle('my-post')
 */

// Pre-load all MDX articles at module level for Vite to static analyze
const articleModules = import.meta.glob<string>('../articles/*.mdx', {
  query: 'raw',
  import: 'default',
  eager: false // Lazy load to reduce initial bundle size
})

// Cache loaded articles to avoid re-fetching
const articleCache = new Map<string, string>()

/**
 * Dynamically import MDX/MD file content with caching
 * @param filename - The filename without extension (e.g., 'my-post')
 * @returns The raw markdown content
 */
export async function importMDXArticle(filename: string): Promise<string> {
  // Check cache first
  if (articleCache.has(filename)) {
    return articleCache.get(filename)!
  }

  const moduleKey = `../articles/${filename}.mdx`

  if (!(moduleKey in articleModules)) {
    throw new Error(`Article "${filename}" not found. Available: ${Object.keys(articleModules).join(', ')}`)
  }

  try {
    const content = await articleModules[moduleKey as keyof typeof articleModules]()
    articleCache.set(filename, content)
    return content
  } catch (error) {
    console.error(`Failed to load article: ${filename}`, error)
    throw error
  }
}

/**
 * Batch import multiple MDX articles in parallel
 * @param filenames - Array of filenames without extensions
 * @returns Object with filenames as keys and content as values
 */
export async function importMDXArticles(filenames: string[]): Promise<Record<string, string>> {
  // Load all articles in parallel for better performance
  const results = await Promise.allSettled(
    filenames.map(async (filename) => ({
      filename,
      content: await importMDXArticle(filename)
    }))
  )

  const articles: Record<string, string> = {}

  results.forEach((result) => {
    if (result.status === 'fulfilled') {
      articles[result.value.filename] = result.value.content
    } else {
      console.warn(`Skipping article due to error:`, result.reason)
    }
  })

  return articles
}

/**
 * Get list of all available article filenames
 * @returns Array of available article filenames (without extension)
 */
export function getAvailableArticles(): string[] {
  return Object.keys(articleModules).map((key) =>
    key.replace('../articles/', '').replace('.mdx', '')
  )
}

