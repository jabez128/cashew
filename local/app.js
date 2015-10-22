'use strict'

import Cashew from "../lib/cashew.js"

let Sub2 = Cashew.createClass({
	render(){
		return <h1>世界2</h1>
	}
})

let Sub = Cashew.createClass({
	render(){
		return (
			<div>
				<h1>世界</h1>
				<Sub2 />
			</div>
		)
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
				<Sub />
		   	</div>
		   )
	}
})

Cashew.render(App,document.getElementById('app'))