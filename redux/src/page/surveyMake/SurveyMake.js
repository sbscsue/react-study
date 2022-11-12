import {createStore} from "redux";
import {Provider,useSelector,useDispatch,connect} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';


import { OBJECTIVE,MULTIPLE,TRUEFALSE,STAR, DATA_OBEJCTIVE, DATA_MULTIPLE } from "./reducer/format";
import {CREATE_OBJECTIVE,CREATE_MULTIPLE,CREATE_TRUEFALSE,CREATE_STAR,DELETE, UPDATE_TITLE} from "./reducer/action";


import QuestionMakeList from "./component/QuestionMakeList";
import QuestionResultList from "./component/QuestionResultList";
//style
const tempStyle={
    display:"flex",
}

//redux
const initialState = {
    id : 0,
    question:[],
};

function reducer(currentState=initialState,action){
    const newState = {...currentState};
    switch(action.type){
        case CREATE_OBJECTIVE:
            newState.question = [...newState.question,DATA_OBEJCTIVE(newState.id+1)];
            newState.id++;
            return newState
        case CREATE_MULTIPLE:
            newState.question = [...newState.question,DATA_MULTIPLE(newState.id+1)];
            newState.id++;
            return newState
        case CREATE_TRUEFALSE:
            newState.question = [...newState.question,{id:newState.id+1,type:TRUEFALSE}];
            newState.id++;
            return newState
        case CREATE_STAR:
            newState.question = [...newState.question,{id:newState.id+1,type:STAR}];
            newState.id++;
            return newState
          
        case UPDATE_TITLE:
            const i = newState.question.findIndex(r => r.id === action.id);
            newState.question[i].title = action.value;
            return newState

        case DELETE:
            console.log(DELETE);
            const index = newState.question.findIndex(r => r.id === newState.id);
            newState.question = [...newState.question.slice(0,index),...newState.question.slice(index+1,newState.question.length)];
            if(newState.id!=0){
              newState.id--;
            }
            return newState
        }   

}

  
const store = createStore(reducer,composeWithDevTools());

function SurveyMake() {
    return ( 
        <Provider store ={store}>
            <div> 
                <PlusButton/>
                <DeleteButton/>
            </div>
            <div style={{display:"flex"}} >
                <QuestionMakeList/>
                <QuestionResultList/>
            </div>
        </Provider>
     );
}


//button 
function PlusButton(props){
    const dispatch = useDispatch();
    return(
      <div>
        <input type="button" value="주관식" onClick={() => {
          dispatch({type : CREATE_OBJECTIVE});
        }}></input>
        <input type="button" value="객관식" onClick={() => {
          dispatch({type : CREATE_MULTIPLE});
        }}></input>
        <input type="button" value="찬반" onClick={() => {
          dispatch({type : CREATE_TRUEFALSE});
        }}></input>
        <input type="button" value="별점" onClick={() => {
          dispatch({type : CREATE_STAR});
        }}></input>
       </div>
    );
}

function DeleteButton(props){
    const dispatch = useDispatch();
    return(
      <div>
        <input type="button" value="+" onClick={() => {
          dispatch({type : DELETE});
        }}></input>
       </div>
    );
}

export default SurveyMake;