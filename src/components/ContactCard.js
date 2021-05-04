import React from 'react'

function ContactCard() {
    return (
        <div>
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div id="contact-me-wrapper">
                            <h2>
                                <strong>Contact Me</strong>
                            </h2>
                            <div className="input-field col s6">
                                <i className="material-icons prefix">account_circle</i>
                                <input id="icon_prefix" type="text" className="validate" />
                                <label for="icon_prefix">Name</label>
                            </div>
                            <div className="input-field col s6">
                                <i className="material-icons prefix">phone</i>
                                <input id="icon_telephone" type="tel" className="validate" />
                                <label for="icon_telephone">Telephone</label>
                            </div>
                            <div className="input-field col s12">
                                <i className="material-icons prefix">mail</i>
                                <input id="icon_email" type="email" className="validate" />
                                <label for="icon_email">Email</label>
                            </div>
                            <div className="input-field col s12">
                                <i className="material-icons prefix">message</i>
                                <textarea id="textarea1" className="materialize-textarea"></textarea>
                                <label for="textarea1">Message</label>
                            </div>
                            <button id="contact-submit-btn" type="button" className="btn btn-info btn-lg">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactCard
