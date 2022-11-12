import React,{useState} from "react";
import "./App.css";


function App(){
    const [todoData,setTodoData] = useState([]);
    const [value,setValue] =useState("");
    const getStyle = (completed) => {
        return ({
            padding: "10px",
            borderBottom:"1px #ccc dotted",
            textDecoration : completed ? "line-through" : "None",
        })
    }
    const handleClick = (id) =>{
        let newTodoData = todoData.filter((data) => data.id !== id);
        console.log(newTodoData);
        setTodoData({todoData : newTodoData });
    }

    const handleChange = (e) =>{
        setValue({value : e.target.value})
    }

    const handleCompleteChange = (id) => {
        let newTodoData = todoData.map((data) => {
            if (data.id === id){
                data.completed = !data.completed;
            }
            return data;
        });
        setTodoData({todoData: newTodoData});
    }
    const handleSubmit = (e) =>{
        e.preventDefault();

        // 새로운 할 일 데이터 객체 생성
        let newTodo = {
            id: Date.now(),    //유니크한 값을 주기 위해
            title: value,
            completed: false
         };

         // 원래 있던 할 일에 새로운 할 일 더해주기
        setTodoData({todoData : [...todoData, newTodo]}); 
        setValue("");  
                                   //전개연산자 ...
    }

  

    return(
        <div className="container">
            <div className="todoBlock">
                <div>
                    <h1>할 일 목록</h1>
                </div>

                {todoData.map((data) => (
                    <div style={getStyle(data.completed)} key={data.id}>
                        <input type="checkbox" defaultChecked={false} onChange={() => handleCompleteChange(data.id)}/> {data.title}
                        <button className="btnStyle" onClick = {() => handleClick(data.id)}></button>
                    </div>
                ))}

                <form style={{display : 'flex'}} onSubmit={handleSubmit}>
                    <input type="text" name="value" style={{flex: '10', padding: '5px'}} 
                        placeholder="해야 할 일을 입력하세요." 
                        value={value}
                        onChange={handleChange}
                    />
                    <input type="submit" value="입력" className="btn" style={{flex: '1'}}
                    />
                </form>
            </div>
        </div>
    )
    
}
export default App;
