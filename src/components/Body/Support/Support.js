import supBanner from '../Support/Wallp1.png'
import './Support.css'
import { useState } from 'react'
const Support = () => {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    issue: ""
  })

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDetails({
      ...details,
      [name]: value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    // submit the form here
    console.log('Form submitted', details);
    setDetails({
      name: "",
      email: "",
      issue: ""
    })
  }
  return (
    <div className="supMain">
      <div className="supContainer">
        <p>how can we help you?</p>
        <div className="supBanner">
          <img alt='' src={supBanner} />
        </div>
        <input onChange={handleChange} placeholder='name' name='name' className="supName" type='text' />
        <input onChange={handleChange} placeholder='email' name='email' className="supEmail" type='email' />
        <textarea onChange={handleChange} placeholder='enter your message' name='issue' className="supMessage" type='text' />
        <button type='submit' onClick={onSubmit} className="supSubBtn" >submit</button>

      </div>

    </div>
  )

}
export default Support