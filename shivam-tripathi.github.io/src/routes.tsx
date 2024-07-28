
import DataPipelinesAndBackpressure from '../articles/engineering/data-pipelines-and-backpressure.mdx'

import NotesHTTPContentTypes from '../articles/engineering/notes-http-content-types.mdx';
import NotesHTTPSecurityHeaders from '../articles/engineering/notes-http-security-headers.mdx';
import Entropy from '../articles/engineering/notes-entropy.mdx';
import ModelEvalROCPRCurves from '../articles/engineering/model-eval-roc-pr-curves.mdx';

import AppendixMachineLearning from '../articles/notes/appendix-machine-learning.mdx';

import GrowthFramework from '../articles/product/growth-framework.mdx';
import HypothesisTesting from '../articles/product/hypothesis-testing.mdx';
import SEO from '../articles/product/seo.mdx';
import Ads from '../articles/product/ads.mdx';

import Quotes from '../articles/quotes.mdx';

import App from './App';
import About from './pages/about';
import Landing from './pages/landing';
import { Link } from 'react-router-dom';
import { CodeXml, Dice5, HomeIcon, Kanban, ListTree, Notebook, Star, User, Quote, ChevronRight, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const core = [
	{
		path: '/',
		description: 'Home',
		element: <App page={Landing} />,
		// image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABpElEQVRoge3XsWvUYBzG8Y9yKIJVEXQoDjd2EVzsJDgIgpubbnVydtM/wdWxq5MgiCCO4mBBKAguLuLiIqIUWpCj2FodLm/PxrSXq7nkZ32/8EzJvXm+5PJ7EzK16ONlkX7HXfbNNazgZ5FVXO+00YQcwl38MJJI2cJ9HO6sXU1O4Ik/Bcp5jtMddRzLBXwwXiLlIy6W1tjt3NZYwGCPIrtlUPw2cQffK86bOkfxYB8C5TzEsWLNS/jUpsg5vG5AIuWN0Yg+gxdtiFzG5wYlUr7ianGNnuGE25qGQBqtm1OQSNnEveJacKNpiRk8nqJAOc9wqmmJObxrUSLlPc43JXET3zqQSBng1t8IpIetK4FyFnFkUomzdo6/KFnCbF2Jqg0pUr7gyjiJ26pfEaJlw3AbSCN6m+N4FKDgpHmKk7+LLBcH1gKUq5vUdZnRB84G3mK+fKsCM2/4frZOxX/M0PJfYEf38J+cdcki0cgi0cgi0eg1vF7VvrQXje1ZB+aOZJFoZJFoZJFoZJFoZJFoZJFoZJFoHGiRpdZbTM6rrgtk/ht+AZJi8ybhOtGyAAAAAElFTkSuQmCC',
		icon: <HomeIcon/>,
	},
	{
		description: 'Engineering',
		path: '/engineering',
		element: <App page={() => navigationDetails("Engineering")} />,
		// image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADj0lEQVRoge2az0tUURTHP6UUOJO6sSh/bJLMIuiHGY3rXJQxukmCFkH9AUUui6CSEsH+AjX6BelfoFG5yTYaLQvaqBW00CAbNX9Ni/te/pi559773htHyi8ckJl7zvd857173nnnClv4P9ABLAHpdbYAtOUxL2dMkCnCt/d5zMsJxcAyeiFzQGHUpNujDgjUAtuE73cC1VGTugipAq4DZYZ1tRaxjhi+LwOuAZUWsZxQzcp9/w1o1KyLA0/Q31a+dQMxTYwzHkcaGAf2R6KAtSJ8Wwa6ULcJQAPQD8xYiPAtBfQBCS/GDqCTzP0ViZhsIlbbB2DQIXmdDQKjwvehxFQYRGy0jQPlumSlzd7oidksqETtH2fEgE/k/0r49hlVTALhBDC/CUQsAKeCivBx25F0ElVek0AN6srGvL+bgR5gyjHmrbAiQLUT7yzIZoB7qBbFhBKgHbtyPQwURCEE4KWB7CtwMkDco8CYIfZAyNz/osFANIFQFi1QAXwxcCS03g7oFwhmgOMRcNQBswJPX1iCOPJ9fCcswSrcF3hSBCi9xahSdwV4JgSfRN7YSWAI+OXZG+C8sL4EuZo9Bi6j9uIuScADVBtgWxK7DbF0fu2CX68D/xjqKmYg2zu2ZElNMkkL3yaNb4tjDkvZgrgESAMHNMkMWfi+1vjWBMgjtBDd5pu28P2p8Y0HFZKLd3YbZP0lCZFPGCH7NJ+PWPjq1uwNmMsaIYuOvoc0n3dZ+OrWHHbMIWvObajh2W/s7s0egaBd8Lsr+D2y5J7zcr0hqSxE/dqthsCTqIeYDk2o6jTt2SvgnLC+FPgh8PUAF1DjJucBXxHqqawLLj3cXNEh8KTQj4+sITWNs6iGLyzqkZvGFxFwkBAI0qgWPMyQohL1PiNxnA4Rfw1sXqzqA8Q9xga+WO1EDeJMlWQW1cRJBcBHKWpPzFnEHUFNIUPjoQXZaptCdbHNwEFU2xH3/m5BVUKpOmWzzrAiGpHPOjbKloGzQUWUsTIV3wz2HdijS1bqtS4RovfJAXYDF4M4VrH5htiBD35MxwrDRHOsMAC8NYjIyRnJPGqM6fc8CdTTN+WQfMrz8R92BcBNMmfNOTu1+oh+qhgDnluI6EXfO9V5HGmPMzIRPspR45giw7qrmIW0GmIUeVxhJpihYerN0tid/OYdJeThHwZyBWkoPZoLwlxNUZ6irsp6LKLGsFv45/EH7MxXsTMY2v8AAAAASUVORK5CYII='
		icon: <CodeXml/>,
	},
	{
		description: 'Product',
		path: '/product',
		element: <App page={() => navigationDetails("Product")} />,
		// image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB8ElEQVR4nO2YwWpTQRSGP0NCRbqvii7duelDVJo2mDco+gQu2kXFhdu+QfsMddWWbnTjMxTpoiS0JBoLhUpWFYk5ZeC/MISGeJObe+fW+WE2YWZyvvPPnJm5EBU1i9aB70AXqFNidQFT61Bi9e4DyGtg6EGsUkItAZeC2KKkegAcC+IrUKGk2hTENfCckuolcCOQJiXVQ+BEELshHWBrKcfuCeIUeERAB5gDqv7juKbG/AaWKVivvLqftBbwZgLQU+BK/d1GL7RcbgMDBdPXiXzuAbWBt0BtZGwF+KI+nzVXIVoE9hWIc2PHq/su6A3gzAO6AN4BC+qzpd+v5Ewim9Ay1Qvgmyb+BTTG9KvJjbYXiHPrp5cAdx2hCJCGgjfBOKhJqmq/tEaC6t3Rd+4gbg1/BP5qwk9aXmnkgH5MuNXavEAa+vO+Jhpog0+7OddUqjtjbrVzAXk2ksGhSu08ZVmBVJS1A6+s5vnAsVlBngAfVCaTQX+AQwHk9cCxtCDJ3cgFeKSg/UPsPfCY/GVpQfy7UZJ9V4lWUj5ost6cNgtIV0/MaVQ4SF0As343KhwkK0WQsjqSdb/MFUHIyZGiMm0RZIyiI+S0tCzwtW8RhLAybdERwsq0RUcIK9MWHSGsTFt0hLAybdERwsq0/TeO3ALTPxOyPOYYDQAAAABJRU5ErkJggg=="
		icon: <Kanban/>,
	},
	{
		description: 'Leadership',
		path: '/leadership',
		element: <App page={() => navigationDetails("Leadership")} />,
		// image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABzklEQVR4nO2W30oCQRSHvyu7LPrjReF1D+BjtEuvEZa+RBbdRT1GCD2BGgpmF2XQcxSk3m9sHGETdp05Ou4m88EBF+fM/H5zds4OeDwej2dDeQGe2QAiiX9P9B+M7AB1YH8JI7vAGbBNjlyIyA+gnDKmD/RS/itLbjzHOTmylxCSZWaRiQ+ZK1eSgu4s8u6VG+CUA+AWqMrzFtAAhsBUYiivYknGVCUnzi0kR8B74pDPx0jGFJqtBSZm8ZaoTCFpGJiIitClTK4jpkZyv7b05wTFzzMmFkbGhnM6Y37RngMjPXJmaGFkQIGpWxipuRYTAt3Eh6wDBBbtd2Rg4tWi/YYaPdcZizcNFz5aYCY2cWg417VGT2iwk6aVKcl1ZCANYCK/a5aViDR6ugaJbdZHV6tnYtkyXTPR6lnWyCnwJAdy0TxT2fHQhZHOEq/WjUXbnY+rlDk7Wj2BQeJJSiW0JrIObaDU80szI+kyJedpBUY6K9TzZyfaibbZznJueb/SnL3AUo+aaEWRO4UyUgFaUuKs8j8Cx2swUtHoiZM+LRb8khxXRipaPS3Fog8OjbS0erLKlxbfDo2MtXqWXXjVRiJtvjdStIp4PB6Px4OSH1213b2cUYIbAAAAAElFTkSuQmCC'
		icon: <Star/>,
	},
	{
		description: 'Miscellaneous',
		path: '/miscellaneous',
		element: <App page={() => navigationDetails("Miscellaneous")} />,
		icon: <Dice5/>,
	},
	{
		description: 'Notes',
		path: '/notes',
		element: <App page={() => navigationDetails("Notes")} />,
		icon: <Notebook/>,
	},
	{
		description: 'Quotes',
		path: '/quotes',
		element: <App page={Quotes} />,
		icon: <Quote/>,
	},
	{
		description: 'About',
		path: '/about',
		element: <App page={About} />,
		// image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABAElEQVR4nO2XTQrCMBBG36rHKEHceQLrBfQA3sOtrtxY9XpS0I2I2nqNSmEKg/jThCQg9IMPyiQzj5lkkYK9EmAPPIAK2EosuHZA/eI8BrgSWAZM5LuJeVGixll/8ESB39npGHZfCto6dxnnWMXuHSA3tT9zOYZarDX7AW+g0w51vso6wVedugf/kAEK4AQMY456oXKOMcBG3GgtOYfQYANcxEZ1bkKCU+Cs9l2BgWMDnRNeoVHAqQXUGzi1hHoDj+QitWv6UgUFN5q/uclBwSsFGnWEegEXwNKmgC+wq/4HXKmXpKvah2Bpk7T1+Njb2IATgbedu7gUaJS/jF580hMKHdoyv1Z5mgAAAABJRU5ErkJggg=='
		icon: <User/>,
	},
];

const routes = [
	...core,
	{
		description: 'HTTP Content Types',
		path: '/notes/http-content-types',
		element: <App page={NotesHTTPContentTypes} />,
	},
	{
		description: 'HTTP Security Headers',
		path: '/notes/http-security-headers',
		element: <App page={NotesHTTPSecurityHeaders} />,
	},
	{
		description: 'Appendix: Machine Learning',
		path: '/notes/appendix-machine-learning',
		element: <App page={AppendixMachineLearning} />,
	},

	{
		description: 'Entropy',
		path : '/notes/entropy',
		element: <App page={Entropy} />,
	},
	{
		description: 'Model Evaluation: ROC and PR Curves',
		path: '/notes/model-eval-roc-pr-curves',
		element: <App page={ModelEvalROCPRCurves} />,
	},
	{
		description: 'Data Pipelines And Backpressure',
		path: '/engineering/data-pipelines-and-backpressure',
		element: <App page={DataPipelinesAndBackpressure} />,
		createdAt: '30 November 2018'
	},

	{
		description: 'Growth Framework',
		path: '/product/growth-framework',
		element: <App page={GrowthFramework} />,
	},
	{
		description: 'Hypothesis Testing',
		path: '/product/hypothesis-testing',
		element: <App page={HypothesisTesting} />,
	},
	{
		description: 'Experiments with SEO',
		path: '/product/search-engine-optimisation',
		element: <App page={SEO} />,
	},
	{
		description: 'Monetizing through Ads',
		path: '/product/ads',
		element: <App page={Ads} />,
	}
];

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

export const contentTree = {
	description: 'Tree',
	path: '/content-tree',
	icon: <ListTree/>,
	element: <App page={() => <CollapsibleList subTree={getTree()} />}/>,
};


export const blogPath = (path: string) => `/blog${path ?? ''}`;

const navigationDetails = (description: string) => {
	const subTree = getTree().children[description.toLowerCase()];
	return <><h1>{description}</h1><CollapsibleList subTree={subTree}/></>;
}

export const navigation = [
	...core,
	contentTree,
];

export const CollapsibleList = ({ subTree }: { subTree: Tree }) => {
	const collect: JSX.Element[] = [];
	const [showChildren, setShowChildren] = useState(false);

	let description;
	const linkedContent = <Link to={blogPath(subTree?.path ?? '') as string}>{subTree.description}</Link>;
	if (Object.keys(subTree.children ?? {}).length > 0) {
		const listHeaderCSS = {display: 'flex', alignItems: 'center'};
		if (showChildren) {
			description = <div style={listHeaderCSS}><ChevronRight onClick={() => setShowChildren(false)}/>{linkedContent}</div>;
		} else {
			description = <div style={listHeaderCSS}><ChevronDown onClick={() => setShowChildren(true)}/>{linkedContent}</div>;
		}
	} else {
		description = linkedContent;
	}

	const listStyle = { listStyleType: 'none' };

	const row = <li key={subTree.path} style={listStyle}>
		{description}
		{Object.keys(subTree.children).map(inner => {
			return <div style={{display: showChildren ? 'none' : 'inline' }}>{<CollapsibleList subTree={subTree.children[inner]} />}</div>;
		})}
	</li>;

	collect.push(row);
	return <ul key={subTree.path} style={listStyle}>{collect}</ul>;
}

export default routes;
