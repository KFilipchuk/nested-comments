import {IComment} from '@/types'
import {makeAutoObservable} from 'mobx'

class CommentsStore {
  commentsById: Record<IComment['id'], IComment> = {}
  comments: IComment['id'][] = []
  paginationPage = 0
  pagesLeft = 0

  constructor() {
    makeAutoObservable(this)
  }

  get mappedComments() {
    return this.comments.map(this.findBidById).filter((comment): comment is IComment => !!comment)
  }

  get commentsWithChildren() {
    return this.mappedComments.filter((comment): comment is IComment => {
      comment.children = this.mappedComments.filter(item => item.parent === comment.id)

      return !comment.parent
    })
  }

  get likesTotal() {
    return this.mappedComments.reduce((res, acc) => (res += acc.likes), 0)
  }

  addOrUpdate = (comment: IComment) => {
    this.commentsById[comment.id] = comment
  }

  findBidById = (id: IComment['id']): IComment | undefined => {
    return this.commentsById[id]
  }
}

export const commentsStore = new CommentsStore()
