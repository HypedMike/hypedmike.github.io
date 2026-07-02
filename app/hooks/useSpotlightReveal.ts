'use client';

import { useEffect, useRef } from 'react';
import { attachReveal, attachSpotlight } from './attach';

export function useSpotlightReveal<T extends HTMLElement = HTMLDivElement>(delay = 0) {
	const ref = useRef<T>(null);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const detachReveal = attachReveal(el, delay);
		const detachSpotlight = attachSpotlight(el);
		return () => {
			detachReveal();
			detachSpotlight();
		};
	}, [delay]);

	return ref;
}
