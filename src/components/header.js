import React, { Component } from 'react'
import './bootstrap.min.css'
import './layout.css'
import {Link} from 'gatsby'
import { FaCartArrowDown } from 'react-icons/fa';

export default class Header extends Component {

    state = {
        navbarState : false,
        navbarClass : "collapse navbar-collapse",
        menus : [{
            id : 1,
            text : "Home",
            url : "/"
        } , {
            id : 2,
            text : "About Us",
            url : "/about"
        } , {
            id : 3,
            text : "Services",
            url : "/services"
        }]
    }

    myToggler = () => {
        this.state.navbarState ? this.setState({
            navbarState : false,
            navbarClass : "collapse navbar-collapse show"
        }) : this.setState({
            navbarState : true,
            navbarClass : "collapse navbar-collapse"
        })
    }

    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-theme">
                <Link className="navbar-brand text-light ml-5" to="/">Navbar</Link>
                <button className="navbar-toggler" type="button" onClick={this.myToggler}>
                    <span className="navbar-toggler text-light"> menu </span>
                </button>

                <div className={this.state.navbarClass}>
                    <ul className="navbar-nav ml-auto mr-4">
                        {this.state.menus.map(menu => {
                            return (
                                <li class="nav-item active mr-4">
                                    <Link className="nav-link text-light" to={menu.url} key={menu.id}>
                                        {menu.text}
                                    </Link>
                                </li>
                            )
                        })}
                        <li className="nav-item mr-4 cart">
                            <Link className="nav-link text-light" to="#"> <FaCartArrowDown /> </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}


