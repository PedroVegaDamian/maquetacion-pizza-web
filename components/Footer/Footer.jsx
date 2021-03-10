import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import styles from './Footer.module.scss'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.wrap}>
				<div className={styles.media}>
					<div className={styles.mediaWrap}>
						<a className={styles.logo} href='/'>
							Pizza
						</a>
						<div className={styles.socialIcons}>
							<a
								href='https://facebook.com'
								target='_blank'
								aria-label='Facebook'
								rel='noopener noreferrer'>
								<FaFacebook />
							</a>
							<a
								href='https://twitter.com'
								target='_blank'
								aria-label='Twitter'
								rel='noopener noreferrer'>
								<FaTwitter />
							</a>
							<a
								href='https://instagram.com'
								target='_blank'
								aria-label='Instagram'
								rel='noopener noreferrer'>
								<FaInstagram />
							</a>
							<a
								href='https://youtube.com'
								target='_blank'
								aria-label='Youtube'
								rel='noopener noreferrer'>
								<FaYoutube />
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
