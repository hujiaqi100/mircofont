import React, { useState, useEffect, useRef, useMemo } from 'react';
import './index.less'
import _, { min } from 'lodash'
import { CaretDownOutlined, SettingFilled, CaretRightOutlined, DeleteOutlined, FileOutlined, FolderOutlined } from '@ant-design/icons';
// import { category } from './category/left-category.js'
import { Resizable } from 're-resizable'
import ReactDOM from 'react-dom'
import { local } from '../own/localStorage.js'
import classnames from 'classnames'
import { BarsOutlined, CloseOutlined } from '@ant-design/icons';
import { getSliderItem } from './chooseItem'
import URL from 'url'
import { Button, Dropdown, theme, Modal, Spin } from 'antd';
import { sliderCategory } from './slider-category'
import CreateCategory from './createElement/createCategory.jsx'
import CreateNode from './createElement/createNode.jsx'
import '../../font/iconfont.css'
import instance from 'axios'
const { useToken } = theme;
const sendPostMessage = (message) => {
    window.postMessage(message)
}
const Left = (props) => {
    const { isPhone, ctrlMenuShow, showPhoneMenu } = props
    const sideRef = React.useRef({})
    const nodeRef = React.useRef({})
    const [currentNodeId, setCurrentNodeId] = useState('')
    const commonNodeRef = React.useRef({})
    const [dragWidth, setDragWidth] = useState(240)
    const [originWidth, setOriginWidth] = useState(240)
    const [treeCategory, setTreeCategory] = useState()
    const [activeSlider, setActiveSlider] = useState()
    const [resizing, setResizing] = useState(false);
    const [load, setLoad] = useState(false)
    const [showLeft, setShowLeft] = useState(true)
    const [curretnActiveKey, setCurrentActiveKey] = useState()
    const getLevelofPadding = (level) => {
        return level * 12 + 'px'
    }
    const { state = [], currentPath = '', sliderData } = props
    const currentData = useMemo(() => {
        const currentPath = (props.currentPath || '')?.split('\/')?.filter(Boolean)[1]
        const currentTree = (props.state || []).find(d => d.mark == `test_${currentPath}`)?.data
        return currentTree
    }, [])
    useEffect(() => {
        const { pathname, query } = URL.parse(window.location.href, true)
        const pathParams = pathname.split('/').filter(Boolean)
        let node = query.dpath && traceTreeAndFindNode(treeCategory || [], query.dpath)
        node && setCurrentNodeId(node.id)
        node && sendPostMessage({
            initNode: node
        })
        const resolveTreeNode = ({ data }) => {
            const { beenCleared } = data
            if (beenCleared) {
                setCurrentNodeId(beenCleared)
            }
        }
        let _path;
        let _url;

        if (!localStorage.getItem('themeType')) {
            localStorage.setItem('themeType', 'default')
        }
        const currentTheme = localStorage.getItem('themeType')
        // query.theme = currentTheme

	localStorage.setItem('activeSlider', props.currentPath?.split('\/').filter(Boolean)[1])
        let item = localStorage.getItem('activeSlider')
        let itemQuery = localStorage.getItem('activeKey')
        setCurrentActiveKey(itemQuery)
        const queryPath = itemQuery ? `&dpath=${itemQuery}` : '';
        if (item) {
            _path = `/dqp/${item}?theme=${currentTheme}${queryPath}`
            _url = `/test/${item}`
        } else {
            _path = `/dqp/${sliderCategory.find(d => d.default)['icon-name']}?theme=${currentTheme}${queryPath}`
            _url = `/test/${sliderCategory.find(d => d.default)['icon-name']}`
        }
        const currentPath = props.currentPath?.split('\/').filter(Boolean)[1]
        const currentTree = props.state?.find(d => d.mark == `test_${currentPath}`).data
        setTreeCategory(() => _.cloneDeep(currentTree))
        // setTreeCategory(() => _.cloneDeep(_.get(props, 'state', []).find(d => d.mark === `test_${props.currentPath.split('/').filter(Boolean)[1]}`)?.data))
        // setLoad(true)
        instance.get(_url).then(data_info => {
            const { data } = data_info
            setLoad(false)
            setTreeCategory(() => _.cloneDeep(data))
        })
        leftRef.current.state.width = '290px'
        history.pushState(null, null, _path)
        setActiveSlider(item)

        window.addEventListener('message', resolveTreeNode, false)
        const hiddenLeft = (e) => {
            if (isPhone && e.pageY > 45 && e.pageX > 290 && e.target.className !== 'resize-save') {
                ctrlMenuShow(false)
            }
        }
        window.addEventListener('click', (e) => hiddenLeft(e), false)
        return () => {
            window.removeEventListener('message', resolveTreeNode, false)
            window.removeEventListener('click', (e) => hiddenLeft(e), false)
        }
    }, [])
    const traceTreeAndFindNode = (tree, id) => {
        for (let i of tree) {
            if (String(i.id) === String(id)) {
                return i
            }
            if (i.children) {
                let currentNode = traceTreeAndFindNode(i.children, id)
                if (currentNode) {
                    return currentNode
                }
            }
        }
    }
    const traceTree = (treeCategory, parentId, id) => {
        for (let i of treeCategory) {
            if (i.children) {
                if (i.id === parentId && i.children.some(d => d.id === id)) {
                    let idx = i.children.findIndex(d => d.id === id)
                    i.children.splice(idx, 1)
                    if (i.children.length === 0 || i.children.every(d => d.isDir)) {
                        i.children.unshift({ 'name': 'No Message', "level": i.level })
                    }
                    break
                }
                traceTree(i.children, parentId, id)
            }
        }
    }
    const [isMovedInNodeTitle, setIsMovedInNodeTitle] = useState(false)
    const [activeNodeTitleId, setActiveTitleId] = useState(void 0)
    const { token } = useToken();
    const contentStyle = {
        backgroundColor: '#333',
        borderRadius: token.borderRadiusLG,
        boxShadow: token.boxShadowSecondary,
        color: '#fff',
        padding: '6px',
    };
    const renderTree = (tree) => {
        return tree.map(val => {
            if (val.children) {
                if (val.children.length === 0) {
                    val.children.push({ 'name': 'No Message', "level": val.level + 1 })
                }
                return <div
                    className={'single_node'}
                    key={activeSlider + val.id || Math.random()
                    }
                    id={val.id}

                >
                    <div
                        id={val.id}
                        ref={f => nodeRef.current[val.id] = f}
                        className='root_node'
                        style={{ paddingLeft: getLevelofPadding(val.level) }}
                        onMouseEnter={(e) => {
                            if (e.target.className === 'root_node') {
                                setActiveTitleId(e.target.id)
                                setIsMovedInNodeTitle(true)
                            }
                        }}
                        onMouseLeave={() => {
                            setIsMovedInNodeTitle(false)
                            setActiveTitleId(void 0)
                        }}
                        onClick={(e) => {
                            e.stopPropagation()
                            val.isOpen = !val.isOpen
                            setTreeCategory(() => _.cloneDeep(treeCategory))
                        }}
                    >
                        <div className='node_title'>
                            <div>
                                {val.isOpen ? <CaretDownOutlined /> : <CaretRightOutlined />}&nbsp;&nbsp;{val.name}
                            </div>
                            {
                                isMovedInNodeTitle && activeNodeTitleId === val.id &&
                                <Dropdown
                                    placement="bottomRight"
                                    trigger={['click']}
                                    dropdownRender={() => {
                                        return (
                                            <div className='dropmenu' style={contentStyle}>
                                                <div style={{ cursor: 'pointer' }} onClick={(e) => {
                                                    e.stopPropagation()
                                                    create({
                                                        val,
                                                        treeCategory,
                                                        setTreeCategory,
                                                        type: 'category'
                                                    })
                                                }}>
                                                    <FolderOutlined />&nbsp;新建目录
                                                </div>
                                                <div style={{ cursor: 'pointer' }} onClick={(e) => {
                                                    e.stopPropagation()
                                                    create({
                                                        val,
                                                        treeCategory,
                                                        setTreeCategory,
                                                        type: 'node'
                                                    })
                                                }}>
                                                    <FileOutlined />&nbsp;新建节点
                                                </div>
                                            </div>
                                        )
                                    }}
                                >

                                    <SettingFilled onClick={(e) => [
                                        e.stopPropagation()
                                    ]} />
                                </Dropdown>
                            }
                        </div>

                    </div>
                    {val.isOpen && renderTree(val.children)}
                </div >
            } else {
                return <div
                    style={{ paddingLeft: getLevelofPadding(val.level) }}
                    className={'common_node'}
                    ref={f => commonNodeRef.current[val.id] = f}
                    key={activeSlider + val.id || Math.random()}
                    onClick={(e) => {
                        e.stopPropagation()
                        if (val.name === 'No Message') {
                            return
                        }
                        val.isActive = true
                        if (!localStorage.getItem('themeType')) {
                            localStorage.setItem('themeType', 'default')
                        }
                        const currentTheme = localStorage.getItem('themeType')
                        let path = `${window.location.pathname}?theme=${currentTheme}&dpath=${val.id}`
                        history.pushState(null, null, path)
                        sendPostMessage({
                            treeNodeInfo: val
                        })
                        setCurrentNodeId(() => traceTreeAndFindNode(treeCategory || [], val.id).id)
                        setTreeCategory(() => _.cloneDeep(treeCategory))
                        if (isPhone) {
                            ctrlMenuShow(false)
                            localStorage.removeItem('tabs')
                            let itemQuery = localStorage.getItem('activeKey')
                            setCurrentActiveKey(itemQuery)
                        }
                    }}
                    onContextMenu={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        if (val.name !== 'No Message') {
                            val.onDelete = !val.onDelete
                            setTreeCategory(() => _.cloneDeep(treeCategory))
                        }
                    }}
                ><div className={((props.ssr && JSON.parse(props.urlQuery).dpath) || currentNodeId || curretnActiveKey) === val.id ? 'node_name acitve' : 'node_name'} >{val.name}</div>
                    <div className='common_delete'>{val.onDelete && <DeleteOutlined onClick={(e) => {
                        e.stopPropagation()
                        traceTree(treeCategory, val.parent, val.id)
                        setTreeCategory(() => _.cloneDeep(treeCategory))
                    }} />}
                    </div>
                </div>
            }
        })
    }
    const handleClasses = {
        right: 'resizerHandle'
    };
    const handleClassesResizing = {
        right: 'resizerHandle resizing'
    };
    const selectSliderCategory = (info) => {
        const currentTheme = localStorage.getItem('themeType')
        let _path = `/dqp/${info['icon-name']}?theme=${currentTheme}`
        localStorage.setItem('activeSlider', info['icon-name'])
        history.pushState(null, null, _path)
        setActiveSlider(info['icon-name'])
        const _url = `/test/${info['icon-name']}`
        setLoad(true)
        instance.get(_url).then(data_info => {
            const { data } = data_info
            setLoad(false)
            setTreeCategory(() => _.cloneDeep(data || []))
        })
    }
    const [minWidth, setMinWidth] = useState(210)

    const showCategory = () => {
        setShowLeft(pre => {
            pre = !pre
            if (!pre) {
                props.getContent(0)
                leftRef.current.state.width = '50px'
            } else {
                props.getContent(240)
                leftRef.current.state.width = '290px'
            }
            localStorage.setItem('leftOpen', pre)
            setMinWidth(!pre ? 50 : 210)
            setDragWidth(!pre ? 0 : 240)
            setOriginWidth(!pre ? 0 : 240)
            return pre
        })
    }
    const leftRef = useRef()
    useEffect(() => {
        resizing && props.getContent(dragWidth)
    }, [dragWidth, resizing])
    const isPhoneStyle = React.useMemo(() => {
        if (isPhone) {
            const info = {
                position: 'absolute',
                zIndex: 10,
                background: '#000',
                top: '45px',
                left: 0,
                transition: 'all 0.3s'
            }
            if (showPhoneMenu) {
                info.transform = 'translateX(0px)'
            } else {
                info.transform = 'translateX(-300px)'
            }
            return info;
        }
    }, [isPhone, showPhoneMenu])
    return (
        <Resizable ref={leftRef}
            style={isPhoneStyle}
            className={classnames('resize-save')}
            axis="x"
            enable={{ right: isPhone ? false : (showLeft ? true : false) }}
            minWidth={minWidth}
            maxWidth={390}
            onResizeStop={(e, dir, elm, delta) => {
                setOriginWidth((_originWidth) => {
                    return _originWidth + delta.width;
                });
                // "".substring
                setResizing(false);
            }}
            handleWrapperStyle={{
                bottom: '0px !important',
                height: '100%',
                position: 'absolute',
                right: 0
            }}
            onResizeStart={() => setResizing(true)}
            handleClasses={resizing ? handleClassesResizing : handleClasses}
            onResize={(event,
                direction,
                refToElement,
                delta) => {
                setDragWidth(originWidth + delta.width);
            }}
        >
            <div className={"entireLeft"} style={{ width: dragWidth + 50 }} >
                <div className="sliderLeft">
                    {
                        (props.ssr ? props.sliderData : sliderCategory).map((val, idx) => {
                            return (
                                <div key={idx} className={(props.ssr ? props.currentPath?.split('\/').filter(Boolean)[1] : activeSlider) === val['icon-name'] ? 'sliderItem active' : 'sliderItem'} onClick={() => {
                                    if (!showLeft) {
                                        showCategory()
                                    }
                                    selectSliderCategory(val)
                                }
                                }>
                                    <div style={{ width: '20px' }}>
                                        {getSliderItem(val['icon-name']).inLine}

                                    </div>
                                </div>
                            )
                        })
                    }
                    {
                        !isPhone && <div className='hidden_left' onClick={() => {
                            showCategory()
                        }}>
                            <BarsOutlined />
                        </div>
                    }
                </div>
                <Spin spinning={!props.ssr && load} size='small'>
                    {
                        showLeft && <div className='left_lay'>
                            <div className='left_title'
                                id={activeSlider}
                                style={{ width: dragWidth }}
                                onMouseEnter={(e) => {
                                    if (e.target.className === 'left_title') {
                                        setActiveTitleId(e.target.id)
                                        setIsMovedInNodeTitle(true)
                                    }
                                }}
                                onMouseLeave={() => {
                                    setIsMovedInNodeTitle(false)
                                    setActiveTitleId(void 0)
                                }}
                            >
                                {/* {activeSlider && sliderCategory.find(d => d['icon-name'] === activeSlider).name} */}
                                {/* {sliderCategory.find(d => d['icon-name'] === props.currentPath?.split('\/').filter(Boolean)[1])?.name} */}
                                <div className='left_title_name'>
                                    Root &nbsp; {activeSlider || props.currentPath?.split('\/').filter(Boolean)[1]}

                                    {
                                        isMovedInNodeTitle && activeSlider === activeNodeTitleId &&
                                        <Dropdown
                                            placement="bottomRight"
                                            trigger={['click']}
                                            dropdownRender={() => {
                                                return (
                                                    <div className='dropmenu' style={contentStyle}>
                                                        <div style={{ cursor: 'pointer' }} onClick={(e) => {
                                                            e.stopPropagation()
                                                            create({
                                                                treeCategory,
                                                                setTreeCategory,
                                                                type: 'category',
                                                                isRoot: true
                                                            })
                                                        }}>
                                                            <FolderOutlined />&nbsp;新建目录
                                                        </div>
                                                        {/* <div style={{ cursor: 'pointer' }} onClick={(e) => {
                                                e.stopPropagation()
                                                create({
                                                    treeCategory,
                                                    setTreeCategory,
                                                    type: 'node',
                                                    isRoot: true
                                                })
                                            }}>
                                                <FileOutlined />&nbsp;新建节点
                                            </div> */}
                                                    </div>
                                                )
                                            }}
                                        >

                                            <SettingFilled onClick={(e) => [
                                                e.stopPropagation()
                                            ]} />
                                        </Dropdown>
                                    }
                                </div>

                            </div>
                            <div className='left' ref={sideRef} style={{ width: dragWidth }}>
                                {renderTree(treeCategory || currentData || [])}
                            </div>

                        </div>
                    }
                </Spin>
            </div >
        </Resizable >
    )
}
const NewModal = (props) => {
    const { val, setTreeCategory, treeCategory, type, close } = props
    const ref = useRef()
    return <Modal title={type === 'category' ? '新建目录' : '新建节点'} open={true} closable={false}
        onCancel={close}
        footer={[
            <Button size='small' onClick={close}>取消</Button>,
            <Button size='small' type='primary' onClick={() => ref.current.onOk()}>确定</Button>
        ]}
        maskClosable={true} >
        {
            type === 'category' ? <CreateCategory ref={ref} {...props} /> : <CreateNode ref={ref} {...props} />
        }
    </Modal>
}
const create = (options) => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    function close() {
        const unmountResult = ReactDOM.unmountComponentAtNode(div);
        if (unmountResult && div.parentNode) {
            setTimeout(() => {
                div.parentNode.removeChild(div);
            }, 300);
        }
    }
    ReactDOM.render(<NewModal {...options} close={close} />, div);
};
export default Left
