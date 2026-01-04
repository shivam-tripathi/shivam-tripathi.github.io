import { visit } from 'unist-util-visit'
import { Plugin } from 'unified'
import { Node } from 'unist'

interface DirectiveNode extends Node {
  type: string
  name: string
  attributes: Record<string, string>
  children: Node[]
  data?: {
    hName?: string
    hProperties?: Record<string, string>
  }
}

export const remarkNotePlugin: Plugin = () => {
  return (tree) => {
    visit(tree, (node) => {
      if (
        node.type === 'textDirective' ||
        node.type === 'leafDirective' ||
        node.type === 'containerDirective'
      ) {
        const directiveNode = node as DirectiveNode
        if (directiveNode.name !== 'note') return

        const data = directiveNode.data || (directiveNode.data = {})
        const attributes = directiveNode.attributes || {}

        // Render as a span with class "note-trigger"
        data.hName = 'span'
        data.hProperties = {
          className: 'note-trigger',
          'data-note-content': attributes.content || '',
          ...attributes
        }
      }
    })
  }
}

