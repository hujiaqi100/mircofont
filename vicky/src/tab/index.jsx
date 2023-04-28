import React, { useState, useEffect } from 'react';
import { Spin, Tabs, Tooltip } from 'antd'
import './index.less'
import _, { random } from 'lodash'
import { local } from '../own/localStorage.js'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import URL from 'url'
const { TabPane } = Tabs
const sendPostMessage = (message) => {
    window.postMessage(message)
}
import Com from '../customComponent/index.jsx'

// const Com = React.lazy(() => import('../customComponent/comone/index.jsx'))
const ListenTabs = (props) => {
    const { isPhone } = props
    const [tabPaneList, setTabPaneList] = useState([])
    const [activeKey, setActiveKey] = useState()
    useEffect(() => {
        const { pathname, query: { dpath = '' } = {} } = URL.parse(window.location.href, true)
        const openKeyTab = (data) => {
            const localActiveKey = local.getItem('activeKey')
            const localTabsList = JSON.parse(local.getItem('tabs'))
            if (localTabsList && localTabsList.length > 0 && localActiveKey) {
                if (dpath) {
                    setActiveKey(dpath)
                }
                // setActiveKey(() => localActiveKey)
                setTabPaneList(pre => {
                    let data = _.cloneDeep(pre)
                    let _list = localTabsList
                    data = _list
                    return data
                })
            } else {
                const { initNode } = data.data
                if (initNode) {
                    setTabPaneList(pre => {
                        let data = _.cloneDeep(pre)
                        data.push({ ...initNode })
                        return data
                    })
                }
            }
            window.removeEventListener('message', openKeyTab, false)
        }
        const getMessageForSetTab = (data) => {

            const { treeNodeInfo, openTab } = data.data
            if (treeNodeInfo) {
                setActiveKey(() => treeNodeInfo.id)
                local.setItem('activeKey', treeNodeInfo.id)
                setTabPaneList(pre => {
                    let data = _.cloneDeep(pre)
                    if (data.some(d => d.id === treeNodeInfo.id)) {
                        return data
                    }
                    data.push({ ...treeNodeInfo })
                    local.setItem('tabs', JSON.stringify(data))
                    return data
                })
            }
            if (openTab) {
                const tempNode = {
                    name: openTab.url,
                    tabType: 'link',
                    nodetype: 'tmp',
                    url: openTab.url,
                    id: `${Math.random()}-${openTab.url}`
                }
                setActiveKey(() => tempNode.id)
                local.setItem('activeKey', tempNode.id)
                setTabPaneList(pre => {
                    let data = _.cloneDeep(pre)
                    data.push({ ...tempNode })
                    const currentTheme = localStorage.getItem('themeType')
                    let path = `${window.location.pathname}?theme=${currentTheme}&dpath=${tempNode.id}`
                    history.pushState(null, null, path)
                    local.setItem('tabs', JSON.stringify(data))
                    return data
                })
            }
        }
        window.addEventListener('message', openKeyTab, false)
        window.addEventListener('message', getMessageForSetTab, false)
        return () => {
            window.removeEventListener('message', getMessageForSetTab, false)
        }
    }, [])
    // const onChange = (key) => {
    //     setActiveKey(() => key)
    //     local.setItem('activeKey', key)
    // }
    const onTabClick = (key, e) => {
        const currentTheme = localStorage.getItem('themeType')
        let path = `${window.location.pathname}?theme=${currentTheme}&dpath=${key}`
        // sendPostMessage({'selectSlider':{}})
        history.pushState(null, null, path)
        setActiveKey(() => key)
        local.setItem('activeKey', key)
    }
    const onDelete = (key) => {
        setTabPaneList(pre => {
            setActiveKey(() => key)
            let data = _.cloneDeep(pre)
            let idx = data.findIndex(d => d.id === key)
            idx >= 0 && data.splice(idx, 1)
            local.setItem('tabs', JSON.stringify(data))
            let path
            if (data.length === 0) {
                setActiveKey(() => 'null')
                local.removeItem('activeKey')
                const currentTheme = localStorage.getItem('themeType')
                path = `${window.location.pathname}?theme=${currentTheme}`
                history.pushState(null, null, path)
            } else {
                if (activeKey !== key) {
                    setActiveKey(() => activeKey)
                    local.setItem('activeKey', activeKey)
                } else {
                    setActiveKey(() => data[data.length - 1].id)
                    local.setItem('activeKey', data[data.length - 1].id)
                    const currentTheme = localStorage.getItem('themeType')

                    path = `${window.location.pathname}?theme=${currentTheme}&dpath=${data[data.length - 1].id}`
                    history.pushState(null, null, path)
                }
            }
            return data
        })
    }
    useEffect(() => {
        sendPostMessage({
            beenCleared: activeKey
        })
    }, [activeKey])
    const Ss = (props) => {
        return <div className='init_content' >
            <pre >
                {`项目说明: \n\n· 基于ModuleFederation的微前端架构(可兼容vue)\n\n· 包含react服务端渲染(自定义ssr webpack plugin / less-loader / rollup plugin)\n\n· 可配置化多服务地址接口代理\n\n· 目录页为原生dom自定义开发组件 可视化扩展\n\n· 自定义less-loader支持换肤\n\n· pc端或手机横放支持tab页功能`}
            </pre>
        </div>
    }
    return (
        <div className='tabs_lay'>
            {
                tabPaneList.length > 0 ? <Tabs
                    hideAdd
                    type="editable-card"
                    // onChange={onChange}
                    activeKey={activeKey}
                    onEdit={onDelete}
                    onTabClick={onTabClick}

                >
                    {
                        (tabPaneList || []).map((val) => {
                            return <TabPane
                                value={val.id}
                                tab={<Tooltip title={val.name} arrow={false}>{val.name}</Tooltip>}
                                className='tabpane'
                                key={val.id}>
                                {
                                    val.tabType === 'link' ?
                                        <div className='tempTab'><iframe
                                            loading='eager'
                                            src={val.url} /></div>
                                        : <React.Suspense fallback='load'> <Com  {...props} {...val} />   </React.Suspense>
                                }

                                {/* <Com  {...val} /> */}
                                {/* <BrowserRouter>
                                    <Switch>
                                        <Route exact path={`/dqp/:name`} component={(match) => {
                                            return <React.Suspense fallback='load'> <Com match={match} {...val} />   </React.Suspense>
                                        }} />
                                    </Switch>
                                </BrowserRouter> */}
                            </TabPane>
                        })
                    }
                </Tabs> : <Ss {...props} />
            }

        </div>
    )
}
export { ListenTabs }