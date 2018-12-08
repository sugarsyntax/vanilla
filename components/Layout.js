import Head from 'next/head'
import Header from './Header'
import styled from 'styled-components'

const Layout = (props) => (
            <div>
                <Head>
                    <title>Jacquelline.io</title>
                    <link rel="stylesheet" href="https://bootswatch.com/4/lux/bootstrap.min.css"/>
                </Head>
                <Header />
                {props.children}
            </div>
)

export default Layout