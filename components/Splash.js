import Head from 'next/head'
import Header from '../pages/Header'
import styled from 'styled-components'

const Shape = styled.div`
    position: absolute;
    width: 100%;
    min-height: 196.85px;
    color: #fff;
    background: #7A98FE;
    h2 {
        margin-top: 1rem;
        text-align: center;
        color: #fff;
        font-size: 3em;
    }
    ul {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 3rem;
        font-size: 1.8em;
    }
    @media (max-width:920px) {
        min-height: auto;
        ul {
            flex-direction: column;
            font-size: 2em;
            margin: 0% 50%;
            list-style-type: circle;
        }
    }
`;

const Img = styled.div `
    top: 0;
    width: 100vw;
    min-height: 40em;
    z-index: -1;
    background-image: url("static/pexels-photo-1309766.jpeg");

    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const Wrect = styled.div `
    background-color: #fff;
    width: 100%;
    min-height: 11em;
    z-index: 1;
`;
const Splash = (props) => (
            <div>
                <Head>
                    <title>Jacquelline.io</title>
                    <link rel="stylesheet" href="https://bootswatch.com/4/lux/bootstrap.min.css"/>
                </Head>
                <Header />
                <Img />
                <Wrect />
                <Shape>
                    <h2>Skills</h2>
                    <ul>
                        <li>HTML5/CSS3</li>
                        <li>Javascript</li>
                        <li>Git/GitHub</li>
                        <li>Bootstrap</li>
                        <li>Unix</li>
                        <li>Ruby</li>
                    </ul>
                </Shape>
                {props.children}
            </div>
)

export default Splash