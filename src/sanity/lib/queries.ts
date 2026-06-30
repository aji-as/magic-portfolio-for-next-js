import { groq } from 'next-sanity'

export const personQuery = groq`*[_type == "person"][0]`
export const homeQuery = groq`*[_type == "home"][0]`
export const aboutQuery = groq`*[_type == "about"][0]`
