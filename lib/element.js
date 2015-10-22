'use strict'

import {h} from "virtual-dom"

function element(selector,props,...rest){
	if(typeof selector == 'string'){
		return h(selector,props,rest)
	}else{
		return h(selector,props,rest)
	}

}

export default element