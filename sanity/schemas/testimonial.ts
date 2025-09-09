import { defineType, defineField } from 'sanity'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonials',
  type: 'document',
  fields: [
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'author',
      title: 'Author Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'role',
      title: 'Author Role/Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string'
    }),
    defineField({
      name: 'image',
      title: 'Author Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'featured',
      title: 'Featured?',
      type: 'boolean',
      description: 'Show on homepage'
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number'
    })
  ],
  preview: {
    select: {
      title: 'author',
      subtitle: 'company',
      media: 'image'
    }
  }
})