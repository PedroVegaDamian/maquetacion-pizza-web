import Link from 'next/link'
import styles from './Navbar.module.scss'
import { FaPizzaSlice } from 'react-icons/fa'

const Navbar = ({ openMenu }) => {
	return (
		<nav className={styles.navbar}>
			<Link href='/'>
				<a className={styles.navLink}>Pizza</a>
			</Link>
			<div className={styles.navIcon} onClick={openMenu}>
				<p>Menu</p>
				<FaPizzaSlice className={styles.bars} />
			</div>
		</nav>
	)
}

export default Navbar
