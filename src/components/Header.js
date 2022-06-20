import PropTypes from 'prop-types';
import './css/Header.css';

const Header = ({title}) => {
    return (
        <header className='header'>
            <h1> {title} </h1>
            <nav> 
                <ul>
                    <li> Home </li>
                    <li> Champions </li>
                    <li> Matches </li>
                </ul>
            </nav>
        </header>
    )
}

Header.defaultProps = {
    title: 'League Stats',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header;