import Form from './form'
import { connect } from 'react-redux'
import { addUser} from '../redux/index'
import {reduxForm} from 'redux-form'


const onSubmit = (values, dispatch) => {
    dispatch(addUser(values.name, values.email, values.phone))
}

const reduxFormConfig = {
    form: 'formUser',
    onSubmit
}

export default connect(undefined)(reduxForm(reduxFormConfig)(Form))