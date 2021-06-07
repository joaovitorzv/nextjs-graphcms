import styles from './footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.info}>
        <div>
          <h3>KnackForge</h3>
          <ul>
            <li>Team</li>
            <li>Process</li>
            <li>Customer</li>
            <li>News</li>
          </ul>
        </div>
      </div>
      <div className={styles.about}>
        <h3>Contact Info</h3>
        <ul>
          <li>BRASIL</li>
          <li>FRANCA, SÃO PAULO</li>
          <li>MY STREET, 394</li>
          <li>
            This site is for study purpouses only (UI based on
          <a href="https://www.behance.net/gallery/118111385/KnockForge?tracking_source=search_projects_recommended%7Clanding%20page"> This Behance Project</a>)
          </li>
        </ul>
      </div>
    </footer>
  )
}