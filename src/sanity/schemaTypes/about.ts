import { defineField, defineType, defineArrayMember } from 'sanity'

export const aboutType = defineType({
  name: 'about',
  title: 'About Page Settings',
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
      name: 'introTitle',
      title: 'Intro Title',
      type: 'string',
    }),
    defineField({
      name: 'introDescription',
      title: 'Intro Description',
      type: 'text',
    }),
    defineField({
      name: 'workExperiences',
      title: 'Work Experiences',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            { name: 'company', type: 'string', title: 'Company' },
            { name: 'timeframe', type: 'string', title: 'Timeframe' },
            { name: 'role', type: 'string', title: 'Role' },
            { name: 'achievements', type: 'array', of: [{ type: 'text' }], title: 'Achievements' },
          ],
        }),
      ],
    }),
    defineField({
      name: 'studies',
      title: 'Studies',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            { name: 'name', type: 'string', title: 'Institution Name' },
            { name: 'description', type: 'text', title: 'Description' },
          ],
        }),
      ],
    }),
  ],
})
