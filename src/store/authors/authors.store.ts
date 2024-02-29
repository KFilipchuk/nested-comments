import {IAuthor} from '@/types'
import {makeAutoObservable} from 'mobx'

class AuthorsStore {
  authors: Record<IAuthor['id'], IAuthor> = {}

  constructor() {
    makeAutoObservable(this)
  }

  addOrUpdate = (author: IAuthor) => {
    this.authors[author.id] = author
  }

  findBidById = (id: IAuthor['id']): IAuthor | undefined => {
    return this.authors[id]
  }
}

export const authorsStore = new AuthorsStore()
