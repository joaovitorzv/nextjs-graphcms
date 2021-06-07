import SquareImg, { SquareImgProps } from '../SquareImg'
import { BsArrowRight as ArrowRight } from 'react-icons/bs'

import styles from './detailWithImage.module.scss'


type Props = {
  title: string;
  description: string;
  direction: 'row' | 'reverse'
}

export default function DetailWithImage(props: Props & SquareImgProps) {
  return (
    <div className={styles.detailsWithPicture + props.direction === 'reverse' ? styles.reverseContainer : ''} >
      <SquareImg
        direction={props.direction}
        imgName={props.imgName}
        imgAlt={props.imgAlt}
      />
      <div className={styles.detailsContainer}>
        <div className={styles.detailsText}>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </div>
        <button className={`btn ${styles.detailsBtn}`}>
          Details
          <ArrowRight size={30} />
        </button>
      </div>
    </div>
  )
}