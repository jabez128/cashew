'use strict'

class ComponentFactory{
	constructor(obj){
		this.obj = obj
		this._$type = "cashewComponent"
		this.constructor = ComponentFactory
	}
}

export default ComponentFactory