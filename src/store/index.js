import localForage from "localforage";


export async function saveGraph(name,graph){
    await localForage.setItem(name,graph)
}

export async function getKeys(){
    return await localForage.keys()
}

export async function getAllGraph(){
    return await localForage
}

export async function getOneGraph(name){
    return await localForage.getItem(name)
}

export async function getLastGraph(){
    const keys = await getKeys()
    if(keys.length > 0)
        return await localForage.getItem(keys[0])
}

