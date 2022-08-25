import React, { useState } from "react";
import Post from "./post";

const obj = {
	image: "https://pbs.twimg.com/profile_images/1455185376876826625/s1AjSxph_400x400.jpg", 
	by: "me"
}

const Container = () => {
	const [postsArray, setPostsArray] = useState([
		{image: "https://pbs.twimg.com/profile_images/1455185376876826625/s1AjSxph_400x400.jpg", by: "me"}, 
		{image: "https://pbs.twimg.com/profile_images/1455185376876826625/s1AjSxph_400x400.jpg", by: "me"}
	])

	const loadMore = () => {
		setPostsArray(pA => {
			const cPA = pA.slice()
			for (let i = 0; i < 5; i++){
				cPA.push(obj)
			}
			return cPA
		})
	}

	return (
		<div className="container">
			{
				postsArray.map((post, index) => {
					return (
						<Post image={post.image} by={post.by} key={index}/>
					)
				})
			}
			<button onClick={loadMore}>Load More</button>
		</div>
	)
}

export default Container