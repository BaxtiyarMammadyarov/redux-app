export const listReducers = (state=[],action)=>{
    if(action.type === "add"){
        return [...state,action.payload]
    }
    else if(action.type === "remove"){
        return [...state.filter(item => item.id  !== action.payload.id)] 

    }
    else {

        return state
    }

}