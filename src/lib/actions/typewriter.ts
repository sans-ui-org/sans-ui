export const typewriter = (node: HTMLElement, { speed = 1 }) => {
	const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

	if (!valid) {
		throw new Error(`This transition only works on elements with a single text node child`);
	}
	console.log('hello worl');

	const text = node.textContent ?? '';
	const duration = text.length / (speed * 0.01);

	return {
		duration,
		tick: (t: number) => {
			const i = Math.trunc(text.length * t);
			node.textContent = text.slice(0, i);
			console.log('tick', t, i, text.slice(0, i));
		}
	};
};
