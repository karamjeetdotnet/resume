import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import Modal from './Modal';
import Slider from './Slider';
import About from './About';
import Experience from './Experience';
import Work from './Work';
import Clients from './Clients';
import Promo from './Promo';
import Contact from './Contact';
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
            <>
            <Header title="<K>aramjeet <D/>hooria"/>
            <Slider/>
            <About/>
            <Experience/>
            <Work/>
            <Clients/>
            <Promo/>
            <Contact/>
            <Footer text="9999999999" onMailClick={this.onMailClick}/>
            <a href="javascript:void(0);" className="js-back-to-top back-to-top">Top</a>
            <Modal show={this.state.ModalShow} />
            </>
        );
    }
}

export default App;