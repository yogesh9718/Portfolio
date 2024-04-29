import React, { useState } from 'react'
import './Sidebar1.css'
import "boxicons"
import logo from '../Assets/IMG_20230313_184151_059.jpg'
import logo1 from '../Assets/Screenshot 2023-10-04 150807.png'
function Sidebar1() {

  const [isOpen, setIsopen] = useState(false)
  const [data,setData]= useState({
            name:"",
            email:"",
            number:"",
            note:""
  })
  function navbar() {
    setIsopen(!isOpen)
  }
  function datafetch(e){
      e.preventDefault()
      console.log(data);
      
  }


  return (
    <div className='nav-bg'>
      <div className='sidenav-main'>
        <div className='navbar'>
          <a href='#'>Porfolio</a>
          <button id='hamburger' onClick={navbar} className="hamburger"><box-icon name='menu'></box-icon></button>
        </div>
        <div className={isOpen ? "isOpenMenu" : "navbar1"}>
          <a href='#'>Home</a>
          <a href='#'>About</a>
          <a href='#'>Project</a>
          <a href='#'>Skills</a>
          <a href='#'>Project</a>
          <a href='#'>Contact</a>
        </div>
      </div>
      <div className='sidenav-main1'>
        <div className='sidebar'>
          <div className='sidebar-item'>

            <h3>Hello, it's Me</h3>
            <h1>Yogesh Kumar</h1>
            <h3>And i'm a <b>Web Developer</b></h3>
            <p>I'm web Developer with extensive experience for 6 months.<br />
              expertise is to create and design website, Frontend design , Backend , and many more ....
            </p>
          </div>
          <div className='sidebar-item1'>
            <a href='#'><box-icon name='facebook' className="face" type='logo' ></box-icon></a>
            <a href='https://www.instagram.com/yash_rajput989'><box-icon name='instagram' type='logo' ></box-icon></a>
            <a href=' https://wa.me/9718446654'><box-icon name='whatsapp' type='logo' ></box-icon></a>
          </div>
        </div>
        <div className='sidebar1'>
          <div className='dp'>
            <img className='dp-img' src={logo} />
          </div>

        </div>
      </div>
      <div className='sidenav-main1'>
        <div className='sidebar3'>
          <div className='dp'>
            <img className='dp-img' src={logo1} />
          </div>

        </div>
        <div className='sidebar4'>
          <div className='sidebar-item'>

            <h1>About Me</h1>
            <h2>Full Stack Developer</h2>
            <p>I am skilled web desinger with over 3 years of experience in the industry. My passion lies in creating captivating
              website designs and implementing them throught frontend developement .<br />
              I take pride in staying up-to-date with  current design trends and leveraging my creativty to produce visually appealing and user-friendly websites.
            </p>
          </div>
          <div className='sidebar-item2'>
            <a href='#'><box name='btn-box' type='logo' >More About Me</box></a>
          </div>
        </div>

      </div>
      <div className='sidenav-main'>
        <h1>My Projects</h1>
      </div>
      <div className='sidenav-main'>
        <div className='footer'>
          <div className='service'>
            <h2>Ecommerce website</h2>
            <p>
              <b>Link:</b>  <a href='https://website-virid-eight-66.vercel.app/'>https://website-virid-eight-66.vercel.app/</a>
            </p>
          </div>
        </div>
        <div className='footer'>
          <div className='service'>
            <h2>Youtube Clone</h2>
            <p>
              hihihihihihih
            </p>
          </div>
        </div>
      </div>
      <div className='sidenav-main'>
        <h1>My Skills</h1>
      </div>
      <div className='sidenav-main'>
        <div className='footer'>
          <div className='service'>
            <h2>HTML</h2>
            <h2>CSS</h2>
            <h2>Javascript</h2>
            <h2>C , C++</h2>
          </div>
        </div>
        <div className='footer'>
          <div className='service'>
            <h2>React</h2>
            <h2>Express</h2>
            <h2>Node.js</h2>
            <h2>Mongodb</h2>
          </div>
        </div>
      </div>
      <div className='sidenav-main'>
        <h1>Enquiry Page</h1>
      </div>
      <div className='sidenav-main'>
        <div className='footer'>
          <div className='service'>
            <p>
              <b>Welcome</b> to our enquiry page! As a seasoned web developer, I'm here to assist you with any questions or concerns you may have regarding our services or projects. Whether you're curious about our web development process, need clarification on specific technical aspects, or have inquiries about ongoing projects, I'm here to provide you with prompt and knowledgeable support. Feel free to reach out to me via this enquiry form, and I'll get back to you as soon as possible. Your satisfaction and understanding are paramount to us, and I'm committed to ensuring that your experience with our web development services is seamless and satisfying. Thank you for considering us for your web development needs, and I look forward to assisting you!
            </p>
          </div>
        </div>
        <div className='footer'>
          <div className='service'>
            <form onSubmit={datafetch}>
              <h2>   <label>Name : </label>
                <input type='text' onChange={(e)=>{setData({...data,name:e.target.value})}} name="name" value={data.name} placeholder='Name' /></h2>
              <h2>   <label>Email : </label>
                <input type='email' onChange={(e)=>{setData({...data,email:e.target.value})}} name="email" value={data.email} placeholder='email'  /></h2>
              <h2>
                <label>Contact No. : </label>
                <input type='text' onChange={(e)=>{setData({...data,number:e.target.value})}} name="number" value={data.number} placeholder='number' /> 
              </h2>
              <h2>
                <label>Note : </label>
                <input type='textarea' onChange={(e)=>{setData({...data,note:e.target.value})}} name="note" value={data.note}  placeholder='write as your enquiry' />
              </h2>
              <button type='submit'> Submit</button>
            </form>
          </div>

        </div>

      </div>
      {/* <div className='sidenav-main'>
         <div className='sidebar'>
        </div>
        <div className='sidebar1'>
        </div>   
        </div> */}
    </div>
  )
}

export default Sidebar1