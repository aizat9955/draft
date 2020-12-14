import {rerender} from '../render.js';

import Avatar from './MyContentDownload/Avatar.jpg';
import Girl from './MyContentDownload/Girl.jpg';

import Ny from './Global/Photo/Ny.jpg';
import Ggg from './Global/Photo/Ggg.jpg';
import Tesla from './Global/Photo/Tesla.jpg'
import Winter from './Global/Photo/Winter.jpg'

import Roses from './Global/Audio/Roses.mp3'
import Youth from './Global/Audio/Youth.mp3'

let Data = {
	sidebarData: [
		<div><a href="/MyAccaunt">My accaunt</a></div>,
		<div><a href="/MyFriends">My friends</a></div>,
		<div><a href="/MyMessages">My messages</a></div>,
		<div><br/><hr className="sidebarHr"/><br/></div>,
		<div><a href="/GlobalMedia">Global media</a></div>,
		<div className="sidebarSettings"><a href="/Settings">Settings</a></div>
	],
	myAccauntData: {
		myAccauntDataImg: <img src={Avatar} className="contentMyAccauntAvatar"/>,
		myAccauntDataImgChanged: null,
		myName: <h3>My name</h3>,
		dateOfBirthdayConst: <div>Date of birthday</div>,
		dateOfBirthday: <div>Date of birthday</div>,
		cityConst: <div>City</div>,
		city: <div>City</div>
	},
	myFriendsData: {
		myFriendsDatas: [<table border="1"><tr><td rowspan="2">
						<img src={Girl} className="contentMyFriendImg"/></td>
						<td className="contentMyFriendText"><span>Name</span></td></tr>
						<tr><td className="contentMyFriendText">
						<button onClick={function(){window.location="/MyMessages"}}>Write message</button>
						</td></tr></table>]
	},
	myMessagesData: {
		interlocutorInfo: [<div><div><img src={Girl} className="contentMyMessageImg"/></div><div>Name</div></div>],
		conversationInfo: [<div><div><img src={Girl} className="contentMyMessageSendImg"/><span>Name</span></div><div>Message</div></div>,
		<div><div><img src={Avatar} className="contentMyMessageSendImg"/><span>Name</span></div><div>Message</div></div>]
	},
	correctMessages: {
		correctMessagesSend: function(){alert("1")}
	},
	maediaData: {
		mediaPhoto: [<img src={Ny} className="globalImg"/>,
					<img src={Ggg} className="globalImg"/>,
					<img src={Tesla} className="globalImg"/>,
					<img src={Winter} className="globalImg"/>],
		mediaAudio: [<div><div>SAINt JHN & Imanbek - Roses (Remix)</div><audio controls className="globalAudio" value="1">
						<source src={Roses} type="audio/mpeg"/></audio></div>,
					<div><div>DaBro - Юность</div><audio controls className="globalAudio">
						<source src={Youth} type="audio/mpeg"/></audio></div>]
	}
}

export let correctAccauntAvatar = function(){let a = prompt("Change image")};
export let correctAccauntInfo = function(){let changedDateOfBirthday = prompt("New info about of date of birthday");
	let changedCity = prompt("New info about of city");
	Data.myAccauntData.dateOfBirthday = <div>{changedDateOfBirthday}</div>;
	Data.myAccauntData.city = <div>{changedCity}</div>;
	rerender(Data)
};
export let correctMessagesSend = function(props){
	let addMessage = <div><div><img src={Avatar} className="contentMyMessageSendImg"/><span>Name</span></div><div>{props}</div></div>
	Data.myMessagesData.conversationInfo.push(addMessage);
	rerender(Data)
};

export default Data;