import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, NavLink, useLocation} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import EmblaCarousel from './EmblaCarousel'
import './css/base.css'
import './css/sandbox.css'
import './css/embla.css'
export function App() {

  const [showFixedNav, setShowFixedNav] = useState(false);


  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

  })


  function handleScroll() {
    window.scrollY > 70 ? setShowFixedNav(true) : setShowFixedNav(false);

  }




  return (

    <BrowserRouter>
      <StickyNav showFixedNav={showFixedNav} />
      <Header />

      <Routes>
        <Route path='/' element={<><BarC />  <Services /> <RecentWork /> </>} />
        <Route path='/services' element={<> < Services /> </>} />
        <Route path='/portfolio' element={<BarC />} />
        <Route path='/about' element={<BarC />} />
        <Route path='/contact' element={<BarC />} />
        <Route path='/career' element={<BarC />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  )
}

function BarC() {

  useEffect(() => {
    AOS.init();
  }, [])

  return <>

    <div data-aos='fade-up' className='video'>
      <video loop muted autoPlay width={'100%'}>
        <source
          src='/myv.mp4' />

      </video>
    </div>

  </>;
}

function Header() {
  const {pathname} = useLocation();
  useEffect(()=>{
    window.scrollTo(0, 0)
  }, [pathname])

  return (<div className='pHeader'>
    <div className="pHeaderLogo">
     <NavLink to='/'>
        <img
          src='/logo.png' />
     </NavLink>
    </div>
    <div className='pHeaderNav'>
      <div className='navLinks flex'>
        <div className='navLink'> <NavLink 
                        className={({ isActive, isPending }) => isActive ? 'current' : ''}
        to={'/'}><div><a href=''>Home</a></div></NavLink></div>


        <div className='navLink'> <NavLink 
                        className={({ isActive, isPending }) => isActive ? 'current' : ''}
        to={'/services'}><div><a href=''>Services</a></div></NavLink></div>
        <div className='navLink'> <NavLink 
        to={'/services'}><a href=''>Portfolio</a></NavLink></div>
        <div className='navLink'> <NavLink to={'/services'}><a href=''>About Us</a></NavLink></div>
        <div className='navLink'> <NavLink to={'/services'}><a href=''>Contact Us</a></NavLink></div>
        <div className='navLink'> <NavLink to={'/services'}><a href=''>Career</a></NavLink></div>

      </div>
    </div>
  </div>)
}

function StickyNav({ showFixedNav }: any) {

  return <div className={showFixedNav ? 'stickyNavAnimStart stickyNav' : 'stickyNavAnimEnd stickyNav'}>
 <NavLink to='/'>
    <div className='flex center'>
    
        <img
          src='/logo.png' />
    
    </div>
     </NavLink>

    <div className='stickyHeaderNav'>
      <div className='navLinks flex'>
      <div className='navLink'> <NavLink 
                        className={({ isActive, isPending }) => isActive ? 'current2' : ''}
        to={'/'}><div><a href=''>Home</a></div></NavLink></div>

        <div className='navLink'> <NavLink 
                        className={({ isActive, isPending }) => isActive ? 'current2' : ''}
        to={'/services'}><div><a href=''>Services</a></div></NavLink></div>
        <div className='navLink'> <NavLink 
        to={'/services'}><a href=''>Portfolio</a></NavLink></div>
        <div className='navLink'> <NavLink to={'/services'}><a href=''>About Us</a></NavLink></div>
        <div className='navLink'> <NavLink to={'/services'}><a href=''>Contact Us</a></NavLink></div>
        <div className='navLink'> <NavLink to={'/services'}><a href=''>Career</a></NavLink></div>

      </div>
    </div>
  </div>;
}

function Services() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <div data-aos='fade-up' className='services'>
        <div className='flex '>
          <h1>Services We Offer</h1>

        </div>

        <div data-aos='fade-up' className='cardContainer '>
          <div className="card" >
            <div className='cardImg'>
              <img
                src='/dgMarketing.png'
              />

            </div>
            <div  className='cardContent'>
              <h4>Digital Marketing</h4>
              <p>
                <b> Ready to grow your business?</b> Join the hundreds of companies who have benefited from our sales strategies. Our seasoned team knows what it takes to boost your sales.
              </p>
            </div>
          </div>

          <div data-aos='fade-up' className="card" >
            <div className='cardImg'>
              <img
                src='/webdevW.png'
              />

            </div>
            <div data-aos='fade-up' className='cardContent'>
              <h4>Web Development</h4>
              <p><b>We know how to convert visitors to customers.</b> We offer a comprehensive range of services including design, development, marketing, and SEO to drive more sales for your company.</p>
            </div>
            <div>


            </div>

          </div>

          <div  className="card" >
            <div className='cardImg'>
              <img
                src='/ecom.jpg'
              />

            </div>
            <div data-aos='fade-up' className='cardContent'>
              <h4>E-Commerce</h4>
              <p><b>Your website: Your silent salesperson.</b>
                Use the power of the internet to grow your business. Tell your brand story through your custom-build website, designed just for you by our expert developers.
              </p>
            </div>
          </div>


        </div>
        <div data-aos='fade-up' className='cardContainer '>
          <div className="card" >
            <div className='cardImg'>
              <img
                src='/dgMarketing.png'
              />

            </div>
            <div data-aos='fade-up' className='cardContent'>
              <h4>Branding</h4>
              <p>
                <b> Ready to grow your business?</b> Join the hundreds of companies who have benefited from our sales strategies. Our seasoned team knows what it takes to boost your sales.
              </p>
            </div>
          </div>

          <div data-aos='fade-up' className="card" >
            <div className='cardImg'>
              <img
                src='/webdevW.png'
              />

            </div>
            <div className='cardContent'>
              <h4>Video Animation</h4>
              <p><b>We know how to convert visitors to customers.</b> We offer a comprehensive range of services including design, development, marketing, and SEO to drive more sales for your company.</p>
            </div>
            <div>


            </div>

          </div>

          <div className="card" >
            <div className='cardImg'>
              <img
                src='/ecom.jpg'
              />

            </div>
            <div  className='cardContent'>
              <h4>UI/UX Design</h4>
              <p><b>Your website: Your silent salesperson.</b>
                Use the power of the internet to grow your business. Tell your brand story through your custom-build website, designed just for you by our expert developers.
              </p>
            </div>
          </div>
  


        </div>
      </div>

    </>
  )
}

function Footer(){
  useEffect(() => {
    AOS.init();

  }, [])

  return(
    <div className='footerM'>
      <div data-aos='fade-up'  className='footerChild footerColor1 center flexColumn'>
<div>
         <h3>Design . Build . Launch</h3>
         
         <h1>Let's Build
  </h1>
          <h3>
         Something Awesome</h3>
</div>

<div className='faIcons'>
              <div className='faChild'>
                <FontAwesomeIcon icon={faInstagram} />
              </div>
              <div className='faChild'>
                <FontAwesomeIcon icon={faTwitter} />
              </div>
              <div className='faChild'>
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
              <div className='faChild'>
                <FontAwesomeIcon icon={faFacebook} />
              </div>
            </div>

      </div>
      <div className='footerChild footerColor2'>
      <div className='footerGrid'>
      <div>
        <h6>Overview</h6>
      </div>
      <div> 
     <a href='#'>About Us </a>
      </div>
      <div> 
     <a href='#'>Services</a>
      </div>
      <div> 
     <a href='#'>Portfolio</a>
      </div>
      <div> 
     <a href='#'>Blog</a>
      </div>
      <div> 
     <a href='#'>Contact Us </a>
      </div>
      <div> 
     <a href='#'>Privacy policy </a>
      </div>
      <div> 
     <a href='#'>Terms and Conditions </a>
      </div>
      <div> 
     <a href='#'>Returns and refunds policy </a>
      </div>
      <div> 
     <a href='#'>Shipping policy</a>
      </div>
      <div> 
     <a href='#'>Terms and Conditions </a>
      </div>
    </div>

      <div className='footerGrid'>
      <div><h6>Web solutions</h6></div>
      <div> 
     <a href='#'>UI/UX Designs</a>
      </div>
      <div> 
     <a href='#'>Ecommerce Web</a>
      </div>
      <div> 
     <a href='#'>News Portal</a>
      </div>
      <div> 
     <a href='#'>Personal portfolio</a>
      </div>
      <div> 
     <a href='#'>LMS Portal</a>
      </div>
</div>
      
      <div className='footerGrid'>
      <div><h6>Digital Marketing</h6></div>
      <div> 
     <a href='#'>PPC</a>
      </div>
      <div> 
     <a href='#'>SEO</a>
      </div>
      <div> 
     <a href='#'>CRO</a>
      </div>
      <div> 
     <a href='#'>Logo Design</a>
      </div>
      <div> 
     <a href='#'>Social Media Marketing</a>
      </div>
      <div> 
     <a href='#'>Whatsapp Marketing</a>
      </div>
      <div> 
     <a href='#'>Email Marketing</a>
      </div>
      </div>
      </div>
    </div>
   
  )
}

function RecentWork(){
  const OPTIONS = {loop: true}
const SLIDE_COUNT = 4
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

useEffect(() => {
  AOS.init();

}, [])

  return(
<div data-aos='fade-up' className='recentWork'>
  <div className='flex center'>
    <h1> Recent Work</h1>
  </div>
 
    <div>
 
    <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>

</div>
  )
}

