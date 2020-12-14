import React from 'react';

let MyAccaunt = function(props){
	let correctAccauntAvatar = props.correctAccauntAvatar;

	let correctAccauntInfo = props.correctAccauntInfo;

	return(
		<div>
			<table border="1">
				<tr>
					<td>
						<table>
							<tr>
								<td>
									{props.data.myAccauntData.myAccauntDataImg}
								</td>
							</tr>	
							<tr>
								<td>
									<button onClick={correctAccauntAvatar}>Correct image</button>
								</td>
							</tr>	
						</table>	
					</td>

					<td className="contentMyAccauntAboutMe">
						<table className="contentMyAccauntAboutMeText">
							<tr>
								<td>
									{props.data.myAccauntData.myName}
									<hr/>
									<table>
										<tr>
											<td className="contentMyAccauntInfo">
												{props.data.myAccauntData.dateOfBirthdayConst}
											</td>
											<td className="contentMyAccauntDetailInfo">
												{props.data.myAccauntData.dateOfBirthday}
											</td>
										</tr>
										<tr>
											<td>
												{props.data.myAccauntData.cityConst}
											</td>
											<td>
												{props.data.myAccauntData.city}
											</td>
										</tr>
										<tr>
											<td colspan="2" className="contentMyAccauntButtonForChange">
												<button onClick={correctAccauntInfo}>Correct info</button>
											</td>
										</tr>
									</table>
								</td>
							</tr>	
						</table>	
					</td>
				</tr>
			</table>
		</div>
		)
}

export default MyAccaunt;