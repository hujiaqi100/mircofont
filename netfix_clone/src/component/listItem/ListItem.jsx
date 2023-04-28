import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './ListItem.less'
import { Modal } from 'antd'
import { PlayArrow, Add, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@mui/icons-material'
const mp4addr = 'https://sample-videos.com/video123/mp4/480/big_buck_bunny_480p_10mb.mp4'
const ListItem = ({ index, info }) => {
    const [isMoved, setIsMoved] = useState(false)
    return (
        <div className="listItem"
            onMouseLeave={() => setIsMoved(false)}
            onMouseEnter={() => setIsMoved(true)}
            onClick={() => create()}
            key={index}
        >
            <img src={info.addrImg} alt="" />
            {
                isMoved &&
                <>
                    <video src={info.addrMp4} autoPlay={true} loop />
                    <div className="itemInfo">
                        <div className="icons">
                            <PlayArrow />&nbsp;
                            <Add />&nbsp;
                            <ThumbUpAltOutlined />&nbsp;
                            <ThumbDownAltOutlined />
                        </div>
                        <div className="info">
                            <span>{info.forb}</span>&nbsp; &nbsp;
                            <span>{info.yr}</span>
                        </div>
                        <div className="desc">
                            {info.desc}

                        </div>
                    </div>
                </>
            }
        </div>
    )
}
const Vido = (props) => {
    return <Modal
        open={true}
        onCancel={props.close}
        title="Title"
    >
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
export default ListItem