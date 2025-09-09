import { defineType, defineField } from 'sanity'

export const consultingPackage = defineType({
  name: 'consultingPackage',
  title: 'Consulting Packages',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Package Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
      description: 'e.g., "$5,000/month"',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
      description: 'e.g., "1-3 months"'
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{type: 'string'}],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'ideal',
      title: 'Ideal For',
      type: 'text',
      description: 'Who is this package ideal for?'
    }),
    defineField({
      name: 'highlighted',
      title: 'Highlighted/Popular?',
      type: 'boolean',
      description: 'Show as most popular option'
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order to display (1 = first)'
    })
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'price'
    }
  }
})