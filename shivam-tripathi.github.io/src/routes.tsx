
import DataPipelinesAndBackpressure from '../articles/engineering/data-pipelines-and-backpressure.mdx'
import UrlShortener from '../articles/engineering/url-shortener.mdx';
import NotesHTTPContentTypes from '../articles/engineering/notes-http-content-types.mdx';
import NotesHTTPSecurityHeaders from '../articles/engineering/notes-http-security-headers.mdx';
import App from './App';
import About from './pages/about';
import Landing from './pages/landing';
import { Link } from 'react-router-dom';


const routes = [
	{
		path: '/',
		description: 'Home',
		element: <App page={Landing} />,
		image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABpElEQVRoge3XsWvUYBzG8Y9yKIJVEXQoDjd2EVzsJDgIgpubbnVydtM/wdWxq5MgiCCO4mBBKAguLuLiIqIUWpCj2FodLm/PxrSXq7nkZ32/8EzJvXm+5PJ7EzK16ONlkX7HXfbNNazgZ5FVXO+00YQcwl38MJJI2cJ9HO6sXU1O4Ik/Bcp5jtMddRzLBXwwXiLlIy6W1tjt3NZYwGCPIrtlUPw2cQffK86bOkfxYB8C5TzEsWLNS/jUpsg5vG5AIuWN0Yg+gxdtiFzG5wYlUr7ianGNnuGE25qGQBqtm1OQSNnEveJacKNpiRk8nqJAOc9wqmmJObxrUSLlPc43JXET3zqQSBng1t8IpIetK4FyFnFkUomzdo6/KFnCbF2Jqg0pUr7gyjiJ26pfEaJlw3AbSCN6m+N4FKDgpHmKk7+LLBcH1gKUq5vUdZnRB84G3mK+fKsCM2/4frZOxX/M0PJfYEf38J+cdcki0cgi0cgi0eg1vF7VvrQXje1ZB+aOZJFoZJFoZJFoZJFoZJFoZJFoZJFoHGiRpdZbTM6rrgtk/ht+AZJi8ybhOtGyAAAAAElFTkSuQmCC',
	},
	{
		description: 'Engineering',
		path: '/engineering',
		element: <App page={() => navigationDetails("Engineering")} />,
		image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADj0lEQVRoge2az0tUURTHP6UUOJO6sSh/bJLMIuiHGY3rXJQxukmCFkH9AUUui6CSEsH+AjX6BelfoFG5yTYaLQvaqBW00CAbNX9Ni/te/pi559773htHyi8ckJl7zvd857173nnnClv4P9ABLAHpdbYAtOUxL2dMkCnCt/d5zMsJxcAyeiFzQGHUpNujDgjUAtuE73cC1VGTugipAq4DZYZ1tRaxjhi+LwOuAZUWsZxQzcp9/w1o1KyLA0/Q31a+dQMxTYwzHkcaGAf2R6KAtSJ8Wwa6ULcJQAPQD8xYiPAtBfQBCS/GDqCTzP0ViZhsIlbbB2DQIXmdDQKjwvehxFQYRGy0jQPlumSlzd7oidksqETtH2fEgE/k/0r49hlVTALhBDC/CUQsAKeCivBx25F0ElVek0AN6srGvL+bgR5gyjHmrbAiQLUT7yzIZoB7qBbFhBKgHbtyPQwURCEE4KWB7CtwMkDco8CYIfZAyNz/osFANIFQFi1QAXwxcCS03g7oFwhmgOMRcNQBswJPX1iCOPJ9fCcswSrcF3hSBCi9xahSdwV4JgSfRN7YSWAI+OXZG+C8sL4EuZo9Bi6j9uIuScADVBtgWxK7DbF0fu2CX68D/xjqKmYg2zu2ZElNMkkL3yaNb4tjDkvZgrgESAMHNMkMWfi+1vjWBMgjtBDd5pu28P2p8Y0HFZKLd3YbZP0lCZFPGCH7NJ+PWPjq1uwNmMsaIYuOvoc0n3dZ+OrWHHbMIWvObajh2W/s7s0egaBd8Lsr+D2y5J7zcr0hqSxE/dqthsCTqIeYDk2o6jTt2SvgnLC+FPgh8PUAF1DjJucBXxHqqawLLj3cXNEh8KTQj4+sITWNs6iGLyzqkZvGFxFwkBAI0qgWPMyQohL1PiNxnA4Rfw1sXqzqA8Q9xga+WO1EDeJMlWQW1cRJBcBHKWpPzFnEHUFNIUPjoQXZaptCdbHNwEFU2xH3/m5BVUKpOmWzzrAiGpHPOjbKloGzQUWUsTIV3wz2HdijS1bqtS4RovfJAXYDF4M4VrH5htiBD35MxwrDRHOsMAC8NYjIyRnJPGqM6fc8CdTTN+WQfMrz8R92BcBNMmfNOTu1+oh+qhgDnluI6EXfO9V5HGmPMzIRPspR45giw7qrmIW0GmIUeVxhJpihYerN0tid/OYdJeThHwZyBWkoPZoLwlxNUZ6irsp6LKLGsFv45/EH7MxXsTMY2v8AAAAASUVORK5CYII='
	},
	{
		description: 'Product',
		path: '/product',
		element: <App page={() => navigationDetails("Product")} />,
		image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB8ElEQVR4nO2YwWpTQRSGP0NCRbqvii7duelDVJo2mDco+gQu2kXFhdu+QfsMddWWbnTjMxTpoiS0JBoLhUpWFYk5ZeC/MISGeJObe+fW+WE2YWZyvvPPnJm5EBU1i9aB70AXqFNidQFT61Bi9e4DyGtg6EGsUkItAZeC2KKkegAcC+IrUKGk2hTENfCckuolcCOQJiXVQ+BEELshHWBrKcfuCeIUeERAB5gDqv7juKbG/AaWKVivvLqftBbwZgLQU+BK/d1GL7RcbgMDBdPXiXzuAbWBt0BtZGwF+KI+nzVXIVoE9hWIc2PHq/su6A3gzAO6AN4BC+qzpd+v5Ewim9Ay1Qvgmyb+BTTG9KvJjbYXiHPrp5cAdx2hCJCGgjfBOKhJqmq/tEaC6t3Rd+4gbg1/BP5qwk9aXmnkgH5MuNXavEAa+vO+Jhpog0+7OddUqjtjbrVzAXk2ksGhSu08ZVmBVJS1A6+s5vnAsVlBngAfVCaTQX+AQwHk9cCxtCDJ3cgFeKSg/UPsPfCY/GVpQfy7UZJ9V4lWUj5ost6cNgtIV0/MaVQ4SF0As343KhwkK0WQsjqSdb/MFUHIyZGiMm0RZIyiI+S0tCzwtW8RhLAybdERwsq0RUcIK9MWHSGsTFt0hLAybdERwsq0/TeO3ALTPxOyPOYYDQAAAABJRU5ErkJggg=="
	},
	{
		description: 'Leadership',
		path: '/leadership',
		element: <App page={() => navigationDetails("Leadership")} />,
		image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABzklEQVR4nO2W30oCQRSHvyu7LPrjReF1D+BjtEuvEZa+RBbdRT1GCD2BGgpmF2XQcxSk3m9sHGETdp05Ou4m88EBF+fM/H5zds4OeDwej2dDeQGe2QAiiX9P9B+M7AB1YH8JI7vAGbBNjlyIyA+gnDKmD/RS/itLbjzHOTmylxCSZWaRiQ+ZK1eSgu4s8u6VG+CUA+AWqMrzFtAAhsBUYiivYknGVCUnzi0kR8B74pDPx0jGFJqtBSZm8ZaoTCFpGJiIitClTK4jpkZyv7b05wTFzzMmFkbGhnM6Y37RngMjPXJmaGFkQIGpWxipuRYTAt3Eh6wDBBbtd2Rg4tWi/YYaPdcZizcNFz5aYCY2cWg417VGT2iwk6aVKcl1ZCANYCK/a5aViDR6ugaJbdZHV6tnYtkyXTPR6lnWyCnwJAdy0TxT2fHQhZHOEq/WjUXbnY+rlDk7Wj2BQeJJSiW0JrIObaDU80szI+kyJedpBUY6K9TzZyfaibbZznJueb/SnL3AUo+aaEWRO4UyUgFaUuKs8j8Cx2swUtHoiZM+LRb8khxXRipaPS3Fog8OjbS0erLKlxbfDo2MtXqWXXjVRiJtvjdStIp4PB6Px4OSH1213b2cUYIbAAAAAElFTkSuQmCC'
	},
	{
		description: 'About',
		path: '/about',
		element: <App page={About} />,
		image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABWUlEQVRIibXVy0ocQRjF8d94W+QFXOgk4MJFFsE8gRsVDSSgD+LGl/AdkszalTsJuBVFEhgv6CYhWQTxEuNOHJkRJosppWnpruroHDjQ1f19/0MVVdU15XqFJcxhEqPh/Tm+YxPr+B3hPNI4GmijG3EbnzGWCn+HvwngvC8xH4Mv4q4Echpc9L2DD0Xwt2iVNO9jMHivpO4Gb/LwGnYiS3CIoeCDSO1WYD5oLtJw77PglNqZbEAjsamKP2YDjhMampgIbibUHwnrCXVx3eJX5jmmlzAQBt2EhqoayAac9CHgIhuw24eAb9mAtT4EbGQHNWwr3xU7mfrYobzEi3zilN4xL2pq4Wdw2ZXSxUrRtN7rXVhPOWC7GC4KgIUwxf+BXwn7P6YxfJL2w7n3jdz9k6I6lvV2xA9cl8Bnq8KLlIf/wfRzwfMBXyWuedWADlYx8txw+ILXqcX/APJm/BWgL6buAAAAAElFTkSuQmCC'
	},
	{
		description: 'Notes: HTTP Content Types',
		path: '/engineering/notes-http-content-types',
		element: <App page={NotesHTTPContentTypes} />,
	},
	{
		description: 'Notes: HTTP Security Headers',
		path: '/engineering/notes-http-security-headers',
		element: <App page={NotesHTTPSecurityHeaders} />,
	},
	{
		description: 'Data Pipelines And Backpressure',
		path: '/engineering/data-pipelines-and-backpressure',
		element: <App page={DataPipelinesAndBackpressure} />,
	},
	{
		description: 'URL Shortener',
		path: '/engineering/path-shortener',
		element: <App page={UrlShortener} />,
	},
];

export const contentTree = {
	description: 'Tree',
	path: '/content-tree',
	image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACrUlEQVR4nO2YO2gVQRSGPxNQ46vwETUIioLgKyg2Kj4KRQioRGIEsfJRCBKDLxAlpYqSwgekEC+iFjaiKNiI2hpBCx+FCqbQQtQUUUwEjblyYBaGZXczj71778r+cIqdO3Pm//fMPefsQIECBQr8r5gKNANrgIXARHKAycAx4CUwApQ1+wv0AseBSdQg1gOfQqTj7AvQTg2hBRgyJB+YROgENYDFwC9L8rqI3dUiPg5oA944kg9sAJiZNfnNQJ8ncd0uZEl+FzCcIvky8B0YnwX5RR7nfTRrz0LAPQdikv+fG0RtGLhUyRoxXZGxFSCkBGcM578C5lRCQKvj0ZDKK9hnseYdMCNN8g3AM4ON30aMHVI+dloKfwCMSUvAZYMN+4E6YBvwTRs/oFVr2+i1pkF+hUXaLCkRTcAjNbZX+VnnIOBpGgJKlpuWVOjFOoEdys9yx1ajyYf8BFVkbFuD1ZqP4BwvcEwCbT4CNlpsNAhcBBpjfDU6CujwEXDQcJMeYLZaswzoBj4AW0PR1Nf8Bm6rlzRPPUf5Pukj4JQBeck4S1S6fBH67Y9KAgHk+SPQpZ3tOuBogn95ic7ocAy7bpJW0VJpvfbcrDJN0no9itbYnoIA6V6jCuPZhGOj2ywfAdNU2H0E7A/53BBTscsRJpcA3njoKUBqQYBuy7V70hCwKuKKxMYkEQQIqrNpV1pPSrjiIUDa6AB3Ddf8BJaSIsYCTxwFSHELcNNg/hCwiQpgCnDHQcBVzUfPKHP7gJVUENLXHAZ+WAi4pa0/l9A/nc7yylE+L88bNnr3tXVd2rh8nkoRO6KiW7XLrS3ANeB9zHfDY23+WkW4JaHpqyoa1BnuT7sYZY2vmoDX5BADocySOwxqAj6TQ/TG/Ilzg/nADeA6MLfaZAoUKEDt4h8V1KIDDyWEJAAAAABJRU5ErkJggg==',
};

export type Tree = { children: { [path: string]: Tree }, path?: string; element?: JSX.Element; description: string; };

let _tree: Tree | null = null;

export function getTree() {
	if (_tree) {
		return _tree;
	}
	const tree: Tree = { ...routes[0], children: {} };
	for (let i = 1; i < routes.length; i++) {
		const route = routes[i];
		const breadcrumbs = route.path.split('/').filter(e => e);
		let node: Tree = tree;
		for (const breadcrumb of breadcrumbs) {
			node.children[breadcrumb] = node.children[breadcrumb] ?? { children: [] };
			node = node.children[breadcrumb];
		}
		node.path = route.path;
		node.element = route.element;
		node.description = route.description;
	}
	_tree = tree;
	return tree;
}

export const blogPath = (path: string) => `/blog${path ?? ''}`;

export function getList(subTree: Tree) {
	const collect: JSX.Element[] = [];
	const row = <li key={subTree.path}>
		{subTree.path ? <Link style={{textDecoration: 'none', color: 'var(--secondary)'}} to={blogPath(subTree.path) as string}>{subTree.description}</Link> : subTree.description}
		{Object.keys(subTree.children).map(inner => getList(subTree.children[inner]))}
	</li>;
	collect.push(row);
	return <ul key={subTree.path}>{collect}</ul>;
}

const navigationDetails = (description: string) => {
	const items = getList(getTree().children[description.toLowerCase()]);
	return <><h1>{description}</h1>{items}</>;
}

export const navigation = [
	...routes.slice(0, 5),
	contentTree,
];

export default routes;
