import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.png'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1>
                      <div><strong>EyesTee Coming Soon!</strong></div>
                    </h1>
                    <br />
                    We provide cool swags and t-shirts.
                    <br />
                    Stay tuned for <a href="">promos</a> and <a href="">more</a>!
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
