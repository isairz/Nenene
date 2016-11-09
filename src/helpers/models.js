import { ARRAY, INTEGER, STRING } from './types'

const models = {
  mangas: {
    id: INTEGER,
    name: STRING,
    authors: ARRAY(STRING),
    groups: ARRAY(STRING),
    type: STRING,
    language: STRING,
    serieses: ARRAY(STRING),
    characters: ARRAY(STRING),
    tags: ARRAY(STRING),
    thumbnail: STRING,
  },
  pages: {
    id: INTEGER,
    index: INTEGER,
    name: STRING,
    width: INTEGER,
    height: INTEGER,
  },
}

export default models
