import React from 'react'
import "../Contact/contact.css"

const contact = () => {
  return (
    <div className='contact'>


      <div className="image">
        <img src="https://raw.githubusercontent.com/judygab/web-dev-projects/42c815099332e69edcef4593d6f593224b94ba40/personal-portfolio/src/assets/img/contact-img.svg" alt="" />
      </div>

      <div className="right">
        <h1>Get In Touch</h1>

        <form action="">
          <div className="name">
            <input type="text" placeholder='First Name' />
            <input type="text" placeholder='Last name' />
          </div>
          <div className="email">
            <input type="email" placeholder='Email' />
            <input type="text" placeholder='Phone No.' />
          </div>
          <div className="message">
            <textarea name="" placeholder='Message' id=""></textarea>
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default contact
