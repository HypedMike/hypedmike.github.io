'use client';

import { useEffect, useRef } from 'react';
import { attachReveal, attachTilt } from './attach';

export function useTiltReveal<T extends HTMLElement = HTMLDivElement>(delay = 0) {
	const ref = useRef<T>(null);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const detachReveal = attachReveal(el, delay);
		const detachTilt = attachTilt(el);
		return () => {
			detachReveal();
			detachTilt();
		};
	}, [delay]);

	return ref;
}
