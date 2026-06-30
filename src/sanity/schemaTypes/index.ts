import { type SchemaTypeDefinition } from 'sanity'
import { personType } from './person'
import { homeType } from './home'
import { aboutType } from './about'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [personType, homeType, aboutType],
}
