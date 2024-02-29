import getCommentsRequest from '@/api/comments/getCommentsRequest'
import {commentsStore} from '@/store/comments/comments.store'
import {toast} from 'react-toastify'

class CommentsService {
  async loadComments() {
    try {
      const {data: comments, pagination} = await getCommentsRequest(commentsStore.paginationPage + 1)

      commentsStore.paginationPage = pagination.page
      commentsStore.pagesLeft = pagination.total_pages - pagination.page

      if (comments.length > 0) {
        comments.forEach(comment => {
          commentsStore.addOrUpdate(comment)

          if (!commentsStore.comments.includes(comment.id)) {
            commentsStore.comments.push(comment.id)
          }
        })
      }
    } catch {
      toast('При запросе комментариев произошла ошибка')
    }
  }
}

export const commentsService = new CommentsService()
