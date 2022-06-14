import React, { useState } from "react";
import Comments from "./Comments";

function Buttons( {video} ) {
 
    const [like, setLike] = useState(video.upvotes)
    const [dislike, setDislike] = useState(video.downvotes)
    const [hideComments, setHideComments] = useState(false)

    function handleLike() {
        setLike(like => like + 1)
    }
    function handleDislike() {
        setDislike(dislike => dislike + 1)
    }  
    function handleHideComments() {
        setHideComments(hideComments => !hideComments)
      }

    return (
        <React.Fragment>
            <div>
                <button onClick={handleLike} name="up">
                    {like}👍
                </button>
                <button onClick={handleDislike} name="down">
                    {dislike}👎
                </button>
            </div>
            <div>
        <button onClick={handleHideComments} id="hideComments">{hideComments ? "Hide" : "Show"} Comments</button>
        {hideComments ? <Comments video={video} /> : null}
            </div>
        </React.Fragment>
    )
}

export default Buttons;