import getAuthorsRequest from '@/api/authors/getAuthorsRequest'
import {toast} from 'react-toastify'
import {authorsStore} from '@/store/authors/authors.store'

class AuthorsService {
  async loadAuthors() {
    try {
      const authors = await getAuthorsRequest()

      authors.length > 0 && authors.forEach(authorsStore.addOrUpdate)
    } catch {
      toast('При запросе авторов произошла ошибка')
    }
  }
}

export const authorsService = new AuthorsService()
