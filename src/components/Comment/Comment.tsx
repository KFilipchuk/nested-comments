import styles from './Comment.module.scss'
import cn from 'classnames'
import {observer} from 'mobx-react-lite'
import {Avatar} from '@/components/ui/Avatar/Avatar'
import {IComment} from '@/types'
import {authorsStore} from '@/store/authors/authors.store'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import {Likes} from '@/components/ui/Likes/Likes'
import {useState} from 'react'

dayjs.extend(relativeTime)

interface Props {
  className?: string
  child?: boolean
  comment: IComment
}

export const Comment = observer(function Comment(props: Props) {
  const {className, child, comment} = props

  const [isLiked, setIsLiked] = useState(false)

  const author = authorsStore.findBidById(comment.author)
  const createdAt = dayjs(comment.created)
  const humanizedCreatedAt =
    dayjs().diff(createdAt, 'd') < 1 ? createdAt.fromNow() : createdAt.format('DD.MM.YYYY, HH:mm')

  const onLike = () => {
    !isLiked ? (comment.likes += 1) : (comment.likes -= 1)

    setIsLiked(s => !s)
  }

  return (
    <div className={cn(className, styles.root, {[styles.child]: child})}>
      <div className={styles.header}>
        <Avatar className={styles.avatar} author={author} />

        <div className={styles.info}>
          <p className={styles.name}>{author?.name}</p>
          <p className={styles.created}>{humanizedCreatedAt}</p>
        </div>

        <Likes className={styles.likes} count={comment.likes} checked={isLiked} onChange={onLike} />
      </div>

      <p className={styles.text}>{comment.text}</p>

      {comment.children &&
        comment.children.length > 0 &&
        comment.children.map(comment => <Comment key={comment.id} child comment={comment} />)}
    </div>
  )
})
