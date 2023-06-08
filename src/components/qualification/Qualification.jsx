import React, { useState } from 'react'
 import './qualification.css'
 
 function Qualification() {
    const [toggleState, setToggleState] = useState(1);
    const  toggleTad = (index) => {
        setToggleState(index);
    }
    return (
        <section className="qualification section" id="grid">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal Journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => {toggleTad(1)}}>
                        <i className="uil uil-graduation-cap qualification__icon"></i> Education
                    </div>
                    <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => {toggleTad(2)}}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Programmer</h3>
                                <span className="qualification__subtitle">Textufil S.A de C.V</span>

                                <div className="qualification__calendar">
                                    <i class="uil uil-calendar-alt"></i> 2022 (March to Octover)
                                </div>
                            </div>
                            <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">CCNA 1 Training</h3>
                                <span className="qualification__subtitle">Technical Institute Ricaldone</span>

                                <div className="qualification__calendar">
                                    <i class="uil uil-calendar-alt"></i> 2021
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Analist Programmer</h3>
                                <span className="qualification__subtitle">Technical Institute Ricaldone</span>

                                <div className="qualification__calendar">
                                    <i class="uil uil-calendar-alt"></i> 2021 (Social Service)
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>

                    <div  className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Software Engineering</h3>
                                <span className="qualification__subtitle">Don Bosco University</span>

                                <div className="qualification__calendar">
                                    <i class="uil uil-calendar-alt"></i> 2023 - Present
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Computer Maintenance</h3>
                                <span className="qualification__subtitle">Don Bosco University</span>

                                <div className="qualification__calendar">
                                    <i class="uil uil-calendar-alt"></i> 2022
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">High School</h3>
                                <span className="qualification__subtitle">Technical Institute Ricaldone</span>

                                <div className="qualification__calendar">
                                    <i class="uil uil-calendar-alt"></i> 2020 - 2022
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Basic School</h3>
                                <span className="qualification__subtitle">Domingo Savio College</span>

                                <div className="qualification__calendar">
                                    <i class="uil uil-calendar-alt"></i> 2011 - 2020
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>       
    )
 }
 
 export default Qualification