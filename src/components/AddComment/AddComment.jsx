import { useState } from "react";
import {v4 as uuid} from 'uuid';

export default function AddComment({onAdd}){
    const [text, setText]= useState('');
    const handleChange = (e) => setText(e.target.value);
    const now = new Date();
    const month = '00'+now.getMonth()+1;
    const today = `${now.getFullYear()}.${month.slice(-2)}.${now.getDate()}`
    const handleSubmit = (e) => {
        e.preventDefault();
        if(text.trim().length===0) {
            return;
        }
        onAdd({id:uuid(), text, date:today});
        setText(''); //한번 초기화 해주기
        }
    return(
        <form 
        onSubmit={handleSubmit}
        className="comment-add-form"
        >
            <input type="text"
             placeholder="댓글을 입력하세요."
             value={text}
             onChange={handleChange}
             className="comment-box"
             />
             <button>입력하기</button>
        </form>
    )
}