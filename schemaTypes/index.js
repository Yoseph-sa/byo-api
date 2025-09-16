import about from './about'
import category from './category'
import client from './client'
import contact from './contact'
import faq from './faq'
import gallery from './gallery'
import home from './home'
import projects from './projects'
import services from './services'
import newProjects from './newProjects'
import { blocks } from './blocks'
export const schemaTypes = [
  home,
  category,
  projects,
  client,
  services,
  about,
  contact,
  faq,
  gallery,
  newProjects,
  ...blocks
]
