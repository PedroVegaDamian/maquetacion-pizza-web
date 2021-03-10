import Link from 'next/link'
import { FaPizzaSlice } from 'react-icons/fa'
import styles from './Navbar.module.scss'

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
