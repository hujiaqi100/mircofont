import React, { useEffect, useRef, useState } from 'react';
import _ from 'lodash'
import './app.less'
import Head from './head-title/index.jsx'
import Left from './left-tree/index.jsx'
import { ListenTabs } from './tab/index.jsx'
import ssrData from './ssrRenderData/App.ssr'
const NetfixClone = React.lazy(() => import("netfixClone/netfixClone"))
const App = (props) => {
    const { isPhone } = props
    const [contentWidth, setContentWidth] = useState(!isPhone ? 0 : 290)
    const getContent = (res) => {
        setContentWidth(res + 50)
    }
    useEffect(() => {
        setContentWidth(isPhone ? 0 : 290)
    }, [isPhone])
    return (
        <div className='layout'>
            <Head {...props} getContent={getContent} >
                {isPhone && <Left {...props} getContent={getContent} isPhone={isPhone} />}
            </Head>
            <div className='content-lay'>
                <div className='left'>
                    <Left {...props} getContent={getContent} />
                </div>
                <div className='content'
                    style={{ width: `calc(100% - ${contentWidth}px)` }}
                >
                    <ListenTabs {...props} />
                </div>
            </div>
        </div >
    )
}
App.loadData = () => {
    return ssrData
}
export default App
