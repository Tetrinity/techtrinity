import React from 'react';
import Header from './frame/Header'
import Footer from './frame/Footer'

class Website extends React.PureComponent {

    render(){
        return (
            <div>
                <Header/>

                <Footer/>
            </div>
        )
    }

}

export default Website;