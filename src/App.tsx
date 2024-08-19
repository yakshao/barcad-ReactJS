import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'

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
        <Route path='/' element={<><BarC />  <Services /> </>} />
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

  return (<div className='pHeader'>
    <div className="pHeaderLogo">
      <img
        src='/logo.png' />
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

    <div className='flex'>
      <img
        src='/logo.png' />

    </div>
    <div className='stickyHeaderNav'>
      <div className='navLinks flex'>
        <div className='navLink'> <NavLink to={'/'}><a href=''>Home</a></NavLink></div>
        <div className='navLink'> <NavLink to={'/services'}><a href=''>Services</a></NavLink></div>
        <div className='navLink'> <NavLink to={'/services'}><a href=''>Portfolio</a></NavLink></div>
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
    <div className='footer'>
      <div data-aos='fade-up'  className='footerChild footerColor1 center'>
       <h3>Design . Build . Launch</h3>
       
       <h1>let's build
</h1>
        <h2>
        something awesome</h2>
      </div>
      <div className='footerChild footerColor2'>
        <h2>Design.Build.Launch</h2>
      </div>
    </div>
   
  )
}