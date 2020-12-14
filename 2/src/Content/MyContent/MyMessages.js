import React from 'react';

let MyMessages = function(props){
	let interlocutorsInfo = props.data.myMessagesData.interlocutorInfo.map(function(props){return <div>{props}</div>});
	let conversationInfos = props.data.myMessagesData.conversationInfo.map(function(props){return <div>{props}</div>});
	
	let wroteMessage = React.createRef();
	let sendMessage = function(){
		let text = wroteMessage.current.value;
		props.correctMessagesSend(text)
	};
	
	return(
		<div>
			<div>
				<table border="1">
					<tr>
						<td>
							<table className="contentMyMessageUsers">
								<tr>
									<td className="contentMyMessageUser">
										{interlocutorsInfo}
									</td>
								</tr>
							</table>
						</td>
						<td className="contentMessageTexts">
							<table className="contentMessageText">
								<tr>
									<td>
										{conversationInfos}
									</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
				<div><input type="text" className="contentMessageSend" ref={wroteMessage}/></div>
				<button onClick={sendMessage}>Send</button>
			</div>	
		</div>
		)
}

export default MyMessages;