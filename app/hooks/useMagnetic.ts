'use client';

import { useEffect, useRef } from 'react';
import { attachMagnetic } from './attach';

export function useMagnetic<T extends HTMLElement = HTMLAnchorElement>() {
	const ref = useRef<T>(null);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		return attachMagnetic(el);
	}, []);

	return ref;
}
