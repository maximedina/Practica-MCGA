import Counter from './counter'
import {connect} from 'react-redux'
import {increase, decrease, delCounter} from '../redux/index'


const mapDispatchtoProps = (dispatch) => {
    return {
      increase: (index) => dispatch(increase(index)),
      decrease: (index) => dispatch(decrease(index)),
      delCounter: (index) => dispatch(delCounter(index))
    }
    
}

export default connect(undefined, mapDispatchtoProps)(Counter)