import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes, matchRoutes } from 'react-router-config';
import routers from '../Routers'
export const render = (req, context = {}) => {
	return renderToString((
		<StaticRouter location={req.path} context={context}>
			{renderRoutes(routers, context)}
		</StaticRouter>
	));
}
export const matchRouters = (path) => {
	const matchedRoutes = matchRoutes(routers, path);
	return matchedRoutes;
}