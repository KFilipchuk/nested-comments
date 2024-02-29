import styles from './CommentsList.module.scss'
import cn from 'classnames'
import {observer} from 'mobx-react-lite'
import {commentsStore} from '@/store/comments/comments.store'
import {Comment} from '@/components/Comment/Comment'
import {commentsService} from '@/store/comments/comments.service'
import {LoadMoreButton} from '@/components/LoadMoreButton/LoadMoreButton'

interface Props {
  className?: string
}

export const CommentsList = observer(function CommentsList(props: Props) {
  const {className} = props

  const loadMore = async () => {
    return await commentsService.loadComments()
  }

  return (
    <div className={cn(className, styles.root)}>
      {commentsStore.commentsWithChildren.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}

      {commentsStore.pagesLeft > 0 && <LoadMoreButton onLoadMore={loadMore} />}
    </div>
  )
})
