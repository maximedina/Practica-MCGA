import React from 'react';
import css from './counters.module.css';
import Counter from '../counter/counter';
import {Link} from "react-router-dom"

class Counters extends React.Component {
  render = () => {
    return (
      <div className={css.app}>
        <Link to="/home">
          Volver
        </Link>
        <div className={css.content}>
          <section className={css.counters}>
            <span className={css.text1}>Lista de Contadores:</span>
            {this.props.counters.map((item, index) => {
              return (<Counter
                key={index}
                index={index}
                item={item}
                decrease={this.props.decrease}
                increase={this.props.increase}
                delCounter={this.props.delCounter}
              />)
            })}
          </section>
        </div>
      </div>
    );
  }
}

export default Counters;