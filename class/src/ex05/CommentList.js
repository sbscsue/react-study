import React from "react";
import { createPortal } from "react-dom";
import Comment from "./Comment"

const comments =[
    {
        name: "홍길동",
        comment: "안녕하세요,리엑트 배워요.",
    },
    {
        name: "징빌징",
        comment: "안녕하세요,리엑트 배워요2.",
    },
    {
        name: "백설공주",
        comment: "안녕하세요,리엑트 배워요3124124.",
    }
]
function CommentList(props){
    return(
        <div>
            {comments.map((comment)=>{
                return(
                    <Comment name={comment.name} comment={comment.comment} />
                )
            })}
            
        </div>
    )
}

export default CommentList;