import { useState } from 'react'

import { AiOutlineRight as ArrowRightLine } from 'react-icons/ai'
import { BsArrowRight as ArrowRight } from 'react-icons/bs'

import styles from './hideAndShow.module.scss'

type HideAndShowProps = {
  title: string;
  description: string;
}

export default function HideAndShow({ title, description }: HideAndShowProps) {
  const [isHidden, setIsHidden] = useState(false)

  return (
    <div className={styles.container}>
      <button
        onClick={() => setIsHidden(!isHidden)}
        className={styles.hideButton}
        style={{ color: isHidden ? 'var(--dark)' : 'var(--gray)' }}
      >
        <ArrowRightLine size={25} style={{ transform: isHidden ? 'rotate(90deg)' : 'rotate(0deg)' }} />
        <h4>{title}</h4>
      </button>
      <div
        className={styles.content}
        style={{ display: isHidden ? 'block' : 'none' }}
      >
        <p>{description}</p>
        <button className='btn btn-transparent'>
          Details
          <ArrowRight size={30} />
        </button>
      </div>
    </div>
  )
}