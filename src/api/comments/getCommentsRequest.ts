import axios from 'axios'
import {IPagination} from '@/data/comments'
import {IComment} from '@/types'

async function getCommentsRequest(page: number) {
  const {data} = await axios.get<IPagination<IComment[]>>('/api/comments', {params: {page}})
  return data
}

export default getCommentsRequest
