import React from 'react'
import styles from './insight.module.scss'

type InsightProps = {
  text: React.ReactElement;
}

export default function Insight(props: InsightProps) {
  return (
    <section className={styles.insight}>
      <div className={styles.insightArrow}>
        <div className='square'></div>
      </div>
      <div className={styles.insightText}>
        {props.text}
      </div>
    </section>
  )
}