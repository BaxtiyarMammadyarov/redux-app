export const deleteListReducers = (state=[],action)=>{

    if(action.type === "add"){
        return [...state,action.payload]
    }
    else{
        return state
    }


}