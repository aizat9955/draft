import React from 'react';

let Settings = function(props){
	return(
		<div><button onClick={function(){
			document.body.style.backgroundColor="green"}}>Change background</button>
		</div>)
	}

export default Settings;