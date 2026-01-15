import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    urls: defineCollection({
      type: 'data',
      source: 'urls/*.yaml',
      schema: z.object({
        url: z.string(),
        title: z.string(),
        description: z.string(),
      })
    }),
    logs: defineCollection({
      type: 'page',
      source: 'logs/*.csv'
    }),
    incidents: defineCollection({
      type: 'page',
      source: 'incidents/*.md',
      schema: z.object({
        date: z.string(),
        resolved: z.boolean(),
        application: z.string()
      })
    })
  }
})
