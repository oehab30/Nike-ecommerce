import React from 'react'
import PillNav from '@/components/common/PillNav';
import logo from '../../../public/home-pic/';
function Navbox() {
  return (
    <>


<PillNav
  logo={logo}
  logoAlt="Company Logo"
  items={[
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' }
  ]}
  activeHref="/"
  className="custom-nav"
  ease="power2.easeOut"
  baseColor="#000000"
  pillColor="#ffffff"
  hoveredPillTextColor="#ffffff"
  pillTextColor="#000000"
/>

</>
  )
}

export default Navbox