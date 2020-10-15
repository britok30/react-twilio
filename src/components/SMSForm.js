import React from 'react';

const SMSForm = () => {
    return (
        <div className="outer-container">
            <form>
                <div className="to">
                    <label htmlFor="to">To:</label>
                    <input type="tel" name="to" id="to" />
                </div>
                <div className="body">
                    <label htmlFor="body">Body:</label>
                    <textarea name="body" id="body" />
                </div>
                <button className="btn btn-outline-light" type="submit">
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default SMSForm;
