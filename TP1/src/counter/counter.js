import React from 'react'
import css from './counter.module.css'



class Counter extends React.Component {
    state = {
        id: this.props.id,
        count: 0,
    }

    render = () => {
        return (
            <div className={css.counter}>
                <button className={css.button} onClick={this.decrease}>−</button>
                <span className={css.count}>{this.state.count}</span>
                <button className={css.button} onClick={this.increase}>+</button>
                <button className={css.button} onClick={() => {
                    this.props.delCounter(this.props.id)
                }}>Eliminar</button>
            </div>
        )
    }

    increase = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    decrease = () => {
        this.setState({
            count: this.state.count - 1
        })
    }
}
export default Counter