import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routes, { contentTree } from './routes.tsx';
import App from './App.tsx';
import ContentTree from './pages/content-tree/index.tsx';

const router = createBrowserRouter([
	{
		...contentTree,
		element: <App page={ContentTree} />,
	},
	...routes,
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
