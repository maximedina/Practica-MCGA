import React from 'react'
import css from './counter.module.css'

const Counter = (props) => {
    return (
        <div className={css.counter}>
            <div>
                <p className={css.date}><b>Creado:</b> {props.item.created}</p>
                <p className={css.date}><b>Modificado:</b> {props.item.modified}</p>
            </div>
            <div>
                <button className={css.button} onClick={() => { props.decrease(props.index) }}>−</button>
                <span className={css.count}>{props.item.count}</span>
                <button className={css.button} onClick={() => { props.increase(props.index) }}>+</button>
                <button className={css.button} onClick={() => { props.delCounter(props.index) }}>Eliminar</button>
            </div>
        </div>
    )
}
export default Counter