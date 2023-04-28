import React, { useEffect, useState } from 'react';
import { Mm } from './move.js'
import _, { set } from 'lodash'
import './move.less'
const App = (props) => {
    const sRef = React.useRef()
    const lists = [
        {
            key: 'a',
            cc: 'aa'
        },
        {
            key: 'b',
            cc: 'bb'
        },
        {
            key: 'c',
            cc: 'cc'
        },
        {
            key: 'd',
            cc: 'dd'
        },
        {
            key: 'e',
            cc: 'ee'
        },
        {
            key: 'f',
            cc: 'ff'
        },
        {
            key: 'g',
            cc: 'gg'
        },
    ]
    const [list, setList] = useState(lists)
    useEffect(() => {
        new Mm({
            dom: sRef.current,
            setList,
            list
        })
    }, [list])
    return (
        <div className='tbs'>
            <div className='xx' ref={sRef}>
                {
                    list.map(val => {
                        return <div key={val.key} className={val.cc}></div>
                    })
                }
            </div>
        </div>
    )
}
export default App