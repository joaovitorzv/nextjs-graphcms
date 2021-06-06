import styles from './grade.module.scss'

import { AiOutlineCloudUpload } from 'react-icons/ai'
import { BiServer } from 'react-icons/bi'
import { FiSettings, FiUsers } from 'react-icons/fi'
import { BsChatDots, BsFolderPlus } from 'react-icons/bs'


export default function Grade({ }) {
  return (
    <div className={styles.grade}>
      <div className={styles.gradeItem}>
        <AiOutlineCloudUpload size={40} />
        <h4>Cloud computing <br /> &amp; infraestructure</h4>
        <p>KnackForge has helped many client overhead and improve reliability with Amazon Web Services.</p>
      </div>
      <div className={styles.gradeItem}>
        <BiServer size={40} />
        <h4>Web Application <br /> &amp; Development</h4>
        <p>KnackForge develops responsive web applications that work. From Drupal and WordPress to custom web applications our team will excel in your environment.</p>
      </div>
      <div className={styles.gradeItem}>
        <FiSettings size={40} />
        <h4>Cross Platform Mobile <br /> App Development</h4>
        <p>Secure the KnackForce team to perfom mobile development for android and/or Apple iOS.</p>
      </div>
      <div className={styles.gradeItem}>
        <BsChatDots size={40} />
        <h4>Consulting <br /> Services</h4>
        <p>Be aware of what you deliver to your customer and consult anything any time.</p>
      </div>
      <div className={styles.gradeItem}>
        <BsFolderPlus size={40} />
        <h4>Enterprise Data<br />  Warehouse</h4>
        <p>As companies like yours thrive and grow in today's competitive business environment, they need to access key metrics to drive good decisions.</p>
      </div>
      <div className={styles.gradeItem}>
        <FiUsers size={40} />
        <h4>Staff Augmentation &amp;<br /> Dedicated Teams</h4>
        <p>KnackForge services the unique requirements of your company by either servir as your complete development solution or to simply expand your staff.</p>
      </div>
    </div>
  )
}