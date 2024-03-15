

import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <div className='navDiv'>
            <button className="Btn navItem"><Link to="/">Course List</Link></button>
            <button className="Btn navItem"><Link to="/enquiries">Enquiries</Link></button>
        </div>
    );
}
 
export default Navbar;