export interface Exercise {
  slug: string
  title: string
  description: string
  technologies: string[]
  createdAt: string | Date
  updatedAt: string | Date
  fileName: string
  content: string
}
