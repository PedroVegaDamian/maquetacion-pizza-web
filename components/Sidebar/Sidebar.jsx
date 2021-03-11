import styles from './Sidebar.module.scss'
import Link from 'next/link'
import { FaTimes } from 'react-icons/fa'

const Sidebar = ({ isOpenMenu, closeMenu }) => {
	return (
		<div
			className={styles.sidebar}
			style={{ right: isOpenMenu ? '0' : '-1000px' }}>
			<div className={styles.closeIcon} onClick={() => closeMenu()}>
				<FaTimes className={styles.icon} />
			</div>
			<nav className={styles.menu}>
				<Link href='#pizzas'>
					<a className={styles.link} onClick={() => closeMenu()}>
						Pizzas
					</a>
				</Link>
				<Link href='#postres'>
					<a className={styles.link} onClick={() => closeMenu()}>
						Postres
					</a>
				</Link>
				<Link href='/'>
					<a className={styles.link} onClick={() => closeMenu()}>
						Menu
					</a>
				</Link>
			</nav>

			<div className={styles.btnContainer}>
				<Link href='/'>
					<a className={styles.btnOrder}>Ordernar Ahora</a>
				</Link>
			</div>
		</div>
	)
}

export default Sidebar
