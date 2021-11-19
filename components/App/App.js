import './App.scss';
import {connect} from "react-redux";
import React, {Component} from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

class App extends Component{

    render() {
        return (
            <div className={'App'}>
                <Header/>
                <Main/>
                <Footer/>
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
