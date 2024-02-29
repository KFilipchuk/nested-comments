import cn from 'classnames'
import {observer} from 'mobx-react-lite'
import {ReactComponent as GrayLikeBorderIcon} from '@/assets/like_gray_border.svg'
import {ReactComponent as LikeBorderIcon} from '@/assets/like_border.svg'
import {ReactComponent as LikeFillIcon} from '@/assets/like_fill.svg'
import styles from './Likes.module.scss'

interface Props {
  className?: string
  count: number
  checked?: boolean
  onChange?: () => void
  disableInteractive?: boolean
}

export const Likes = observer(function Likes(props: Props) {
  const {className, count, checked, onChange, disableInteractive = false} = props

  const onClick = () => {
    if (disableInteractive) return

    onChange?.()
  }

  return (
    <button className={cn(className, styles.root, {[styles.notInteractive]: disableInteractive})} onClick={onClick}>
      {disableInteractive ? <GrayLikeBorderIcon /> : checked ? <LikeFillIcon /> : <LikeBorderIcon />}

      <span>{count}</span>
    </button>
  )
})
