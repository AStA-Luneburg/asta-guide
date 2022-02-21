import React from 'react';
import clsx from 'clsx';
import styles from './ImageAside.module.css';

export default function ImageAside({ reverse = false, third = false, src, children }) {
	return (
		<div className={styles.imageAside} style={{ flexDirection: reverse ? 'row-reverse' : 'row' }}>
			<section className={styles.col + (third ? styles.col30 : '')}>
				<img src={src} className={styles.image} />
			</section>
			<section className={styles.textCol}>
				<p>
					{children}
				</p>
			</section>
		</div>
	);
}