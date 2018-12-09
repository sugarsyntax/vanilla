import Link from 'next/link'
import Layout from '../components/Layout'
import styled from 'styled-components'

const Para = styled.p`
    margin: 1.5em 3.5em;
    font-size: 1.9em;
    font-color: #000;
    line-height: 1.8em;
    text-align: justify;
    letter-spacing: 0em;
    @media (max-width: 900px) {
        margin: 1em 2em;
        line-height: 1.5em;
      }
`;

const About = () => (
    <Layout>
        <div>
        <Para>
            I am based in Los Angeles and I'm passionate about providing quality web development.
            I always go above and beyond to ensure I get the job done right the first time. 
            My work stands out because I am persistent in manifesting your unique vision, you will not find cookie cutter websites here. 
            My goal is to help freelancers, entrepreneurs, artists, and individuals showcase their work online on their terms.

            <br />
            <br />
            
              I’ve been doing web development for a short while, and I love it because it gives me the chance to meet people in different fields and challenge myself creatively.
            
            I look forward to working with you to help meet all your web development needs.
            View my resume 
            </Para>
        </div>
    </Layout>
)

export default About