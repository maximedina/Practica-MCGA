import React from 'react';
import css from './sidebar.module.css';

class Sidebar extends React.Component {
  state = {
    disabled: true,
  }
  render() {
    return (
      <div className={css.app}>
        <div className={css.content}>
          <section className={css.principal}>
            <span className={css.text2}>Alumno:</span>
            <div>
              <div><input type="text" className={css.dataInput} defaultValue="Maximiliano Medina" disabled={(this.state.disabled) ? "disabled" : ""} /></div>
              <div><input type="text" className={css.dataInput} defaultValue="2020" disabled={(this.state.disabled) ? "disabled" : ""} /></div>
            </div>
            <button id={css.editButton} onClick={this.editData}>{(this.state.disabled) ? "Editar Informacion" : "Guardar Informacion"}</button>
            <button id={css.addCounterButton} onClick={this.addCounter}>Agregar Contador</button>
          </section>
        </div>
      </div>
    );
  }

  addCounter = () => {
    this.props.addCounter()
    this.props.history.push('/contadores')
  }

  editData = () => {
    this.setState({ disabled: !this.state.disabled })
  }

}

export default Sidebar;