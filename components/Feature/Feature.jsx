import styles from './Feature.module.scss'

const Feature = () => {
	return (
		<div className={styles.featureContainer}>
			<h2>La Pizza de Hoy</h2>
			<p>Salsa alfredo de trufa cubierta con polvo de oro de 24 quilates</p>
			<button>Ordenar Ahora</button>
		</div>
	)
}

export default Feature
