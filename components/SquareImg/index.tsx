import Image from 'next/image'
import styles from './squareImg.module.scss'

export type SquareImgProps = {
  imgName: string;
  imgAlt: string;
  direction: 'row' | 'reverse'
}

export default function SquareImg({ imgAlt, imgName, direction }: SquareImgProps) {
  return (
    <div className={styles.squareContainer}>
      {direction === 'row' && (
        <div className={styles.squareBorder}></div>
      )}
      <div className={styles.image}>
        <Image
          alt={imgAlt}
          src={`/images/${imgName}`}
          layout='fill'
          objectFit='cover'
          quality={100}
        />
      </div>
      {direction === 'reverse' && (
        <div className={styles.squareBorder}></div>
      )}
    </div>
  )
}