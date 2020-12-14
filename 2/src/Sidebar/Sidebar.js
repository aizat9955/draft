import React from 'react';

let Sidebar = function(props){
	let sidebarDatas = props.data.sidebarData.map(function(props){return <div>{props}</div>});

	return(
		<div>
			{sidebarDatas}
		</div>
		)
}

export default Sidebar;