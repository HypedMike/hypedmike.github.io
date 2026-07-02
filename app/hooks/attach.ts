export function attachReveal(el: HTMLElement, delay: number) {
	el.style.transitionDelay = `${delay}ms`;
	const reveal = () => el.classList.add('reveal-visible');

	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
		reveal();
		return () => {};
	}

	const observer = new IntersectionObserver(
		([entry]) => {
			if (entry.isIntersecting) {
				reveal();
				observer.disconnect();
			}
		},
		{ threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
	);
	observer.observe(el);
	const fallback = window.setTimeout(reveal, 2500);

	return () => {
		observer.disconnect();
		window.clearTimeout(fallback);
	};
}

export function attachMagnetic(el: HTMLElement) {
	const onMouseMove = (e: MouseEvent) => {
		const rect = el.getBoundingClientRect();
		const mx = e.clientX - rect.left - rect.width / 2;
		const my = e.clientY - rect.top - rect.height / 2;
		el.style.transform = `translate(${mx * 0.25}px, ${my * 0.35}px)`;
	};
	const onMouseLeave = () => {
		el.style.transform = 'translate(0,0)';
	};

	el.addEventListener('mousemove', onMouseMove);
	el.addEventListener('mouseleave', onMouseLeave);

	return () => {
		el.removeEventListener('mousemove', onMouseMove);
		el.removeEventListener('mouseleave', onMouseLeave);
	};
}

export function attachTilt(el: HTMLElement) {
	const onMouseMove = (e: MouseEvent) => {
		const rect = el.getBoundingClientRect();
		const px = (e.clientX - rect.left) / rect.width - 0.5;
		const py = (e.clientY - rect.top) / rect.height - 0.5;
		el.style.transform = `perspective(700px) rotateX(${-py * 6}deg) rotateY(${px * 6}deg) translateY(-3px)`;
	};
	const onMouseLeave = () => {
		el.style.transform = 'none';
	};

	el.addEventListener('mousemove', onMouseMove);
	el.addEventListener('mouseleave', onMouseLeave);

	return () => {
		el.removeEventListener('mousemove', onMouseMove);
		el.removeEventListener('mouseleave', onMouseLeave);
	};
}

export function attachSpotlight(el: HTMLElement) {
	const onMouseMove = (e: MouseEvent) => {
		const rect = el.getBoundingClientRect();
		el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
		el.style.setProperty('--my', `${e.clientY - rect.top}px`);
	};

	el.addEventListener('mousemove', onMouseMove);

	return () => {
		el.removeEventListener('mousemove', onMouseMove);
	};
}
