import React, { useState } from 'react';
import './chatStyle.scss';
import Avatar from '../../../assets/imgs/avatar.png';
import MyAvatar from '../../../assets/imgs/profile.png';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const EducationChatComponent = () => {

    const [chats, setChats] = useState([
        {isFrom: false , name:'Liam' , msg:'hi' },
        {isFrom: false , name:'Noah' , msg:'what is next ?' },
        {isFrom: false , name:'Elijah' , msg:'can i Ask a question ? ' },
        {isFrom: false , name:'Elijah' , msg:"i can't deploy my nft :(" },
    ]);

    const [msg, setMsg] = useState('')

    const pushMassage = () => {
        let list = [...chats];
        list.push({
            isFrom:true,
            msg,
            name:'Durban Area'
        });
        setMsg('')
        setChats(list);
    }

    return (
        <>
            <div className="main-chat-controller">
                <div className="header">
                    <span className='f-20 fw-b'>Live Chat</span>
                </div>
                <div className="list">
                    {chats.map((item => 
                        <div className={`item ${item.isFrom ? 'left' :'right'}`}>
                            <div className="child start">
                                <img src={item.isFrom ? MyAvatar : Avatar} />
                            </div>
                            <div className="child">
                                <div className="msg">
                                    <p>{item.msg}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="msg-box">
                    <div className="input-controller">
                        <InputText placeholder='say someting' value={msg} onChange={(e) => setMsg(e.target.value)} />
                    </div>
                    <Button className='send-msg-btn cp' label='Send' onClick={pushMassage} />
                </div>
            </div>
        </>
    )
};


export default React.memo(EducationChatComponent);