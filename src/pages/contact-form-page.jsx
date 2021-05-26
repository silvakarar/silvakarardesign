import React, { Component } from 'react'
import Form from '../components/forms/Form';


class ContactFormPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
        }
    }
    

    render() {
        return (
            <div>
                <Form />
            </div>
        )
    }
}

export default ContactFormPage
