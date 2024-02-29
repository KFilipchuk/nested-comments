import styles from './Avatar.module.scss'
import cn from 'classnames'
import {observer} from 'mobx-react-lite'
import {IAuthor} from '@/types'

interface Props {
  className?: string
  author: IAuthor | undefined
}

export const Avatar = observer(function Avatar(props: Props) {
  const {className, author} = props

  const src = author?.avatar

  return (
    <div className={cn(className, styles.root, {[styles.placeholder]: !src})}>
      {src ? (
        <img src={src} alt={author.name} />
      ) : (
        <span>{author?.name.charAt(1) + ' ' + author?.name.charAt(-1)}</span>
      )}
    </div>
  )
})
