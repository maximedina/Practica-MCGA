import React from 'react'
import css from './counter.module.css'



class Counter extends React.Component {
    state = {
        id: this.props.id,
        count: 0,
        create: this.props.create,
        modified: this.props.modified,
    }

    render = () => {
        return (
            <div className={css.counter}>
                <div>
                <p className={css.date}><b>Creado:</b> {this.state.create}</p>
                <p className={css.date}><b>Modificado:</b> {this.state.modified}</p> 
                </div>
                <div>  
                <button className={css.button} onClick={this.decrease}>−</button>
                <span className={css.count}>{this.state.count}</span>
                <button className={css.button} onClick={this.increase}>+</button>
                <button className={css.button} onClick={() => {
                    this.props.delCounter(this.props.id)
                }}>Eliminar</button>
                </div>
            </div>
        )
    }

    increase = () => {
        this.setState({
            count: this.state.count + 1,
            modified: new Date().toLocaleString(),
        })
    }
    decrease = () => {
        this.setState({
            count: this.state.count - 1,
            modified: new Date().toLocaleString(),
        })
    }
}
export default Counter