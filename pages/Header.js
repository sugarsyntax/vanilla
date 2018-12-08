import Link from 'next/link'
import Head from 'next/head'
import styled from 'styled-components'

const Nav = styled.nav`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0em;
    .nav-link {
        text-decoration: none;
        font-size: 2.5em;
    }
    .navbar-nav {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 0.5em 4.5em;
    }
`;

const Header = (props) => (
            <div>
                <Head>
                    <title>Jacquelline.io</title>
                    <link rel="stylesheet" href="https://bootswatch.com/4/lux/bootstrap.min.css"/>
                </Head>
                <Nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                    <div className="collapse navbar-collapse navbar-nav">
                        <Link className="nav-item" href="/">
                            <a className="nav-link">Home</a>
                        </Link>
                        <Link className="nav-item" href="/about">
                            <a className="nav-link">About</a>
                        </Link>
                        <Link className="nav-item" href="/portfolio">
                            <a className="nav-link">Portfolio</a>
                        </Link>
                        <Link className="nav-item" href="/contact">
                            <a className="nav-link">Contact</a>
                        </Link>
                    </div>
                </Nav>
                {props.children}
            </div>
            )

export default Header