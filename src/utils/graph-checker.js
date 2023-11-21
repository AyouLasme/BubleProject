import validators from "./helpers";


export function graphChecker(graph){
    for(let validator of validators){
        const validatorResult = validator(graph)
        if(typeof(validatorResult) == "string"){
            return {
                result : false,
                errorMessage : validatorResult
            }
        }

    }

    return {
        result : true,
        errorMessage : ""
    }
}


