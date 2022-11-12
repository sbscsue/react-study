import { useState } from "react";

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


function ObjectMake({id, title}) {
    const dispatch = useDispatch();

    const onChange = (e) => {
        dispatch({type:UPDATE_TITLE,id:id,value:e.target.value});
    };

    return(
        <div style={styles.container}>
            <div>
            <input placeholder={title} maxLength={50} onChange={onChange} ></input>
            </div>

        </div>
    );
}

export default ObjectMake;