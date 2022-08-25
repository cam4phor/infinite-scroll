import React from "react";

const Post = ({image, by}) => {
	return(
		<div className="post">
			<div className="post__image-div">
				<img className="post__image" 
					src={image}></img>
			</div>
			<div className="post__by-div">
				{by}
			</div>
		</div>
	)
}

export default Post