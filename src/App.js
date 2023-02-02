import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas, tachar y destacharlas y error de validacion en el input

class App extends Component {
  constructor() {
    super()
    this.state = {
      tasks: [
        { id: 1, name: "Sacar la ropa", done: false },
        { id: 2, name: "Hacer la cama", done: true },
        { id: 3, name: "Leer un rato", done: false }
      ],
      newTask: ''
    }
  }
  verificarTarea = (e) =>{
    const completada = e.target;
    if(this.state.tasks.){
      completada.classList.remove('done');
    }else{
      completada.classList.add('done');
      
    }
  }

  handlerOnType = (ev) => {
    let valor = ev.target.value;
    
    this.setState({newTask:valor});
     

  }
  handlerOnSubmit=(event)=>{
    event.preventDefault();
    let completo = {id: this.state.tasks.length+1, name: this.state.newTask, done: false}
    this.setState({tasks: this.state.tasks.concat([completo])})
    this.setState({newTask:""})

    
  };

  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {this.state.tasks.map((task, index) => <li key={task.id} onClick={this.verificarTarea}>{task.name}</li>)}
          </ul>
          <form onSubmit={this.handlerOnSubmit}>
            <input type="text" id="new-task" onChange={this.handlerOnType} placeholder="Ingresa una tarea y oprime Enter" value={this.state.newTask} />
          </form>
        </div>
      </div>
    )
  }
}

export default App;
