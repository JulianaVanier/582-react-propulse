import React from 'react'
import ContactForm from './ContactForm'
import { Container } from 'react-bootstrap'
import Header from './Header'
import Footer from './Footer'

function ContactView() {
  return (
    <>
            <Header />

    <ContactForm />

    <Footer />
    </>
  )
}

export default ContactView