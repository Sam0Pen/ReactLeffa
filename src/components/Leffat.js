import React, {useState} from 'react';

function Leffat(){
	const [leffa, setValues] = useState({
		nimi: '',
		ohjaaja: '',
		vuosi: '',
		arvosana: ''
	});
	const muuta = (e) => {
		setValues({
			...leffa, [e.target.name]: e.target.value
		});
	}
	const lisaa = (e) => {
		e.preventDefault();
		setValues({
			nimi: '',
			ohjaaja: '',
			vuosi: '',
			arvosana: ''
		});
	}

	return(
		<form>
		<label htmlFor="nimi">Nimi</label>
		<input type="text" name="nimi" value={ leffa.nimi} onChange={ (e) => muuta(e)} /><br />

		<label htmlFor="ohjaaja">Ohjaaja</label>
		<input type="text" name="ohjaaja" value={ leffa.ohjaaja} onChange={ (e) => muuta(e)} /><br />

		<label htmlFor="vuosi">Vuosi</label>
		<input type="text" name="vuosi" value={ leffa.vuosi} onChange={ (e) => muuta(e)} /><br />
		
		<label htmlFor="arvosana">Arvosana</label>
		<select name="arvosana" value={ leffa.arvosana} onChange={ (e) => muuta(e)} >
		<option value= "1" >1</option>
		<option value= "2" >2</option>
		<option value= "3" >3</option>
		<option value= "4" >4</option>
		<option value= "5" >5</option>
		<option value= "6" >6</option>
		<option value= "7" >7</option>
		<option value= "8" >8</option>
		<option value= "9" >9</option>
		<option value= "10" >10</option>
		</select> <br />

		<input type="submit" value="Lisää"  onClick={ (e) => lisaa(e)} />
		</form>
		);
}

export default Leffat;