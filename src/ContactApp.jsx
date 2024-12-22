import React, { useEffect, useState } from 'react'
import ContactList from './ContactList'
import ContactDetails from './ContactDetails'
import Axios from 'axios'
const ContactApp = () => {
 let [contacts,setContacts]  = useState([])

 useEffect(()=>{
  Axios.get('https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist')
  .then((resp)=>{  setContacts(resp.data) })
  .catch()
 },[]);
 
 return <>
          <div className="container">

          <pre>{JSON.stringify(contacts)}</pre>
            <div className="row">
                <div className="col-8">
                  {  /* Contact List */ }
                  <ContactList/>
                </div>
                <div className="col-4">
                   {  /* Contact Details */ }
                   <ContactDetails/>
                </div>
            </div>
          </div>

        </>
}

export default ContactApp