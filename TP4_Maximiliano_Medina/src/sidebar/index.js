import Sidebar from './sidebar'
import {connect} from 'react-redux'
import {addCounter} from '../redux/index'

const mapDispatchtoProps = (dispatch) => {
    return {
      addCounter: () => dispatch(addCounter())
    }
}

export default connect(undefined, mapDispatchtoProps) (Sidebar)