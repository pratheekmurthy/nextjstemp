const initialState = false

export const logReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'TOGGLE_STATE':{
            return !state;
        }
        default :{
            return state
        }
    }

}

const cinitialState = []

export const countriesReducer=(state=cinitialState,action)=>{
    switch(action.type){
        case 'ADD_CUST' : {
            return [...state,action.payload]
        }
        default :{
            return state
        }
    }

}