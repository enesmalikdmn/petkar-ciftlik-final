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
                <title>Petkar Ile De France Damızlık Çiftliği</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta 
                    name="description" 
                    content="Petkar Ile De France Damızlık Çiftliği" 
                />
                <meta 
                    name="og:title" 
                    property="og:title" 
                    content="Petkar Ile De France Damızlık Çiftliği"
                ></meta>
                <meta 
                    name="twitter:card" 
                    content="Petkar Ile De France Damızlık Çiftliği"
                ></meta>
                <link rel="canonical" href="https://xn--petkarildefranceiftlii-f7b36k.com"></link>
            </Head>

            {children}

            {loader ? <Preloader /> : null}
        
            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </>
    );
}

export default Layout;