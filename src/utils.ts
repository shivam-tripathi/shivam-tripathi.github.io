export const CameltoSnakeCase = (str: string) => {
	str.split(/(?=[A-Z])/g);
}

export const kebabToHumanCase = (str: string): string => {
	return str.split('-')
		.map(word => `${word[0].toUpperCase()}${word.slice(1)}`)
		.join(' ');
}

export const urlLeaf = (url: string): string => {
	const paths = url.split('/');
	return paths[paths.length-1];
}