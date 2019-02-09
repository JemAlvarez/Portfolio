import React from 'react'
import { MdLocationOn } from 'react-icons/md'
import { FiSend } from 'react-icons/fi'

const ContactPage = () => (
    <div className="container contact">
        <h1 className="contact__heading">Heading</h1>
        <h3 className="contact__subheading">Subheading</h3>
        <form method="POST" name="contact" className="contact__form" data-netlify="true">
            <input
                name="name"
                autoComplete="new-password"
                type="text"
                className="contact__input"
                placeholder="John Doe"
                required
            />
            <input
                name="email"
                autoComplete="new-password"
                type="email"
                className="contact__input"
                placeholder="johndoe@email.com"
                required
            />
            <textarea
                name="message"
                autoComplete="new-password"
                maxLength="120"
                rows="4"
                placeholder="How can we work together?"
                required
            >
            </textarea>
            <div className="contact__buttons">
                <button
                    className="btn btn--location"
                    onClick={(e) => {
                        e.preventDefault()
                    }}
                >
                    <MdLocationOn />
                </button>
                <button
                    type="submit"
                    className="btn btn--submit"
                >
                    <FiSend />
                </button>
            </div>
        </form>
    </div>
)

export default ContactPage