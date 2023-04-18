 import supBanner from '../Support/Wallp1.png'
 import './Support.css'
//  import { useState } from 'react'
const Support =()=>{
//     const [ details , setDetails]=useState({
//         name:"",
//         email:"",
//         issue:""
//     })

    // const handleChange =(e)=>{
    //     const name =e.target.name;
    //     const value=e.target.value;
    //     setDetails(()=>{

    //     })

    // }
    return (
        <div className="supMain">
            <div className="supContainer">
                <p>how can we help you?</p>
                <div className="supBanner">
                    <img alt=''  src={supBanner}/>
                </div>
                <input  placeholder='name'name='name' className="supName" type='text'/>
                <input  placeholder='email' name='email' className="supEmail" type='email'/>
                <textarea  placeholder='enter your message' name='issue' className="supMessage" type='text'/>
                <button   className="supSubBtn" >submit</button>

            </div>

        </div>
    )

}
export default Support