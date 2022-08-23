import * as React from 'react'
import Hero from '../../../components/Hero'

export default function HeroHOC({ title, content }) {
    return (
        <>
            <Hero title={title} content={content} />
        </>
    )
}

