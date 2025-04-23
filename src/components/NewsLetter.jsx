import React from 'react'
import './newsletter.css'

function NewsLetter() {

    const [fullName, setFullName] = React.useState('')
    const [email, setEmail] = React.useState('')

    function handleSubmit(event) {
        event.preventDefault()
        console.log('form submitted')
        console.log(email, fullName)
    }

    return (
        <form className="signup-form" onSubmit={handleSubmit}>
            <h2>Join Our Newsletter</h2>
            <div>
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name"
                    onChange={(event) => setFullName(event.target.value)} />
            </div>
            <div>
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email"
                    onChange={(event) => setEmail(event.target.value)} />
            </div>
            <button type="submit">Subscribe</button>
        </form>

    )
}

export default NewsLetter