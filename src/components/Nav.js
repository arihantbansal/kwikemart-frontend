
import '../App';
import {Link} from 'react-router-dom';


function Nav() {

  const navStyle={
    color:'white'
  };

  return (
    <nav>
      <Link to="/">
        <h3>INVENTORY AUDITOR</h3>
        </Link>
        <ul className="nav-links">
            <Link style={navStyle} to="/about">
              <li>About</li>
            </Link >
            <Link style={navStyle} to="/shop">
              <li>Shop</li>
            </Link>
            
        </ul>
    </nav>
  );
}

export default Nav;
