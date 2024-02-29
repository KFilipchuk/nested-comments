import styles from './LoadMoreButton.module.scss'
import cn from 'classnames'
import {observer} from 'mobx-react-lite'
import {useState} from 'react'
import {commentsStore} from '@/store/comments/comments.store'
import Loader from 'react-loaders'

interface Props {
  className?: string
  onLoadMore: () => Promise<void>
}

export const LoadMoreButton = observer(function LoadMoreButton(props: Props) {
  const {className, onLoadMore} = props

  const [loading, setLoading] = useState(false)

  const handleLoadMore = async () => {
    setLoading(true)

    try {
      await onLoadMore()
    } finally {
      setLoading(false)
    }
  }

  return (
    <button className={cn(className, styles.root)} onClick={handleLoadMore}>
      Загрузить ещё
      {loading && <Loader innerClassName={styles.loader} type={'ball-clip-rotate'} active />}
    </button>
  )
})
