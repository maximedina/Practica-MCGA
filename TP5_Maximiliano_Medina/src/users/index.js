import Users from './users'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux'

const mapStateToProps = (store) => {
    return {
        users: store.users.list,
        isFetchingUsers: store.users.isFetchingUsers,
        fail: store.users.fail
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)