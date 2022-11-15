import SurveyMake from "./page/surveyMake/SurveyMake";
import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
  const [hello, setHello] = useState('')

    useEffect(() => {
        axios.get('/rest/read')
        .then(response => setHello(response.data))
        .catch(error => console.log(error))
    }, []);


  return (
    
    <div className="App">
      <h1>백엔드에서 가져온 데이터입니다 : {hello}</h1>
      <SurveyMake/>
    </div>

    
  );
}

export default App;
