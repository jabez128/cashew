'use strict'

import {h} from "virtual-dom"

function element(selector,props,...rest){
	if(typeof selector == 'string'){
		return h(selector,props,rest)
	}else if(selector._$type == "cashewComponent"){
		return selector.obj.render()
	}
}

export default element