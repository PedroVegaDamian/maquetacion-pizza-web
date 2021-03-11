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
								target='_blank'
								aria-label='Facebook'
								rel='noopener noreferrer'
								href='https://facebook.com'>
								<FaFacebook />
							</a>
							<a
								target='_blank'
								aria-label='Twitter'
								rel='noopener noreferrer'
								href='https://twitter.com'>
								<FaTwitter />
							</a>
							<a
								target='_blank'
								aria-label='Instagram'
								rel='noopener noreferrer'
								href='https://instagram.com'>
								<FaInstagram />
							</a>
							<a
								target='_blank'
								aria-label='Youtube'
								rel='noopener noreferrer'
								href='https://youtube.com'>
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
