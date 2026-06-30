import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Portfolio Content')
    .items([
      S.listItem()
        .title('Person Profile')
        .child(
          S.document()
            .schemaType('person')
            .documentId('person')
        ),
      S.divider(),
      S.listItem()
        .title('Home Page Settings')
        .child(
          S.document()
            .schemaType('home')
            .documentId('home')
        ),
      S.listItem()
        .title('About Page Settings')
        .child(
          S.document()
            .schemaType('about')
            .documentId('about')
        ),
    ])
