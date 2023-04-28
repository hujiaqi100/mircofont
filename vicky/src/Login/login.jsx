import React, { useEffect } from 'react'
import instance from 'axios'
import { Button } from 'antd'
import ssrData from '../ssrRenderData/login.ssr'
import { getMarkUrl } from '../../util/findNeedUrl'
const Login = (props) => {
    useEffect(() => {
        instance.get(getMarkUrl('login_title', ssrData)).then(data => {
            console.log(data);
        })
    }, [])
    return (
        <div>
            <div>{props['state'][0]['data']['msg']}</div>
            <Button size='small' onClick={() => {
                history.pushState(null, null, '/dqp')
                window.location.reload()
            }}>登录</Button>
        </div>
    )
}
Login.loadData = () => {
    return ssrData
}
export default Login