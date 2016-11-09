export const ARRAY = type => `[]${type}`
export const INTEGER = 'integer'
export const OBJECT = 'object'
export const STRING = 'string'

export function isArray (type) {
  return type[0] === '[' && type[1] === ']'
}
