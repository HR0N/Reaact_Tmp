import './Header.scss';
import {connect} from "react-redux";
import {Component} from "react";

class Header extends Component{

    render() {
        return (
            <div className={'Header'}>
                Header
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
export default connect(mapStateToProps, mapDispatchToProps)(Header);
