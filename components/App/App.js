import './App.scss';
import {connect} from "react-redux";
import {Component} from "react";

class App extends Component{

    render() {
        return (
            <div className={'App'}>
            </div>
        );
    }
}




function mapStateToProps(state) {
    return {
    };
}
function mapDispatchToProps(dispatch) {
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
