import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useEffect } from 'react';

export default function Home() {
	useEffect(() => {
		(async function () {
			const KUTE = await import('kute.js');
			const tween = KUTE.default.fromTo(
				'#blob1',
				{ path: '#blob1' },
				{ path: '#blob2' },
				{ repeat: 999, duration: 3000, yoyo: true }
			);
			tween.start();

			const anim = KUTE.default.fromTo(
				'#wave1',
				{ path: '#wave1' },
				{ path: '#wave2' },
				{ repeat: 999, duration: 3000, yoyo: true }
			);

			anim.start();
		})();
	}, []);
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				{/* ------------------------------------------------- */}
				{/* Blob Here */}

				<svg
					className={styles.blob}
					id="visual"
					viewBox="0 0 900 600"
					width="900"
					height="600"
				>
					<g transform="translate(483.1913846279758 345.12394801387165)">
						<path
							id="blob1"
							d="M111.6 -133C140.3 -83 156.2 -41.5 154.3 -1.9C152.4 37.7 132.8 75.4 104.1 100.4C75.4 125.4 37.7 137.7 -6.6 144.3C-50.9 150.9 -101.8 151.8 -146 126.8C-190.2 101.8 -227.6 50.9 -219.8 7.8C-212 -35.4 -159 -70.7 -114.9 -120.7C-70.7 -170.7 -35.4 -235.4 3.1 -238.4C41.5 -241.5 83 -183 111.6 -133"
							fill="#BB004B"
						></path>
					</g>
					<g transform="translate(474.1324241039739 296.27086100081056)">
						<path
							id="blob2"
							d="M113.4 -130.5C148.3 -105.8 179.1 -71.4 188.2 -31.4C197.3 8.5 184.8 54 161.2 91.3C137.6 128.7 102.8 157.8 64.1 168.8C25.3 179.8 -17.4 172.6 -54 156C-90.6 139.4 -121.1 113.5 -160.3 77.2C-199.5 41 -247.5 -5.6 -238.3 -39.3C-229.1 -73 -162.8 -94 -113.5 -116.1C-64.3 -138.3 -32.1 -161.6 3.5 -165.9C39.2 -170.1 78.4 -155.1 113.4 -130.5"
							fill="#BB004B"
							style={{ visibility: 'hidden' }}
						></path>
					</g>
				</svg>

				{/* ------------------------------------------------- */}

				<h1 className={styles.title}>
					Welcome to <a href="https://nextjs.org">Next.js!</a>
				</h1>

				<p className={styles.description}>
					Get started by editing{' '}
					<code className={styles.code}>pages/index.js</code>
				</p>

				<div className={styles.grid}>
					<a href="https://nextjs.org/docs" className={styles.card}>
						<h2>Documentation &rarr;</h2>
						<p>
							Find in-depth information about Next.js features and API.
						</p>
					</a>

					<a href="https://nextjs.org/learn" className={styles.card}>
						<h2>Learn &rarr;</h2>
						<p>
							Learn about Next.js in an interactive course with quizzes!
						</p>
					</a>

					<a
						href="https://github.com/vercel/next.js/tree/master/examples"
						className={styles.card}
					>
						<h2>Examples &rarr;</h2>
						<p>
							Discover and deploy boilerplate example Next.js projects.
						</p>
					</a>

					<a
						href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
						className={styles.card}
					>
						<h2>Deploy &rarr;</h2>
						<p>
							Instantly deploy your Next.js site to a public URL with
							Vercel.
						</p>
					</a>
				</div>
			</main>
			{/* --------------------------------------------- */}

			<div className={styles.waves}>
				<svg id="visual" viewBox="0 0 900 450" width="900" height="450">
					<path
						id="wave1"
						d="M0 325L21.5 330.5C43 336 86 347 128.8 355.5C171.7 364 214.3 370 257.2 372C300 374 343 372 385.8 361.3C428.7 350.7 471.3 331.3 514.2 329.3C557 327.3 600 342.7 642.8 347C685.7 351.3 728.3 344.7 771.2 341.2C814 337.7 857 337.3 878.5 337.2L900 337L900 451L878.5 451C857 451 814 451 771.2 451C728.3 451 685.7 451 642.8 451C600 451 557 451 514.2 451C471.3 451 428.7 451 385.8 451C343 451 300 451 257.2 451C214.3 451 171.7 451 128.8 451C86 451 43 451 21.5 451L0 451Z"
						fill="#C62368"
						strokeLinecap="round"
						strokeLinejoin="miter"
					></path>
					<path
						id="wave2"
						d="M0 365L18.8 364.7C37.7 364.3 75.3 363.7 112.8 344C150.3 324.3 187.7 285.7 225.2 267.8C262.7 250 300.3 253 337.8 256.7C375.3 260.3 412.7 264.7 450.2 277.5C487.7 290.3 525.3 311.7 562.8 323.2C600.3 334.7 637.7 336.3 675.2 327.5C712.7 318.7 750.3 299.3 787.8 291.2C825.3 283 862.7 286 881.3 287.5L900 289L900 451L881.3 451C862.7 451 825.3 451 787.8 451C750.3 451 712.7 451 675.2 451C637.7 451 600.3 451 562.8 451C525.3 451 487.7 451 450.2 451C412.7 451 375.3 451 337.8 451C300.3 451 262.7 451 225.2 451C187.7 451 150.3 451 112.8 451C75.3 451 37.7 451 18.8 451L0 451Z"
						fill="#C62368"
						strokeLinecap="round"
						strokeLinejoin="miter"
						style={{ visibility: 'hidden' }}
					></path>
				</svg>
			</div>

			<div className={styles.blobWave}>
				<h1>Hello</h1>
				{/* <svg width="376" height="387" viewBox="0 0 376 387" fill="none">
					<path
						d="M332.436 105.518C361.136 155.518 377.036 197.018 375.136 236.618C373.236 276.218 353.636 313.918 324.936 338.918C296.236 363.918 258.536 376.218 214.236 382.818C169.936 389.418 119.036 390.318 74.8356 365.318C30.6356 340.318 -6.76436 289.418 1.03564 246.318C8.83564 203.118 61.8356 167.818 105.936 117.818C150.136 67.8181 185.436 3.11815 223.936 0.118146C262.336 -2.98185 303.836 55.5181 332.436 105.518Z"
						fill="#BB004B"
					/>
				</svg> */}
				<i className={styles.blo}></i>
			</div>

			{/* --------------------------------------------- */}
			<footer className={styles.footer}>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{' '}
					<span className={styles.logo}>
						<Image
							src="/vercel.svg"
							alt="Vercel Logo"
							width={72}
							height={16}
						/>
					</span>
				</a>
			</footer>
		</div>
	);
}
