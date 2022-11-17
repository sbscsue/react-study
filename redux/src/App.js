import SurveyMake from "./page/surveyMake/SurveyMake";
import React, {useEffect, useState} from 'react';
import axios from 'axios';

import {createStore} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider,useSelector,useDispatch,connect} from 'react-redux';
import reducer from "./page/surveyMake/reducer/action";
import { store, surveyMakeSlice } from "./page/surveyMake/reducer/action2";


//const store = createStore(surveyMakeSlice,composeWithDevTools());

function App() {
  const [hello, setHello] = useState('')

    useEffect(() => {
        axios.get('/rest/read')
        .then(response => setHello(response.data))
        .catch(error => console.log(error))
    }, []);


  return (

    <Provider store ={store}>
        <div className="App">
          <h1>백엔드에서 가져온 데이터입니다 : {hello}</h1>
          <SurveyMake/>
        </div>
    </Provider>
   

    
  );
}

export default App;
