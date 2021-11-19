import './Main.scss';
import {connect} from "react-redux";
import {Component} from "react";

class Main extends Component{

    render() {
        return (
            <div className={'Main'}>
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
export default connect(mapStateToProps, mapDispatchToProps)(Main);
