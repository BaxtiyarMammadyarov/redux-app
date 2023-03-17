export const addList = (payload)=>{
    return {type : "add",payload}
}
export const deleteList = (payload)=>{
    return {type : "remove",payload}
}