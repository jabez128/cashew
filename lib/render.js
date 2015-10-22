import {create} from "virtual-dom"

/**
 *@param vd 
 *@param rd
 @return undefined
*/
function render(tree,rd){
	var rootNode = create(tree.obj.render())
	rd.appendChild(rootNode)
}

export default render