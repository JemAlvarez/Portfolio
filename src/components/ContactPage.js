import React from 'react'
import { MdLocationOn } from 'react-icons/md'
import { FiSend } from 'react-icons/fi'
import MapModal from './MapModal'

class ContactPage extends React.Component {
    state = {
        isOpen: false
    }
    onRequestClose = () => {
        this.setState(() => ({ isOpen: false }))
        document.querySelector('#app').setAttribute("style", "position: static")
    }
    onAfterOpen = () => {
        document.querySelector('#app').setAttribute("style", "position: fixed")
    }
    render() {
        return (
            <div className="container contact">
                <h1 className="contact__heading">Heading</h1>
                <h3 className="contact__subheading">Subheading</h3>
                <form name="contact" className="contact__form" action="https://formsubmit.io/send/9f3d1974-740f-46c3-b3cb-376ce3e42feb">
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
                                this.setState(() => ({ isOpen: true }))
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
                <MapModal 
                    isOpen={this.state.isOpen} 
                    onAfterOpen={this.onAfterOpen} 
                    onRequestClose={this.onRequestClose} 
                />
            </div>
        )
    }
}

export default ContactPage