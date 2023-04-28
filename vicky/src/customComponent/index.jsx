import React, { useState, useEffect, useLayoutEffect, useRef, useMemo } from 'react';
import { useFederatedComponent } from './useFederate'
import './index.less'
import _ from 'lodash'
import { getStuffComponetn } from './match.js'
import { Spin } from 'antd'
const Custom = (props) => {
    const { isPhone } = props
    const [{ url, scope, module, treeType, type }, setNode] = useState({})
    const [isVue, setIsVue] = useState(false)
    const ref = useRef({})
    const Com = getStuffComponetn()
    useEffect(() => {
        const currentCom = Com.find(d => d.treeType === props.treeType)
        if (!currentCom) {
            setNode({})
        } else {
            setNode(currentCom)
            setIsVue(currentCom.type === 'vue' ? true : false)
        }
    }, [props.id])
    const { Component: Cc, errorLoading } = useFederatedComponent(url, scope, module, type)
    if (type === 'vue' && Cc) {
        ref.current && Cc.mount(ref.current[props.id], { props })
    }
    return (
        <div className='tb' style={{ height: isPhone ? 'calc(100vh - 45px)' : 'calc(100vh - 75px)' }} ref={f => ref.current[props.id] = f}>
            <React.Suspense fallback={<div className='spin'><Spin size='large' /></div>}>
                {errorLoading
                    ? <pre style={{ padding: '12px' }}>
                        {
                            `Error loading module "${module}" \n
                            May be you add a mistake treetype node`
                        }
                    </pre>
                    : Cc && !isVue && <Cc {...props} />
                }
            </React.Suspense>
        </div >
    )
}
export default Custom
