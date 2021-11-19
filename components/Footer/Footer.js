import './Footer.scss';
import {connect} from "react-redux";
import {Component} from "react";

class Footer extends Component{

    render() {
        return (
            <div className={'Footer'}>
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
export default connect(mapStateToProps, mapDispatchToProps)(Footer);
