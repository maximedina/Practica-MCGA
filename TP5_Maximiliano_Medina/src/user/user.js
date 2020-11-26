import React from 'react'
import css from './user.module.css'


class User extends React.Component {

    render = () => {
        return (
            <div className={css.cell}>
                <div><b>Nombre:</b> {this.props.item.name}</div>
                <div><b>Email:</b> {this.props.item.email}</div>
                <div><b>Telefono:</b> {this.props.item.phone}</div>
            </div>
        )
    }
}
export default User