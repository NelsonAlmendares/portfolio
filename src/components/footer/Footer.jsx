import React from 'react'
import './footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Nelson Almendares</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#projects" className="footer__link">Projects</a>
                    </li>
                    <li>
                        <a href="#services" className="footer__link">Services</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.instagram.com/" className="footer__social-icon" target='_blank'>
                        <i class="bx bxl-instagram footer__icon"></i>
                    </a>
                    <a href="https://www.instagram.com/"
                        className="footer__social-icon" target='_blank'>
                        <i class="bx bxl-facebook footer__icon"></i>
                    </a>
                    <a href="https://twitter.com/NelsonJose_14?t=B4-fTokZnZI1d6Q4nIjT-Q&s=09" className="footer__social-icon" target='_blank'>
                        <i class="bx bxl-twitter footer__icon"></i>
                    </a>
                </div>
                <span className="footer__copy">
                    &#169; NelsonAlmendaresDev. All Right Reserved
                </span>
            </div>
        </footer>
    )
}

export default Footer