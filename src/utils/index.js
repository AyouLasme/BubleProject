import validators from "./validators";


export function graphChecker(data){
    let graph = data

    if(typeof(data) == "string"){
        try {
            graph = JSON.parse(data);
          } catch (jsonError) {
            console.error('Error parsing JSON:', jsonError);
            return {
                result : false,
                errorMessage : "Mauvais format de fichier."
            }
          }
    }

    for(let validator of validators){
        const validatorResult = validator(graph)
        if(typeof(validatorResult) == "string"){
            return {
                result : false,
                graph : null,
                errorMessage : validatorResult
            }
        } 

    }

    return {
        result : true,
        graph : graph,
        errorMessage : ""
    } 
}


