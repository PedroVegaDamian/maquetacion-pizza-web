import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Feature from '../components/Feature'
import Products from '../components/Products'
import { pizzas, postres } from '../data'

export default function Home() {
	return (
		<div>
			<Head>
				<title>Pizza</title>
				<link rel='icon' href='/icon.png' />
				<meta name='author' content='PedroAngelVD' />
				<meta name='keywords' content='pizza, web' />
				<meta name='description' content='Pizza Web' />
			</Head>
			<Header />
			<Products
				type='pizzas'
				productsData={pizzas}
				heading='Escoge tu favorita'
			/>
			<Feature />
			<Products
				type='postres'
				productsData={postres}
				heading='Dulces para ti'
			/>
			<Footer />
		</div>
	)
}
