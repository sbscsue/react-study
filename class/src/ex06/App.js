import React, {Component} from "react";
import "./App.css";


    class App extends Component {
        getStyle = (completed) => {
            return ({
                padding: "10px",
                borderBottom:"1px #ccc dotted",
                textDecoration : completed ? "line-through" : "None",
            })
        }
        state = {
            todoData : [
                
            ],
            value : [

            ]
        }
        handleClick = (id) =>{
            let newTodoData = this.state.todoData.filter((data) => data.id !== id);
            console.log(newTodoData);
            this.setState({todoData : newTodoData });
        }

        handleChange = (e) =>{
            this.setState({value : e.target.value})
        }

        handleCompleteChange = (id) => {
            let newTodoData = this.state.todoData.map((data) => {
                if (data.id === id){
                    data.completed = !data.completed;
                }
                return data;
            });
            this.setState({todoData: newTodoData});
        }
        handleSubmit = (e) =>{
            e.preventDefault();

            // 새로운 할 일 데이터 객체 생성
            let newTodo = {
                id: Date.now(),    //유니크한 값을 주기 위해
                title: this.state.value,
                completed: false
            };

            // 원래 있던 할 일에 새로운 할 일 더해주기
            this.setState({todoData : [...this.state.todoData, newTodo], value:""});   
                                    //전개연산자 ...
        }
        handleCompleteChange = (id) => {
            let newTodoData = this.state.todoData.map((data) => {
                if (data.id === id){
                    data.completed = !data.completed;
                }
                return data;
            });
            this.setState({todoData: newTodoData});
        }
    
        render(){
            return(
                <div className="container">
                    <div className="todoBlock">
                        <div>
                            <h1>할 일 목록</h1>
                        </div>

                        {this.state.todoData.map((data) => (
                            <div style={this.getStyle(data.completed)} key={data.id}>
                                <input type="checkbox" defaultChecked={false} onChange={() => this.handleCompleteChange(data.id)}/> {data.title}
                                <button className="btnStyle" onClick = {() => this.handleClick(data.id)}></button>
                            </div>
                        ))}

                        <form style={{display : 'flex'}} onSubmit={this.handleSubmit}>
                            <input type="text" name="value" style={{flex: '10', padding: '5px'}} 
                                placeholder="해야 할 일을 입력하세요." 
                                value={this.state.value}
                                onChange={this.handleChange}
                            />
                            <input type="submit" value="입력" className="btn" style={{flex: '1'}}
                            />
                        </form>
                    </div>
                </div>
            )
        }
    }
    export default App;
