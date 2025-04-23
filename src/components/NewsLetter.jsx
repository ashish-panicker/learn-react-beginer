import React from 'react'
import './newsletter.css'

function NewsLetter() {

    const [fullName, setFullName] = React.useState('Some name')
    const [email, setEmail] = React.useState('email@domain.com')

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
                <input type="text" id="name" name="name" value={fullName}
                    onChange={(event) => setFullName(event.target.value)} />
            </div>
            <div>
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" value={email}
                    onChange={(event) => setEmail(event.target.value)} />
            </div>
            <button type="submit">Subscribe</button>
        </form>

    )
}

export default NewsLetter