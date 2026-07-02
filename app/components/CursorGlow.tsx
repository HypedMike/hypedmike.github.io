'use client';

import { useEffect, useRef } from 'react';
import styles from './CursorGlow.module.css';

export default function CursorGlow() {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

		let cx = window.innerWidth / 2;
		let cy = window.innerHeight / 2;
		let tx = cx;
		let ty = cy;
		let raf = 0;

		const onMove = (e: MouseEvent) => {
			tx = e.clientX;
			ty = e.clientY;
			if (ref.current) ref.current.style.opacity = '1';
		};

		const tick = () => {
			cx += (tx - cx) * 0.08;
			cy += (ty - cy) * 0.08;
			if (ref.current) ref.current.style.transform = `translate(${cx}px, ${cy}px)`;
			raf = requestAnimationFrame(tick);
		};

		window.addEventListener('mousemove', onMove);
		tick();

		return () => {
			window.removeEventListener('mousemove', onMove);
			cancelAnimationFrame(raf);
		};
	}, []);

	return <div ref={ref} className={styles.glow} />;
}
