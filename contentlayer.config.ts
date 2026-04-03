import { defineDocumentType, makeSource } from 'contentlayer2/source-files'

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: `projects/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    date: { type: 'date', required: false },
    url: { type: 'string', required: false },
    repository: { type: 'string', required: false },
    published: { type: 'boolean', default: true },
    image: { type: 'string', required: false },
    images: { type: 'list', of: { type: 'string' }, required: false },
    tags: { type: 'list', of: { type: 'string' }, required: false },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
    },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Project],
})
