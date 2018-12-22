import React from 'react';

const Navbar = () => {
    return (
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">
              Let's do it
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <a href="sass.html">Link 1</a>
              </li>
              <li>
                <a href="badges.html">Link 2</a>
              </li>
              <li>
                <a href="collapsible.html">Link 3</a>
              </li>
            </ul>
          </div>
        </nav>
    )
}

export default Navbar;