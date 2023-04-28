import Featured from './component/featured/featured.jsx'
import Navbar from './component/navbar/navbar.jsx'
import List from './component/list/List.jsx'
import React from 'react'

import './home.less'
const Home = () => {
    return (
        <div className='home'>
            <Navbar />
            <Featured type={'movie'} />
            <List keys={'0'} />
            <List keys={'1'} />
            <List keys={'2'} />
            <List keys={'3'} />
            <List keys={'4'} />
            <List keys={'5'} />

        </div>
    )
}

export default Home

