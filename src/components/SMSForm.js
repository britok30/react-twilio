import React, { useState } from 'react';
import axios from 'axios';

const SMSForm = () => {
    const [to, setTo] = useState('');
    const [body, setBody] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState(false);

    const handleToChange = (e) => {
        setTo(e.target.value);
    };

    const handleBodyChange = (e) => {
        setBody(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitting(true);

        axios
            .post('/user', {
                to: to,
                body: body,
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <div className="outer-container">
            <div className="inner-container">
                <form onSubmit={handleSubmit}>
                    <div className="to">
                        <input
                            className="to-text"
                            type="tel"
                            name="to"
                            id="to"
                            value={to}
                            onChange={handleToChange}
                        />
                    </div>
                    <div className="body mt-4">
                        <textarea
                            className="body-text"
                            name="body"
                            id="body"
                            value={body}
                            onChange={handleBodyChange}
                        />
                    </div>
                    <button
                        className="btn btn-outline-light send mt-4"
                        type="submit"
                        disabled={submitting}
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SMSForm;
