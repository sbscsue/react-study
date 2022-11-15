import {handleActions,createAction} from 'redux-actions'

import {OBJECTIVE,MULTIPLE,TRUEFALSE,STAR ,DATA_OBEJCTIVE,DATA_MULTIPLE} from './format';


//TYPE 

export const CREATE_OBJECTIVE = "CREATE_OBJECTIVE";
export const CREATE_MULTIPLE = "CREATE_MULTIPLE";
export const CREATE_TRUEFALSE = "CREATE_TRUEFALSE";
export const CREATE_STAR = "CREATE_STAR";
createAction(CREATE_OBJECTIVE);
createAction(CREATE_MULTIPLE);
createAction(CREATE_TRUEFALSE);
createAction(CREATE_STAR);


export const UPDATE_TITLE = "UPDATE_TITLE";
createAction(UPDATE_TITLE);

export const DELETE = "DELETE";
createAction(DELETE);


//액션 추가
//redux
const initialState = {
    id : 0,
    question:[],
};

const reducer = handleActions(
    {
        [CREATE_OBJECTIVE] : (state,action) => (
            {
                id : state.id+1,
                question : [...state.question,{id:state.id+1,type:OBJECTIVE,title:state.id+1+"번째 질문"}],
            }
        ),
        [CREATE_MULTIPLE] : (state,action) => (
            {
                id : state.id+1,
                question : [...state.question,{id:state.id+1,type:MULTIPLE,title:state.id+1+"번째 질문",response:[{id:1,title:"1번째 선택요소"}]}],
            }
        ),
        [CREATE_TRUEFALSE] : (state,action) => (
            {
                id : state.id+1,
                question : [...state.question,{id:state.id+1,type:OBJECTIVE,title:state.id+1+"번째 질문"}],
            }
        ),
        [CREATE_STAR] : (state,action) => (
            {
                id : state.id+1,
                question : [...state.question,{id:state.id+1,type:OBJECTIVE,title:state.id+1+"번째 질문"}],
            }
        ),

        [UPDATE_TITLE] : (state,action) => {
            const newState = {...state};
            const i = newState.question.findIndex(r => r.id === action.id);
            newState.question[i].title = action.value;

            return (
                newState
            )
        },

        [DELETE] : (state,action) => {
            const newState = {...state};
            const index = newState.question.findIndex(r => r.id === newState.id);
            newState.question = [...newState.question.slice(0,index),...newState.question.slice(index+1,newState.question.length)];
            if(newState.id!=0){
                newState.id--;
            }
            return newState
        },
    },
    initialState
)
    
    
export default reducer;

