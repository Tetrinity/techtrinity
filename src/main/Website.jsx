import React from 'react';
import Header from './frame/Header';
import Body from './frame/Body';
import Footer from './frame/Footer';

class Website extends React.PureComponent {

    render(){
        return (
            <div className="site">
                <Header/>
                <Body/>
                <Footer/>
            </div>
        )
    }
}

export default Website;