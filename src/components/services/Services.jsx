import React, { useState } from 'react'
import './services.css'

const Services = () => {
    const [toggleState, setToggleState] = useState(0);
    const  toggleTad = (index) => {
        setToggleState(index);
    }   
  return (
    <section className="services section" id='services'>
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What I offer</span>

        <div className="services__container container grid">
            {/* Servicio 1 */}
            <div className="service__content">
                <div>
                    <i className='uil uil-web-grid services__icon'></i>
                    <h3 className="services__title">UI-UX</h3>
                </div>
                <span className="service__button" onClick={() => {toggleTad(1)}}>View More <i class="uil uil-arrow-right services__button-icon"></i></span>
                <div className= {toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i class="uil uil-times services__button-icon services__modal-close" onClick={ () => {toggleTad(0)} }></i>
                        <h3 className="services__modal-title">UI-UX Designer</h3>
                        <p className="services__modal-description">I create minimalist user interface and experience. Facilitating over the time</p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className="services__modal-info">I develop user interfaces</p>
                            </li>
                            <li className="services__modal-service">
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className="services__modal-info">Web Page Development</p>
                            </li>
                            <li className="services__modal-service">
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className="services__modal-info">Create UX interface interactions</p>
                            </li>
                            <li className="services__modal-service">
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className="services__modal-info">Design and mokups of products for companies</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Servicio 2 */}
            <div className="service__content">
                <div>
                    <i className='uil uil-arrow services__icon'></i>
                    <h3 className="services__title">Developer</h3>
                </div>
                <span className="service__button" onClick={() => {toggleTad(2)}}>View More <i class="uil uil-arrow-right services__button-icon"></i></span>
                <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i class="uil uil-times services__button-icon services__modal-close" onClick={ () => {toggleTad(0)} }></i>
                        <h3 className="services__modal-title">Software Developer</h3>
                        <p className="services__modal-description">3 year from thecnical study and 1 year working as developer. I create web and desktop aplications.</p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className="services__modal-info">I develop MVC projets with login</p>
                            </li>
                            <li className="services__modal-service">
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className="services__modal-info">Usage API rest</p>
                            </li>
                            <li className="services__modal-service">
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className="services__modal-info">Create UX interface interactions</p>
                            </li>
                            <li className="services__modal-service">
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className="services__modal-info">Create database in Mysql and SQL Server</p>
                            </li>
                            <li className="services__modal-service">
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className="services__modal-info">Validate forms</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Servicio 3 */}
            <div className="service__content">
                <div>
                    <i className='uil uil-desktop services__icon'></i>
                    <h3 className="services__title">Maintenance</h3>
                </div>
                <span className="service__button" onClick={() => {toggleTad(3)}}>View More <i class="uil uil-arrow-right services__button-icon"></i></span>
                <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i class="uil uil-times services__button-icon services__modal-close" onClick={ () => {toggleTad(0)} }></i>
                        <h3 className="services__modal-title">Professional trainingn</h3>
                        <p className="services__modal-description">I took equipment maintenance and repair courses </p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className="services__modal-info">Configuration and installation of operating systems</p>
                            </li>
                            <li className="services__modal-service">
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className="services__modal-info">CCNA 1 Training</p>
                            </li>
                            <li className="services__modal-service">
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className="services__modal-info">Introduction to networks and IOT</p>
                            </li>
                            <li className="services__modal-service">
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className="services__modal-info">Structured wiring</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services