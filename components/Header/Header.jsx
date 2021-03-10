import styles from './Header.module.scss'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import { useState } from 'react'

const Header = () => {
	const [isOpenMenu, setIsOpenMenu] = useState(false)

	return (
		<header className={styles.header}>
			<Navbar openMenu={() => setIsOpenMenu(!isOpenMenu)} />
			<Sidebar
				isOpenMenu={isOpenMenu}
				closeMenu={() => setIsOpenMenu(!isOpenMenu)}
			/>
			<div className={styles.content}>
				<div className={styles.descriptions}>
					<h1>La Mejor Pizza de la Historia</h1>
					<p>Lista en 60 segundos</p>
					<button>Realizar Pedido</button>
				</div>
			</div>
		</header>
	)
}

export default Header
