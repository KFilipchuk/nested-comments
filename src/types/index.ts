import {ISODate} from './scalars'

export interface IAuthor {
  id: number
  name: string
  avatar: string
}

export interface IComment {
  id: number
  created: ISODate
  text: string
  author: IAuthor['id']
  parent: IComment['id'] | null
  children?: IComment[]
  likes: number
}
