import React from "react";

function List(props) {

    const todoData = props.todoData;
    const setTodoData = props.setTodoData;

    const getStyle = (completed) => {
        return ({
            padding: "10px",
            borderBottom:"1px #ccc dotted",
            textDecoration: completed ? "line-through" : "none",
        })
    }

    const handleClick = (id) =>{
        let newTodoData = todoData.filter((data) => data.id !== id);
        console.log(newTodoData);
        setTodoData(newTodoData);
   }

    const handleCompleteChange = (id) => {
        let newTodoData = todoData.map((data) => {
            if (data.id === id){
                data.completed = !data.completed;
            }
            return data;
        });
        setTodoData(newTodoData);
    }

    return (
        <div>
            {todoData.map((data) => (
                <div style={getStyle(data.completed)} key={data.id}>
                    <input type="checkbox" defaultChecked={false} onChange={() => handleCompleteChange(data.id)}/> {data.title}
                    <button className="btnStyle" onClick = {() => handleClick(data.id)}>x</button>
                </div>
            ))}
        </div>
    )
}

export default List;


