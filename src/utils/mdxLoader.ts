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

/**
 * Dynamically import MDX/MD file content
 * @param filename - The filename without extension (e.g., 'my-post')
 * @returns The raw markdown content
 */
export async function importMDXArticle(filename: string): Promise<string> {
  try {
    // Import the raw markdown file
    const module = await import(`../articles/${filename}.mdx?raw`)
    return module.default
  } catch (error) {
    console.error(`Failed to load article: ${filename}`, error)
    throw new Error(`Article "${filename}" not found`)
  }
}

/**
 * Batch import multiple MDX articles
 * @param filenames - Array of filenames without extensions
 * @returns Object with filenames as keys and content as values
 */
export async function importMDXArticles(filenames: string[]): Promise<Record<string, string>> {
  const articles: Record<string, string> = {}

  for (const filename of filenames) {
    try {
      articles[filename] = await importMDXArticle(filename)
    } catch (error) {
      console.warn(`Skipping article: ${filename}`)
    }
  }

  return articles
}

/**
 * Create a blog post object from MDX content
 * @param config - Configuration object
 * @returns Blog post object
 */
export function createBlogPost(config: Record<string, unknown>): Record<string, unknown> {
  return {
    id: config.id,
    title: config.title,
    excerpt: config.excerpt,
    date: config.date,
    author: config.author,
    tags: config.tags,
    image: config.image,
    content: config.content
  }
}

