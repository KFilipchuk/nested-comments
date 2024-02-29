import {useEffect, useState} from 'react'
import {CommentsList} from '@/components/CommentsList/CommentsList'
import Loader from 'react-loaders'
import {CommentsTotal} from '@/components/CommentsTotal/CommentsTotal'
import {authorsService} from '@/store/authors/authors.service'
import {commentsService} from '@/store/comments/comments.service'
import styles from './App.module.scss'

export const App = () => {
  const [loading, setLoading] = useState(false)

  const loadDependencies = async () => {
    setLoading(true)

    try {
      await authorsService.loadAuthors()
      await commentsService.loadComments()
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadDependencies()
  }, [])

  return (
    <div className={styles.root}>
      {loading ? (
        <Loader innerClassName={styles.loader} type={'pacman'} active />
      ) : (
        <div className={styles.wrapper}>
          <CommentsTotal />
          <CommentsList />
        </div>
      )}
    </div>
  )
}
