import styles from './headerStyles.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h1>KnackForge</h1>
        </div>
        <nav className={styles.menu}>
          <ul>
            <li>Team</li>
            <li>Process</li>
            <li>Customers</li>
            <li>News</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}