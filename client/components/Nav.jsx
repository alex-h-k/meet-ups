import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../actions/logout";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showBurger: false
    };
    this.toggleBurger = this.toggleBurger.bind(this);
  }
  toggleBurger() {
    this.setState({ showBurger: !this.state.showBurger });
  }
  render() {
    const { auth, logout } = this.props;
    const { showBurger } = this.state;
    // return (
    //   <nav className="navbar">
    //     <div className="container">
    //       <div className="navbar-brand">
    //         <span
    //           onClick={this.toggleBurger}
    //           className={`navbar-burger burger ${
    //             showBurger ? "is-active" : ""
    //           }`}
    //           data-target="navbarMenuHeroA"
    //         >
    //           <span />
    //           <span />
    //           <span />
    //         </span>
    //       </div>
    //       <div
    //         id="navbarMenuHeroA"
    //         className={`navbar-menu ${showBurger ? "is-active" : ""}`}
    //       >
    //         <div className="navbar-end">
    //           {auth.isAuthenticated ? (
    //             <Link
    //               to="/"
    //               className="navbar-item is-large"
    //               onClick={() => logout()}
    //             >
    //               Logout
    //             </Link>
    //           ) : (
    //             [
    //               <Link
    //                 onClick={this.toggleBurger}
    //                 className="navbar-item is-large"
    //                 to="/login"
    //               >
    //                 Login
    //               </Link>,
    //               <Link
    //                 onClick={this.toggleBurger}
    //                 className="navbar-item"
    //                 to="/register"
    //               >
    //                 Register
    //               </Link>
    //             ]
    //           )}
    //         </div>
    //       </div>
    //     </div>
    //   </nav>
    // );
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
            />
          </a>

          <a
            role="button"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">Home</a>

            <a className="navbar-item">Categories</a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Events</a>

              <div className="navbar-dropdown">
                <a className="navbar-item">Join Event</a>
                <a className="navbar-item">Events Near You</a>
                <a className="navbar-item">Contact Us</a>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a className="button is-light">Log in</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logoutUser())
  };
};

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
