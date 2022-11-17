import {handleActions,createAction} from 'redux-actions'

import {OBJECTIVE,MULTIPLE,TRUEFALSE,STAR ,DATA_OBEJCTIVE,DATA_MULTIPLE} from './format';


//TYPE 
export const CREATE_OBJECTIVE = "CREATE_OBJECTIVE";
export const CREATE_MULTIPLE = "CREATE_MULTIPLE";
export const CREATE_TRUEFALSE = "CREATE_TRUEFALSE";
export const CREATE_STAR = "CREATE_STAR";

export const UPDATE_TITLE = "UPDATE_TITLE";
export const UPDATE_MULTIPLE_CREATE_RESPONSE = "UPDATE_MULTIPLE_CREATE_RESPONSE";
export const UPDATE_MULTIPLE_UPDATE_RESPONSE = "UPDATE_MULTIPLE_UPDATE_RESPONSE";
export const UPDATE_MULTIPLE_DELETE_RESPONSE = "UPDATE_MULTIPLE_DELETE_RESPONSE";
export const UPDATE_MULTIPLE_CANMULTI = "UPDATE_MULTIPLE_CANMULTI";

export const DELETE = "DELETE";


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
                question : [...state.question,
                    {   
                        id:state.id+1,
                        order:state.question.length+1,
                        type:OBJECTIVE,
                        title:state.id+1+"번째 질문"
                    }],
            }
        ),

        [CREATE_MULTIPLE] : (state,action) => (
            {
                id : state.id+1,
                question : [...state.question,
                    {
                        id:state.id+1,
                        order:state.question.length+1,
                        type:MULTIPLE,
                        title:state.id+1+"번째 질문",
                        canMulti:"true",
                        response:[{id:1,title:"1번째 선택요소"}]
                    }],
            }
        ),  
            [UPDATE_MULTIPLE_CANMULTI] : (state,action) => {
                let i = state.question.findIndex(r => r.id === action.questionID);
                if(state.question[i].canMulti=="true"){
                    state.question[i].canMulti = "false";
                }
                else{
                    state.question[i].canMulti = "true";
                }
                return ({
                    id : state.id,
                    question : state.question,
                })
            },

            
            [UPDATE_MULTIPLE_CREATE_RESPONSE] : (state,action) => {
                let i = state.question.findIndex(r => r.id === action.questionID);
                let current = state.question[i];
                let response = state.question[i].response;
                response = [...response,{id:response.length+1,title:response.length+1+"번째 선택요소"}]
                current.response = response;
                state.question.splice(i,1,current);
                
                return ({
                    id : state.id,
                    question : state.question,
                })
            },

            
            [UPDATE_MULTIPLE_UPDATE_RESPONSE] : (state,action) => {
                let i = state.question.findIndex(r => r.id === action.questionID);
                let ii = state.question[i].response.findIndex(r => r.id === action.responseID);
                state.question[i].response[ii].title = action.value;
                return ({
                    id : state.id,
                    question : state.question,
                })
            },


            [UPDATE_MULTIPLE_DELETE_RESPONSE] : (state,action) => {
                let i = state.question.findIndex(r => r.id === action.questionID);
                let ii = state.question[i].response.findIndex(r => r.id === action.responseID);
                state.question[i].response.splice(ii,1);
                
                state.question[i].response.map((r,index) => {
                    r.id=index+1;
                    return r;
                })
                return ({
                    id : state.id,
                    question : state.question,
                })
            },


        [CREATE_TRUEFALSE] : (state,action) => (
            {
                id : state.id+1,
                question : [...state.question,
                    {
                        id:state.id+1,
                        order:state.question.length+1,
                        type:TRUEFALSE,
                        title:state.id+1+"번째 질문"
                    }],
            }
        ),
        [CREATE_STAR] : (state,action) => (
            {
                id : state.id+1,
                question : [...state.question,
                    {
                        id:state.id+1,
                        order:state.question.length+1,
                        type:STAR,
                        title:state.id+1+"번째 질문"
                    }],
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

