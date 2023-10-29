import React from "react"
import css from "./css/PostItem.module.css";

function PostItemAPI(props) {
    return (
        props.savedPosts.map(post => {
            // Extra task destructuring 
            const {id, user, type, tags, webformatURL} = post
            return <div className={css.SearchItem} key={id}>
                <p>Artwork type: {type}</p>
                <p>Artist: {user}</p>
                <img src={webformatURL} alt="random"/>
                <p>Tags {tags}</p>
            </div>
            }
        )
    )
}

export default PostItemAPI