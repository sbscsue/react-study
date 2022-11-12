import { UPDATE_TITLE } from "../../page/surveyMake/reducer/action";
import {useDispatch} from 'react-redux';

const styles = {
    container: {
        border:3,
        borderStyle: "solid",
        display: "flex",
        padding: 15,
    },
}


function MultipleMake({id,title,response}) {
    const dispatch = useDispatch();

    const onChange = (e) => {
        dispatch({type:UPDATE_TITLE,id:id,value:e.target.value});
    };

    return(
        <div style={styles.container}>
            <div>
            <input placeholder={title} maxLength={50} onChange={onChange} ></input>
            <ResponseList list={response}/>
            </div>

        </div>
    );
}

export default MultipleMake;


function ResponseList({list}) {
    let responseList;
    if(list!=undefined){
        responseList = list.map(
            r => (
                <Response 
                key = {r.id} 
                title={r.title} 
                />
            )
        )
    }

    return(
        <div>
            {responseList}
        </div>
    )
}


function Response({key,title}){
    return(
        <div>      
                <input type="checkbox"/>
                <input type="text" placeholder={title}/>
         
        </div>
    );
}





