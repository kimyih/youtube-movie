import React from 'react'

import { HelmetProvider, Helmet } from 'react-helmet-async'

import Header from './Header'
import Footer from './Footer'
import Search from './Search'
import ScrollTo from '../../utils/scrollTo'

const Main = (props) => {
    return (
        <HelmetProvider>
            <ScrollTo />
            <Helmet
                titleTemplate="%s | 2arth Youtube"
                defaultTitle="2arth Youtube"
                defer={false}
            >
                {props.title && <title>{props.title}</title>}
                <meta name="description" content={props.description} />
            </Helmet>

            <Header />
            <main id='main' role='main'>
                <Search />
                {props.children}
            </main>
            <Footer />
        </HelmetProvider >

    )
}

export default Main
