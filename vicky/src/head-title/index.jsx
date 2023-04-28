import React, { useEffect, useRef, useState } from 'react';
import './index.less'
import { Link } from 'react-router-dom'
import '../../font/iconfont.css'
import instance from 'axios'

import { BarsOutlined, HomeOutlined } from '@ant-design/icons';
import qs from 'querystring'
import URL from 'url'
import { Button, Select, Popover } from 'antd'
const { Option } = Select

const Head = (props) => {
    const { isPhone, matchSize } = props
    const backRef = useRef()
    const changeTheme = (value) => {
        localStorage.setItem('themeType', value)
        const url = URL.parse(window.location.href, true)
        url.query.theme = value
        const query = qs.stringify(url.query)
        const _url = `${url.protocol}//${url.host}${url.pathname}?${query}`
        history.pushState(null, null, _url)
        window.location.reload()
    }
    const themeList = [
        {
            type: 'default',
            name: '默认主题'
        },
        {
            type: 'blue',
            name: '海洋主题'
        },
        {
            type: 'yellow',
            name: '日出主题'
        }
    ]
    const content = (
        <div className='themelist'>
            {
                themeList.map(val => {
                    return <span
                        key={val.type}
                        onClick={() => {
                            changeTheme(val.type)
                        }}
                    >{val.name}</span>
                })
            }

        </div>
    );
    const [showPhoneMenu, setShowPhoneMenu] = useState(false)
    const ctrlMenuShow = (res) => {
        setShowPhoneMenu(res)
    }
    const leftClone = () => {
        if (isPhone) {
            return React.cloneElement(props.children, { ctrlMenuShow, showPhoneMenu, isPhone })
        }
    }
    return (
        <div className='head'>
            <div className='font'>
                <div style={{ position: 'relative', width: '36px' }}>
                    <svg t="1682564554925" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1163" width="100%" height="100%"><path d="M896 320V288h32v32h-32z m32 64V288h32v96h-32z m32-96h-64V256h64v32z m-32-32h-64V224h64v32z m-32-32h-64V192h64v32z m-32-32h-96V160h96v32z m-32-32h-128V128h128v32z m-64-32h-160V96h160v32z m-64-32h-128V64h128v32z m-96-64h-128V0h128v32z m32 32h-192V32h192v32z m-128 32h-128V64h128v32z m0 32h-192V96h192v32z m-192 64H256V160h64v32z m64-32H224V128h160v32zM288 128H192V96h96v32zM224 96H128V64h96v32zM192 64H64V32h128v32zM160 32H64V0h96v32zM0 128V32h32v96H0z m64-128v160H32V0h32z m32 128v64H64V128h32z m32 32v64H96V160h32z m32 32v64H128V192h32z m32 128V256h32v64H192z m0-96v160H160V224h32z m0 256v-64h32v64H192z m0-64v128H160v-128h32z m-96 32v32H64v-32h32z m0 32v-128h32v128H96z m64-160v256H128v-256h32z m-32 272V640H96v-48h32z m-32 32V512h32v112H96z m0-16v96H64v-96h32z m416-224v96h-32v-96h32z m-96 96v-96h32v96h-32z m64-128v160h-32v-160h32z m0 608v-64h32v64h-32z m32-64v-112h32V896h-32z m-64-128h128v32h-128v-32z m128 0h-128v-32h128v32z m-128 0v64h-32v-64h32z m-32 32v128h-32v-128h32z m-32 64v64h-32v-64h32z m32 96H288v-32h128v32zM0 864v-160h32v160H0z m32 32v-256h32v256H32z m0 0h64v32H32v-32z m32 32h96v32H64v-32z m32 32h256v32H96v-32z m192 64H160v-32h128v32z m128-64h544v32H416v-32z m544 32V320h32v672h-32z m64-608v608h-32V384h32z m0 640H416v-32h608v32z" fill="#0C0C0C" p-id="1164"></path><path d="M960 896v32h-32v-32h32z m-64 32V352h32v576h-32z m0-640v640h-32V288h32z m-96 544V256h32v576h-32z m64-576v672h-32V256h32z m-192 576v-32h32v32h-32z m32 0v-64h32v64h-32z m32 0v-96h32v96h-32z m32 0V256h32v576h-32z m64-576h-96V224h96v32z m-32-32h-96V192h96v32z m-64-32h-64V160h64v32z m-416 224H192v-32h128v32z m-96-64h160v32H224v-32z m160 0H224v-32h160v32z m-64-128V192h32v32h-32z m64 16V288h-32V240h32z m-32 32V160h32v112h-32zM416 160v192h-32V160h32z m0 160V160h32v160h-32z m64-192v160h-32V128h32z m0 128V128h32v128h-32z" fill="#2AD2F9" p-id="1165"></path><path d="M448 160h-64V128h64v32z m-256 224v32H160v-32h32z m0-32v-32h32v32H192z m32-32V288h32v32H224z m704 0v32h-32v-32h32z m-128 608h160v32h-160v-32z m160-512v480h-32V416h32z" fill="#24A6C0" p-id="1166"></path><path d="M704 160h-64V128h64v32zM352 192h-32V160h32v32z m-32 32H288V192h32v32zM256 288h32v32H256V288z m96 0h32v32h-32V288z m416-96h-32V160h32v32z" fill="#6EC3AE" p-id="1167"></path><path d="M352 864v-32h32v32h-32z m-256-128v32H64v-32h32z m-32 96h32v32H64v-32z m128 96h64v32H192v-32z m-64-96v-64h32v64H128z m32-96v-32h32v32H160z m480 96v-32h32v32h-32z m32-32v-32h32v32h-32z m-224-96h160v32h-160v-32z m320-32v64h-32v-64h32z m-64 96v-32h32v32h-32z m128 96v64h-32v-64h32z m-32 96h-288v-32h288v32zM416 320h32v32h-32v-32z m32-32h32v32h-32V288z m32-32h32v32h-32V256z m224-32h32v32h-32V224z m32 32h32v32h-32V256z" fill="#AECFD6" p-id="1168"></path><path d="M128 672v32H96v-32h32z m32-64v32H128v-32h32z m64-256v32H192v-32h32z m-32 192v32H160v-32h32z m32-64v32H192v-32h32z m0 0v-64h32v64H224zM576 96h-64V64h64v32z m128 128h-32V192h32v32z m-32-32h-32V160h32v32z m-32-32h-32V128h32v32z m-32-32h-32V96h32v32z m-160 224v32h-32v-32h32z m64 0v32h-32v-32h32z m-96 128h32v32h-32v-32z m64 0h32v32h-32v-32z m128 288v32h-32v-32h32z m-32 64v64h-32v-64h32z m-64 96v-32h32v32h-32z m-96 0v-64h32v64h-32z" fill="#767678" p-id="1169"></path><path d="M352 320H288V288h64v32zM256 256h96v32H256V256z m64 0H224V224h96v32zM288 224H192V192h96v32zM224 192H160V160h64v32zM192 160H128V128h64v32zM160 128H96V96h64v32z" fill="#F8CB3E" p-id="1170"></path><path d="M64 864h32v32H64v-32z m32 32h32v32H96v-32z m160 64v-32h32v32H256z m-96 0v-32h32v32H160zM224 160H192V128h32v32zM96 96H64V64h32v32z m320 736h32v32h-32v-32z m96 0v64h-32v-64h32z m-32 64v64h-32v-64h32z m-128 32h-32v-32h32v32z m-96-192H192v-32h64v32z m-96 0h96v32H160v-32z m64 64H160v-32h64v32z" fill="#807E81" p-id="1171"></path><path d="M256 192H224V160h32v32z m0 96H224V256h32v32zM224 256H192V224h32v32zM192 224H160V192h32v32zM160 192H128V160h32v32zM128 160H96V128h32v32z m0-64H96V64h32v32zM96 128H64V96h32v32z" fill="#917828" p-id="1172"></path><path d="M544 832v-32h32v32h-32z m32-64v-32h32v32h-32z m-160 32h-32v-32h32v32z m32-32h-32v-32h32v32zM64 736v-32h32v32H64z m32-64v-32h32v32H96z m32-64v-32h32v32H128z m224-352h-32V224h32v32zM192 128H160V96h32v32z" fill="#AEBCBD" p-id="1173"></path><path d="M320 416v-32h32v32h-32z m64-32v-32h32v32h-32z" fill="#D8D8D8" p-id="1174"></path><path d="M800 192h32v32h-32V192z m32 32h32v32h-32V224z m32 32h32v32h-32V256z m64 128h32v32h-32v-32z" fill="#1E768A" p-id="1175"></path><path d="M160 832v96H128v-96h32z m0 96v-128h32v128H160z m64-128v128H192v-128h32z m0 128v-160h32v160H224z m-160-96v-64h32v64H64z m32 64v-192h32v192H96z m32-128v-128h32v128H128z m32-64v-128h32v128H160z m32 0v-192h32v192H192z m32 0v-224h32v224H224z m64-288v512H256V416h32z m0 512V416h32v512H288z m64-96V384h32v448h-32z m0-416v480h-32V416h32z m96 544h-32v-32h32v32z m32-128v-32h32v32h-32z m0-32v96h-32v-96h32z m32-288v192h-32v-192h32z m-64 192v-192h32v192h-32z m0-192v224h-32v-224h32z m-64 256V384h32v384h-32z m64-416v-32h32v32h-32z m32 0V288h32v64h-32z m256 320V288h32v384h-32z m0-416v480h-32V256h32z m-64 512V224h32v544h-32z m0-576v608h-32V192h32z m160 672h-192v-32h192v32z m-32 32h-160v-32h160v32z m0 32h-160v-32h160v32z m-224 0h-32v-32h32v32z m32-128v128h-32v-128h32z m0 128V160h32v768h-32z m0-800v576h-32V128h32z m-64 576V96h32v608h-32z m0-608v608h-32V96h32z" fill="#FDFBFE" p-id="1176"></path></svg>
                </div>
                <span className='title' onClick={() => {
                    isPhone && setShowPhoneMenu(!showPhoneMenu)
                }}>胡さん测试项目</span>
                &nbsp;&nbsp;
                {
                    <div className='menu_phone' onClick={() => {
                        isPhone && setShowPhoneMenu(!showPhoneMenu)
                    }}>
                        <BarsOutlined />
                    </div>

                }
                &nbsp;&nbsp;
                {
                    <div className='menu_phone' onClick={() => {
                        localStorage.removeItem('activeKey')
                        localStorage.removeItem('tabs')
                        window.location.reload()
                    }}>
                        <HomeOutlined />
                    </div>
                }
                {/* {showPhoneMenu && isPhone && leftClone()} */}
                {leftClone()}

            </div>
            <div className='back' ref={backRef}>
                <pre style={{
                    fontSize: '0.2vw',
                    textAlign: 'center',
                    paddingRight: '12px'
                }}>
                    {`服务器带宽\n 1Mbps/s`}
                </pre>
                <Popover
                    getPopupContainer={() => backRef.current}
                    placement="bottomLeft"
                    trigger="click"
                    content={content}
                >
                    <Button size='small'>
                        换肤
                    </Button>
                </Popover>

            </div>
        </div>
    )
}
export default Head