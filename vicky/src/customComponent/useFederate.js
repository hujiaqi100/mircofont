import React, { Suspense, useEffect, useState } from "react";

async function loadComponent(scope, module) {

    await __webpack_init_sharing__('default');
    const container = window[scope];
    await container.init(__webpack_share_scopes__.default);
    const factory = await window[scope].get(module);
    const Module = factory();
    return Module;
}

const urlCache = new Set();
const useDynamicScript = url => {
    const [ready, setReady] = React.useState(false);
    const [errorLoading, setErrorLoading] = React.useState(false);

    React.useEffect(() => {
        if (!url) {
            setErrorLoading(true)
            return;
        }

        if (urlCache.has(url)) {
            setReady(true);
            setErrorLoading(false);
            return;
        }

        setReady(false);
        setErrorLoading(false);

        const element = document.createElement('script');
        element.src = url;
        element.type = 'text/javascript';
        element.async = true;

        element.onload = () => {
            urlCache.add(url);
            setReady(true);
        };

        element.onerror = () => {
            setReady(false);
            setErrorLoading(true);
        };

        document.head.appendChild(element);

        return () => {
            urlCache.delete(url);
            document.head.removeChild(element);
        };
    }, [url]);

    return {
        errorLoading,
        ready,
    };
};

const componentCache = new Map();
export const useFederatedComponent = (url, scope, module, type = 'react') => {
    const key = `${url}-${scope}-${module}`;
    const [Component, setComponent] = React.useState(null);
    const { ready, errorLoading } = useDynamicScript(url);
    React.useEffect(() => {
        if (Component) setComponent(null);
    }, [key]);

    React.useEffect(() => {
        (async () => {
            if (ready && !Component) {
                const Comp = type == 'react' ? React.lazy(() => loadComponent(scope, module)) : await loadComponent(scope, module);
                componentCache.set(key, Comp);
                setComponent(Comp);
            }
        })()
    }, [Component, ready, key]);

    return { errorLoading, Component };
};