'use strict'

import Cashew from "../lib/cashew.js"

let Sub = Cashew.createClass({
	render(){
		return <h1>世界</h1>
	}
})

let App = Cashew.createClass({
	render(){
		return 	(
			<div>
				<div className="hello" style={{
					width: '100px',
					height: '100px',
					backgroundColor: "red"
				}} onClick={()=>{conosle.log(123)}}></div>
				<h1>你好</h1>
				<input type='text' />
		   	</div>
		   )
	}
})

console.log(App.constructor)

Cashew.render(App,document.getElementById('app'))