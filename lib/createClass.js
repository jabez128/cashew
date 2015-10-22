'use strict'

import ComponentFactory from "./ComponentFactory.js"

function createClass(obj){
	return new ComponentFactory(obj)
}

export default createClass