import React from 'react'




function Navbar() {
    return (

        <nav>
            <h1 className='Logo'>Logo</h1>
            <ul>
                <li className="about-dropdown">About
                    <ul classname="dropdown-list left">
                        <li className='nav-dropdown'>1</li>
                        <li className='nav-dropdown'>2</li>
                        <li className='nav-dropdown'>3</li>
                    </ul>
                    <ul classname="dropdown-list mid">
                        <li className='nav-dropdown'>1</li>
                        <li className='nav-dropdown'>1</li>
                        <li className='nav-dropdown'>1</li>
                    </ul>
                    <ul classname="dropdown-list right">
                        <li className='nav-dropdown'>1</li>
                        <li className='nav-dropdown'>1</li>
                        <li className='nav-dropdown'>1</li>
                    </ul>
                </li>
                <li>Team</li>
                <li>Impact</li>
                <li>Donate</li>
                <li className='nav-divider'>|</li>
                <li>Contact</li>
            </ul>
        </nav>

    )
}

export default Navbar