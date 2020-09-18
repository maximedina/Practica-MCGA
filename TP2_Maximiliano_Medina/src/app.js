import React from 'react';
import Loading from './loading/loading'
import Error from './error/error'
import css from './app.module.css';
import Counter from './counter/counter'
import nextId from "react-id-generator";

class App extends React.Component {
  state = {
    counters: [],
    loading: false,
    error: undefined,
    disabled: true,
  }

  componentWillMount = async () => {
    try {      
      this.setState({
        loading: true,
        error: undefined,
      })

      this.setState({
        loading: false
      }) 
    } catch(error) {
      this.setState({
        loading: false,
        error: error.toString(),
      })
    }
  }

  render() {
    return (
      <div className={css.app}>
        <header className={css.header}>
        TRABAJO PRÁCTICO Nº 1 (React js)
        </header>
        <div className={css.content}>
          <section className={css.principal}>  
            <span className={css.text2}>Alumno:</span>
            <div>
            <div><input type="text" className={css.dataInput} defaultValue="Maximiliano Medina" disabled={(this.state.disabled)? "disabled" : ""}/></div>
            <div><input type="text" className={css.dataInput} defaultValue="2020" disabled={(this.state.disabled)? "disabled" : ""}/></div>
            </div>
            <button id={css.editButton} onClick={this.editData}>{(this.state.disabled)? "Editar Informacion" : "Guardar Informacion"}</button>
            <button id={css.addCounterButton} onClick={this.addCounter}>Agregar Contador</button>
          </section>
          <section className={css.counters}>    
          <span className={css.text1}>Lista de Contadores:</span>    
          {this.state.error && <Error message={this.state.error}/>}
            {this.state.loading
              ? <Loading />
              :this.state.counters.map((counter) => {
              return counter
            })}
          </section>
        </div>
      </div>
    );
  }

  addCounter = () => {
    let list = this.state.counters
    const id = nextId()
    const create=new Date().toLocaleString()
    let modified=new Date().toLocaleString()
    list.push(<Counter key={id} id={id} create={create} modified={modified} delCounter={this.delCounter}/>)
    this.setState({
      counters: list
    })
  }
  
  delCounter = (id) => {
    const list = this.state.counters.filter((counter) => {
        return counter.props.id !== id;
    })
    this.setState({
      counters: list
    })
  }

  editData = () => {
    this.setState({disabled: !this.state.disabled})
  } 

}

export default App;