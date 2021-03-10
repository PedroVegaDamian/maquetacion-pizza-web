import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Feature from '../components/Feature'
import Products from '../components/Products'
import { productsData, productsData2 } from '../data'

export default function Home() {
	return (
		<div>
			<Head>
				<title>Pizza</title>
				<link rel='icon' href='/icon-192x192.png' />
				<meta name='description' content='Pizza Web' />
				<meta name='keywords' content='pizza, web' />
				<meta name='author' content='PedroAngelVD' />
				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link
					href='https://fonts.googleapis.com/css2?family=Kanit:wght@400;900&display=swap'
					rel='stylesheet'
				/>
				<link rel='manifest' href='/manifest.json' />
				<link rel='apple-touch-icon' href='/icon-192x192.png' />
				<meta name='theme-color' content='#FDC500' />
			</Head>
			<Header />
			<Products
				heading='Escoge tu favorita'
				productsData={productsData}
				type='pizzas'
			/>
			<Feature />
			<Products
				heading='Dulces para ti'
				productsData={productsData2}
				type='postres'
			/>
			<Footer />
		</div>
	)
}
