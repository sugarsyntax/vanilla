import Link from 'next/link'
import styled from 'styled-components'

const Nav = styled.nav`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0.5rem 8rem;
    .nav-link {
        text-decoration: none;
        font-size: 2.4rem;
    }
    .navbar {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
`;

class Header extends React.Component {
    render() {
        return (
            <div>
                <Nav className="navbar navbar-expand-lg navbar-nav">
                    <Link className="nav-item" href="/index.js">
                        <a className="nav-link">Home</a>
                    </Link>
                    <Link href="/about.js">
                        <a className="nav-link">About</a>
                    </Link>
                    <Link href="/portfolio.js">
                        <a className="nav-link">Portfolio</a>
                    </Link>
                    <Link href="/contact.js">
                        <a className="nav-link">Contact</a>
                    </Link>
                </Nav>
            </div>
            );
        }
    }

export default Header