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