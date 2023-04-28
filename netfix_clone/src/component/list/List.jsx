import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import './list.less';
import { ArrowBackIosNewOutlined, ArrowForwardIosOutlined } from '@mui/icons-material'
import ListItem from '../listItem/ListItem'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])
// require('swiper/swiper.less')
import { srcArr } from './srcList'
const List = ({ keys }) => {
    const [arr, setArr] = useState(srcArr || [])
    const [isPhone, setIsPhone] = useState(window.matchMedia("(max-width:900px)").matches ? true : false)
    useEffect(() => {
        const getSize = () => {
            const _matchSize = window.matchMedia("(max-width:900px)").matches
            setIsPhone(_matchSize ? true : false)
        }
        window.addEventListener('resize', (e) => getSize(e), false)

        document.querySelectorAll('.swiper-button-prev').forEach((val, idx) => {
            ReactDOM.render(<div className='arrow'><ArrowBackIosNewOutlined /></div>, val)
        })
        document.querySelectorAll('.swiper-button-next').forEach((val, idx) => {
            ReactDOM.render(<div className='arrow'><ArrowForwardIosOutlined /></div>, val)
        })
        return window.removeEventListener('resize', (e) => getSize(e), false)
    }, [])
    return (
        <div className='list'>
            <span className="listTitle">Continue to Watch</span>
            <div className="wrapper">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={isPhone ? 2 : 5}
                    navigation
                    loop={true}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log('slide change')}
                >
                    {
                        arr.map((val, idx) => {
                            return <SwiperSlide className="swiper-slide" keys={idx}>
                                <ListItem src={val.addrImg} index={idx} info={val} />
                            </SwiperSlide>
                        })
                    }
                </Swiper>
            </div>
        </div >
    )
}

export default List