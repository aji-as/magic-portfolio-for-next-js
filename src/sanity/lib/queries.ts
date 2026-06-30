import { groq } from 'next-sanity'

export const personQuery = groq`*[_type == "person" && _id == "person"][0]`
export const homeQuery = groq`*[_type == "home" && _id == "home"][0]`
export const aboutQuery = groq`*[_type == "about" && _id == "about"][0]`
