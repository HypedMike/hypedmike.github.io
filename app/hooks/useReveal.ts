'use client';

import { useEffect, useRef } from 'react';
import { attachReveal } from './attach';

export function useReveal<T extends HTMLElement = HTMLDivElement>(delay = 0) {
	const ref = useRef<T>(null);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		return attachReveal(el, delay);
	}, [delay]);

	return ref;
}
