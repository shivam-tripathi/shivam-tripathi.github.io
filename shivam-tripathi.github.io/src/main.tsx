import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routes, { blogPath, contentTree, getTree } from './routes.tsx';
import App from './App.tsx';
import ContentTree from './pages/content-tree/index.tsx';

const router = createBrowserRouter([
	{
		...contentTree,
		path: blogPath(contentTree.path),
		element: <App page={() => <ContentTree tree={getTree()}/>} />,
	},
	{
		...routes[0],
	},
	...routes.map(route => ({	...route, path: blogPath(route.path) })),
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
