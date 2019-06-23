import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import Modal from './Modal';
class App extends Component {
    state = {
        ModalShow: false
    }
    onMailClick = () => {
        this.setState(prevState => {
            return {ModalShow : !prevState.ModalShow}
        })
    }
    render() {
        return (
            <resume-app>
            <Header title="<K>aramjeet <D/>hooria"/>
            <Footer text="9999999999" onMailClick={this.onMailClick}/>
            <Modal show={this.state.ModalShow} />
            </resume-app>
        );
    }
}

export default App;