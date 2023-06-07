import React from 'react'

function Social() {
  return (
    <div className="home__social">
        <a href="https://www.instagram.com/" className="home__social-icon" target='_blank'>
            <i class="uil uil-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/nelson-almendares-6199931b7?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BJ4MIHwq4Rty1t%2Bc%2Fyk95QQ%3D%3D" 
            className="home__social-icon" target='_blank'>
            <i class="uil uil-linkedin"></i>
        </a>
        <a href="https://github.com/NelsonAlmendares" className="home__social-icon" target='_blank'>
            <i class="uil uil-github"></i>
        </a>
    </div>
  )
}

export default Social