import Head from 'next/head'
import Header from '../pages/Header'
import Title from './Title'
import styled from 'styled-components'

const Layout = () => (
            <div>
                <Head>
                    <title>Jacquelline.io</title>
                    <link rel="stylesheet" href="https://bootswatch.com/4/lux/bootstrap.min.css"/>
                </Head>
                <Header />
                <Title />
                {/* {props.children} */}
            </div>
)

export default Layout