import React, { useState } from "react";
import Post from "./post";

const Constants = {
	pageSize: 5
}

const obj = {
	image: "https://pbs.twimg.com/profile_images/1455185376876826625/s1AjSxph_400x400.jpg", 
	by: "me"
}

const Container = () => {
	const [pageNumber, setPageNumber] = useState(0)
	const [postsArray, setPostsArray] = useState([])

	const loadNext = () => {
		setPostsArray(pA => {
			let cPA = []
			if(pageNumber > 1){
				cPA = pA.slice(-Constants.pageSize*2)
			}else{
				cPA = pA.slice()
			}
			for (let i = 0; i < Constants.pageSize; i++){
				const objCopy = {...obj, index: pageNumber*Constants.pageSize + i}
				objCopy.by = objCopy.index
				cPA.push(objCopy)
			}
			return cPA
		})
		setPageNumber(p => p+1)
	}

	const loadPrev = () => {
		// setPostsArray(pA => {
		// 	let cPA = []
		// })
	}

	return (
		<div className="container">
		<button onClick={loadPrev}>Load Prev</button>
			{
				postsArray.map((post) => {
					return (
						<Post 
							image={post.image} 
							by={post.by} 
							key={post.index}
						/>
					)
				})
			}
			<button onClick={loadNext}>Load Next</button>
		</div>
	)
}

export default Container