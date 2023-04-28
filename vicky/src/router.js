import { renderRoutes } from 'react-router-config';
import { BrowserRouter, Route } from 'react-router-dom';
import routers from '../Routers'
import React, { useState, useEffect } from 'react';
const Start = () => {
    const [isPhone, setIsPhone] = useState(window.matchMedia("(max-width:600px)").matches ? true : false)
    useEffect(() => {
        const getSize = () => {
            const _matchSize = window.matchMedia("(max-width:600px)").matches
            setIsPhone(_matchSize ? true : false)
        }
        window.addEventListener('resize', (e) => getSize(e), false)
        return window.removeEventListener('resize', (e) => getSize(e), false)
    }, [])
    return <BrowserRouter>
        {renderRoutes(routers, { state: window?.__DataInfo__, currentPath: window?.currentPath, sliderData: window?.sliderData, isPhone })}
    </BrowserRouter>
}
export default Start