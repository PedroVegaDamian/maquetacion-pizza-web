import styles from './Products.module.scss'

const Products = ({ heading, productsData, type }) => {
	return (
		<div
			className={styles.productsContainer}
			id={type === 'pizzas' ? 'pizzas' : 'postres'}>
			<div className={styles.productHeading}>{heading}</div>
			<div className={styles.productWrapper}>
				{productsData.map((product, index) => (
					<div className={styles.productCard} key={index}>
						<img src={`./images/${product.img}.jpg`} alt={product.alt} />
						<div className={styles.productInfo}>
							<p className={styles.title}>{product.name}</p>
							<p className={styles.desc}>{product.desc}</p>
							<p className={styles.price}>{product.price}</p>
							<button className={styles.button}>Ordenar</button>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Products
