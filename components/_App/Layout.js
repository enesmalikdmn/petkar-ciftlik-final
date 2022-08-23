import React from 'react'
import Head from "next/head"
import GoTop from './GoTop'
import Preloader from './Preloader'

const Layout = ({ children }) => {
    // Preloader
    const [loader, setLoader] = React.useState(true);
    React.useEffect(() => {
        setTimeout(() => setLoader(false), 1500);
    }, [])
    
    return(
        <>
            <Head>
                <title>Prime Health Concept - Health Services in Turkey</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta 
                    name="description" 
                    content="Prime Health Concept - Health Services in Turkey" 
                />
                <meta 
                    name="og:title" 
                    property="og:title" 
                    content="Prime Health Concept - Health Services in Turkey"
                ></meta>
                <meta 
                    name="twitter:card" 
                    content="Prime Health Concept - Health Services in Turkey"
                ></meta>
                <link rel="canonical" href="https://primehealthconcept.com"></link>
            </Head>

            {children}

            {loader ? <Preloader /> : null}
        
            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </>
    );
}

export default Layout;