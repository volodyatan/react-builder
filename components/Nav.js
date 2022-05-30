import Link from 'next/link'
import styles from '../styles/Nav.module.css'

function Nav() {
  return (
    <nav className={styles.nav}>
        <ul>
            <li>
                <Link href='/'>Home</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Nav