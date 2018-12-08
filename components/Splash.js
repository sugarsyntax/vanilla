import Head from 'next/head'
import Header from '../pages/Header'
import styled from 'styled-components'

const Splash = (props) => (
            <div>
                <Head>
                    <title>Jacquelline.io</title>
                    <link rel="stylesheet" href="https://bootswatch.com/4/lux/bootstrap.min.css"/>
                </Head>
                <Header />
                {props.children}
            </div>
)

export default Splash