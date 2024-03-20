import { defineCollection, z } from 'astro:content'

const annoucement = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        date: z.date(),
        image: image()
    })
})

export const collections = {
    annoucement
}