import React from 'react'
import styles from './detailPage.module.scss'

type DetailPageProps = {
  currentPage: string;
  description: string;
  title: React.ReactElement;
  borderBottom: boolean;
}

export default function DetailPage(props: DetailPageProps) {
  return (
    <div
      className={styles.container}
      style={{ borderBottom: props.borderBottom ? 'var(--default-border)' : 'none' }}
    >
      <header>
        <div className={styles.page}>
          <h3>
            {props.currentPage}
            <span className={styles.gray}>/03</span>
          </h3>
        </div>
      </header>
      <div className={styles.detailText}>
        <div className={styles.description}>
          <p>{props.description}</p>
        </div>
        <div className={styles.title}>
          {props.title}
        </div>
      </div>
    </div>
  )
}