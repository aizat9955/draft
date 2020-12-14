import React from 'react';

let MyFriens = function(props){
	let nameOfFriends = props.data.myFriendsData.myFriendsDatas.map(function(props){return <span>{props}</span>});

	return(
		<div>
			{nameOfFriends}
		</div>
		)
}

export default MyFriens;