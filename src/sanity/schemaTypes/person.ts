import { defineField, defineType } from 'sanity'

export const personType = defineType({
  name: 'person',
  title: 'Person Profile',
  type: 'document',
  fields: [
    defineField({
      name: 'firstName',
      title: 'First Name',
      type: 'string',
    }),
    defineField({
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
    }),
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
    }),
    defineField({
      name: 'avatar',
      title: 'Avatar',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Location (IANA Timezone)',
      type: 'string',
      description: "e.g., 'Asia/Jakarta'",
    }),
    defineField({
      name: 'languages',
      title: 'Languages',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'locale',
      title: 'Locale',
      type: 'string',
      description: "e.g., 'en', 'id'",
    }),
  ],
})
