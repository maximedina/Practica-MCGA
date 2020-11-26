import React from 'react';
import css from './users.module.css';
import User from '../user/index'

class Users extends React.Component {

  componentDidMount = () => {
    if (this.props.users.length === 0) {
      this.props.fetchUsers();
    }
  }

  render() {
    return (
      <div className={css.app}>
        <div className={css.content}>
          <span className={css.text1}>Usuarios</span>
          <button className={css.button} onClick={() => { this.props.history.push('/formulario') }}>Agregar</button>
        </div>
        <div className={css.content}>
          <section className={css.principal}>
            <div>{this.props.isFetchingUsers && <span className={css.text2}>Cargando usuarios...</span>}</div>
            <div>{this.props.fail && <span className={css.text2}>Error al recuperar usuarios...</span>}</div>
            {
              this.props.users.map((user) => {
                return <User key={user.id} item={user} />
              })
            }
          </section>
        </div>
      </div>
    );
  }
}

export default Users;