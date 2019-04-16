/**
 * Created by Han on 2019/4/15.
 */
import React from 'react';
import {connect} from "react-redux";
import {updateUser,apiRequest} from "../../action/userAction";

class HelloWorld extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount() {
        this.props.onFetch()
    }

    handleUpdateUser(event) {
        this.props.onUpdateUser(event.target.value)
    }

    render() {
        return <React.Fragment>
            <input onChange={this.handleUpdateUser.bind(this)}/>
            <span>{this.props.user}</span>
        </React.Fragment>
    }

}

const mapStateToProps = (state, props) => {
    return {
        user: state.user
    }
};
const mapActionToProps = {
    onUpdateUser: updateUser,
    onFetch:apiRequest
};
export default connect(mapStateToProps, mapActionToProps)(HelloWorld);