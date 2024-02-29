import cn from 'classnames'
import {observer} from 'mobx-react-lite'
import {commentsStore} from '@/store/comments/comments.store'
import {Likes} from '@/components/ui/Likes/Likes'
import styles from './CommentsTotal.module.scss'

interface Props {
  className?: string
}

export const CommentsTotal = observer(function CommentsTotal(props: Props) {
  const {className} = props

  return (
    <div className={cn(className, styles.root)}>
      <span>{commentsStore.comments.length} комментариев</span>

      <Likes disableInteractive count={commentsStore.likesTotal} />
    </div>
  )
})
