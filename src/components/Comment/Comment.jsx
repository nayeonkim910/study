

export default function Comment({comment,onDelete}){
    const handleDelete =()=> onDelete(comment);

    return(
        <li className="comment-item-wrapper">
            <div>admin</div>
            <div className="comment-item">
                {comment.text}
            </div>
            <div>{comment.date}</div>
            <button onClick={handleDelete}>삭제</button>
        </li>
    )
}