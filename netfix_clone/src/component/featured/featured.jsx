import React from 'react'
import { PlayArrow, InfoOutlined } from '@mui/icons-material'
import './featured.less'
import ReactDOM from 'react-dom'
import { Modal } from 'antd'
const mp4addr = 'https://sample-videos.com/video123/mp4/480/big_buck_bunny_480p_10mb.mp4'

const Featured = ({ type }) => {
    return (
        <div className='featured'>
            <img
                width="100%"
                src="https://assets.nflxext.com/ffe/siteui/vlv3/f1c3c4eb-2fea-42c7-9ebd-1c093bd8a69d/2ca6fba7-5902-4b3b-8f40-bc4e500e84a5/US-en-20230403-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />

            <div className="info">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7-m5TA01jBmzy7VXHTWTXV0X4ZM3WAcbtiw&usqp=CAU" alt="" />
                <span className='desc'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium pariatur aliquid quam in
                </span>
                <div className="buttons">
                    <button className='play' onClick={() => create()}>
                        <PlayArrow />
                        <span>play</span>
                    </button>
                    <button className='more'>
                        <InfoOutlined />
                        <span>info</span>
                    </button>
                </div>
            </div>
        </div >
    )
}
const Vido = (props) => {
    return <Modal open={true} onCancel={props.close}>
        <video width={"100%"} height={'100%'} src={mp4addr} autoPlay={true} controls />
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

    ReactDOM.render(<Vido {...options} close={close} />, div);
};
export default Featured