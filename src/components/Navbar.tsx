import { Link } from 'react-router-dom';

import logo from '../assets/logo-1.png';

function Navbar() {

    return (
    <div className="flex flex-col md:flex-row justify-between items-center px-10 py-5">
        <img className="md:w-1/4 pb-2" src={logo}/>
        <div>
            <ul className="flex flex-row justify-evenly items-center space-x-5 pb-2">
                <li><Link className="py-5 border-b-4 border-white hover:border-gray-500 transition duration-300" to='/'>Home</Link></li>
                <li><Link className="py-5 border-b-4 border-white hover:border-gray-500 transition duration-300" to='/about'>About</Link></li>
            </ul>
        </div>
    </div>
    );
}

export default Navbar;