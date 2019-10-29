import React from 'react';


function LeffaLista(props){
	
	return(
		<tr>
		<td>{ props.leffalista.nimi}</td>
		<td>{ props.leffalista.ohjaaja}</td>
		<td>{ props.leffalista.vuosi}</td>
		<td>{ props.leffalista.arvosana}</td>
		</tr>

		);
}

export default LeffaLista;