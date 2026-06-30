import { defineField, defineType } from 'sanity'

export const homeType = defineType({
  name: 'home',
  title: 'Home Page Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Page Description',
      type: 'text',
    }),
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'text',
    }),
    defineField({
      name: 'subline',
      title: 'Subline',
      type: 'text',
    }),
    defineField({
      name: 'featuredDisplay',
      title: 'Display Featured Work',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'featuredTitle',
      title: 'Featured Work Title',
      type: 'string',
    }),
    defineField({
      name: 'featuredHref',
      title: 'Featured Work Link',
      type: 'string',
    }),
  ],
})
