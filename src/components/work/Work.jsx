import React from 'react'
import Works from './Works'
import './work.css'

const Work = () => {
  return (
    <section className="work section" id="portfolio">
        <h2 className="section__title">My Personal Works</h2>
        <span className="section__subtitle">All my applications</span>
    
        <Works />
    </section>
  )
}

export default Work