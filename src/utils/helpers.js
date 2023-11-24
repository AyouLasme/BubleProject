const validators = [


    function attributCheckers(graph){
        const keys = ["nodes", "edges"]
        const yourGraphKeys = Object.getOwnPropertyNames(graph)
        if(!graph)
            return "Contenu du fichier vide."
        for(let key of keys){
            if(!yourGraphKeys.includes(key))
            {
                return `L'attribut ${key} est introuvable dans votre fichier`
            }
        }
        return true
    },

    function dataFormatChecker(graph){
        if(graph["edges"] && !Array.isArray(graph["edges"]) ){
            return `L'attriut edges doit être un tableau`
        }
        if(graph["nodes"] && !Array.isArray(graph["nodes"])){
            return `L'attriut nodes doit être un tableau`
        }
        
        return true
    },

    function uniqueNodeIdChecker(graph){
        
        const nodeIds = getNodeIds(graph)

        const result = verifyItemDuplicationInArray(nodeIds)
        console.log("result", result)
        if(typeof(result) == "string")
            return `L'id ${result} a été dupliqué au niveau des noeuds`
        return true
    },

    function uniqueEdgeIdChecker(graph){
        const edgeIds = getEdgeIds(graph)

        const result = verifyItemDuplicationInArray(edgeIds)
        if(typeof(result) == "string")
            return `L'id ${result} a été dupliqué au niveau des relations`
        return true
    },

    function nodeSourceAndDestinatonChecker(graph){
        const nodeIds = getNodeIds(graph)

        for(let i=0; i<graph.edges.length;++i){
            const edge = graph.edges[i]
            if(!nodeIds.includes(edge.source))
                return `Noeud source ${edge.source} introuvable`
            if(!nodeIds.includes(edge.target))
                return `Noeud destination ${edge.target} introuvable`
            if(edge.source == edge.target)
                return `Le noeud ${edge.target} ne peut être en même temps source et destination`
        }

        return true
        
    },


]


//This function check if item is unique in array and return true if is good
//Else return duplicate item

function verifyItemDuplicationInArray(items){
    let itemsAlreadyRead = []

    for(let i=0; i<items.length ; ++i){
        if(itemsAlreadyRead.includes(items[i])){
            return items[i]
        }
        itemsAlreadyRead.push(items[i])
    }

    return true

}


function getEdgeIds(graph){
    const edgeIds = []
    graph.edges.forEach(element => {
        edgeIds.push(element.id)
    });

    return edgeIds
}


function getNodeIds(graph){
    const nodeIds = []
    graph.nodes.forEach(element => {
        nodeIds.push(element.id)
    });

    return nodeIds
}

export default validators