import axios from 'axios'
import {IAuthor} from '@/types'

async function getAuthorsRequest() {
  const {data} = await axios.get<IAuthor[]>('/api/authors')
  return data
}

export default getAuthorsRequest
