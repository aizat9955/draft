import React from 'react';
import Logo from './logo.svg'

let Header = function(){
	return(
		<div>
			<table>
				<tr>
					<td className="headerLogoTd"><img src={Logo} className="headerLogoImg"/></td>
					<td className="headerSearch"><span>Search</span></td>
					<td><span>Name of User</span></td>
				</tr>
			</table>

			
			
			
		</div>
		)
}

export default Header;