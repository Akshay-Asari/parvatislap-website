import { defineDocumentType, makeSource } from 'contentlayer/source-files'

/**
 * Page content type
 * Used for static pages like Home, About, Contact
 */
export const Page = defineDocumentType(() => ({
  name: 'Page',
  filePathPattern: 'content/pages/*.mdx',
  fields: {
    title: { type: 'string', required: true },
    slug: { type: 'string', required: true },
    description: { type: 'string' },
    heroImage: { type: 'string' },
  },
}))

/**
 * Room content type
 * Represents accommodation options (hostel rooms, villas, etc.)
 */
export const Room = defineDocumentType(() => ({
  name: 'Room',
  filePathPattern: 'content/rooms/*.mdx',
  fields: {
    title: { type: 'string', required: true },
    slug: { type: 'string', required: true },
    subtitle: { type: 'string' },
    summary: { type: 'string' },
    description: { type: 'string' },
    images: { type: 'list', of: { type: 'string' } },
    amenities: { type: 'list', of: { type: 'string' } },
    price: { type: 'string' },
    capacity: { type: 'number' },
  },
}))

/**
 * Review content type
 * Guest reviews and testimonials
 */
export const Review = defineDocumentType(() => ({
  name: 'Review',
  filePathPattern: 'content/reviews/*.mdx',
  fields: {
    authorName: { type: 'string', required: true },
    authorTitle: { type: 'string' },
    rating: { type: 'number', required: true },
    text: { type: 'string', required: true },
    date: { type: 'date' },
  },
}))

/**
 * GalleryItem content type
 * Photos for Views gallery section
 */
export const GalleryItem = defineDocumentType(() => ({
  name: 'GalleryItem',
  filePathPattern: 'content/gallery/*.mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string' },
    image: { type: 'string', required: true },
    category: { type: 'string' },
    order: { type: 'number' },
  },
}))

/**
 * Trek content type
 * Things to do - trekking experiences
 */
export const Trek = defineDocumentType(() => ({
  name: 'Trek',
  filePathPattern: 'content/treks/*.mdx',
  fields: {
    title: { type: 'string', required: true },
    slug: { type: 'string', required: true },
    duration: { type: 'string' },
    distance: { type: 'string' },
    difficulty: { type: 'string' },
    description: { type: 'string' },
    image: { type: 'string' },
  },
}))

export default makeSource({
  contentDirPath: './content',
  documentTypes: [Page, Room, Review, GalleryItem, Trek],
})

