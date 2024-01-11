import { useState } from "react";
import AddComment from "../AddComment/AddComment";
import Comment from "../Comment/Comment";

export default function CommentList(){
    const [comments, setComments] = useState([
    ]);

    const handleAdd =(comment)=>setComments([...comments,comment]);
    const handleDelete =(comment)=>setComments(comments.filter(item=> item.id !== comment.id));       
    
    return(
        <div className="container">
            <AddComment onAdd={handleAdd}/>
            <div className="division-line"></div>
            <ul className="comment-list">
                {
                    comments.map((comment)=>
                    <Comment 
                    key={comment.id} 
                    comment={comment} 
                    onDelete={handleDelete}
                    />
                    )
                }
            </ul>
        </div>
    )
}