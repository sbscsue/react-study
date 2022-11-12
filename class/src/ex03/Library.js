import React from "react";


function Comp1(props){
    return(
        <h1>{props.name}</h1>
    );
}

function Comp2(props){
    if(props.order == true){
        return(
            <ul>
                <li>{props.name}</li>
                <ol>
                    <li>{props.value[0]}</li>
                    <li>{props.value[1]}</li>
                    <li>{props.value[2]}</li>
                </ol>
            </ul>
            
        );
    }
    else{
        return(
            <ul>
                <li>{props.name}</li>
                <ul>
                    <li>{props.value[0]}</li>
                    <li>{props.value[1]}</li>
                    <li>{props.value[2]}</li>
                </ul>
            </ul>
            
        );
    }
       
}




function Book(props){
    return(
        <div>
          <Comp1 name="매일매일 레시피"></Comp1>
          <Comp2 order = {false} name="얼려먹으면 더 좋은 음식들" value = {["두부", "흰쌀", "브로콜리"]}></Comp2>
          <Comp2 order = {true} name="쫄깃한 라면 조리법" value = {["물을 끓인다.", "라면과 스프를 넣은 후 4분간 더 끌인다.", "계란 또는 파 등을 곁들인다."]}></Comp2>
        </div>


    );
}


function Library(){
    return(
        <div>
                <Book name="파이썬" numOfPage={30}/>

        </div>
    );
}

export default Library;