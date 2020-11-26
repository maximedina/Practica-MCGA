import React from 'react'
import css from './form.module.css'
import { Field } from 'redux-form'
class Form extends React.Component {

  render = () => {
    return (
      <div className={css.app}>
        <div className={css.content}>
          <section className={css.principal}>
            <span className={css.text2}>Alumno:</span>
            <div>
              <Field name="name" placeholder="Nombre" className={css.dataInput} component="input" type="text" />
              <Field name="email" placeholder="Email" className={css.dataInput} component="input" type="text" />
              <Field name="phone" placeholder="Telefono" className={css.dataInput} component="input" type="text" />
            </div>
            <div>
              <button className={css.button} onClick={this.addUser}>Insertar</button>
              <button className={css.button} onClick={() => { this.props.history.push("/usuarios") }}>Cancelar</button>
            </div>
          </section>
        </div>
      </div>
    )
  }

  addUser = () => {
    this.props.handleSubmit();
    this.props.history.push("/usuarios");
  }
}
export default Form