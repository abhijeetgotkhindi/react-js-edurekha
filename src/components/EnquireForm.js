import React from 'react';
import Header from './header';
// import {useNavigate} from "react-router";
const EnquiryForm = (props) => {
    // const navigate = useNavigate();
    function handleSubmit(event) {
        const form = document.querySelector("#formElement");
        event.preventDefault();
        var data = new FormData(form);
        let formObject = Object.fromEntries(data.entries());

        // Read the contents of the JSON file
        fetch("http://localhost:8001/enquiries",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(formObject)
          }).then((res)=>{
            alert('Saved successfully.')
             // navigate('/');
          }).catch((err)=>{
            console.log(err.message)
          })
    }
    return <>
        <div id="myDIV" className="header">
            <Header header="Enquiry Form" />
            <form id="formElement" className="enquiry-box" method="POST"  onSubmit={handleSubmit} >
                <div>
                    <input type="text" placeholder="Your name" name="name" required />
                </div>
                <div>
                    <input type="text" placeholder="Email" name="email" required />
                </div>
                <div>
                    <input type="text" placeholder="Course" name="course" value={props.data} readOnly={true} required />
                </div>
                <div>
                    <textarea placeholder="Your message" name="message" required />
                </div>
                <div>
                    <button type="submit"> Submit Enquiry </button>
                </div>
            </form>
        </div>
    </>
}
export default EnquiryForm;