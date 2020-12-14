import React from 'react';
import Ny from './Photo/Ny.jpg';
import Ggg from './Photo/Ggg.jpg';
import Tesla from './Photo/Tesla.jpg'
import Winter from './Photo/Winter.jpg'

import Roses from './Audio/Roses.mp3'
import Youth from './Audio/Youth.mp3'

let GlobalMedia = function(props){
	let mediaPhotos = props.data.maediaData.mediaPhoto.map(function(props){return <span>{props}</span>});
	let mediaAudios = props.data.maediaData.mediaAudio.map(function(props){return <span>{props}</span>});

	return(
		<div>
			<table className="globalMedia">
				<tr>
					<td>
						{mediaPhotos}
					</td>
				</tr>
				<tr>
					<td>
						{mediaAudios}
					</td>
				</tr>
			</table>	
		</div>
		)
}

export default GlobalMedia;