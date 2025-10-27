import { useState } from "react"
import "./Comment.css";
import CommentsForm from "./CommentsForm";

export default function Comment (){

    let [comments,setComments] = useState([{
        username : "@sk",
        remark : "great place",
        rating : 4
    }]);

    let addNewComment = (comment) =>{
        setComments ((currComments) => [ ...currComments, comment]) // here setComment is invoked and re rendering new comment
    }


    return (
        <>
        <div>
            <h3>All Comments</h3>
            {comments.map((comment,idx) => (
                <div className="comment" key={idx}>  
                {/* always we have to use uuid rather than passing idx as key  */}
                  <span>{comment.remark}</span>
                  &nbsp;
                  <span>(rating = {comment.rating})</span>
                  <p>- {comment.username}</p>
                </div>
            ))}
          
        </div>
        <hr></hr>
        <CommentsForm addNewComment= {addNewComment}/>
        </>
    );
}