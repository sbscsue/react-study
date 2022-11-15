import {createStore} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';

import {Provider,useSelector,useDispatch,connect} from 'react-redux';

import QuestionMakeList from "./component/QuestionMakeList";
import QuestionResultList from "./component/QuestionResultList";

import counter from "./reducer/action";
import {CREATE_OBJECTIVE, CREATE_MULTIPLE,CREATE_TRUEFALSE,CREATE_STAR,DELETE } from "./reducer/action";
//style
const tempStyle={
    display:"flex",
}



const store = createStore(counter,composeWithDevTools());

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