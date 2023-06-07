import React from 'react'

const Info = () => {
  return (
    <div className='about__info grid'>
        <div className="about__box">
            <i class='bx bx-award about__icon'></i>
            <h2 className='about__title'>Experience</h2>
            <span className="about__subtitle">1 year working as software developer</span>
        </div>
        <div className="about__box">
            <i class='bx bx-briefcase-alt about__icon' ></i>
            <h2 className='about__title'>Completed</h2>
            <span className="about__subtitle">5 projects</span>
        </div>
        <div className="about__box">
            <i class='bx bx-support about__icon' ></i>
            <h2 className='about__title'>Support</h2>
            <span className="about__subtitle">24/7</span>
        </div>
    </div>
  )
}

export default Info