import React from 'react';

const SMSForm = () => {
    return (
        <form>
            <div>
                <label htmlFor="to">To:</label>
                <input type="tel" name="to" id="to" />
            </div>
            <div>
                <label htmlFor="body">Body:</label>
                <textarea name="body" id="body" />
            </div>
            <button type="submit">Send Message</button>
        </form>
    );
};

export default SMSForm;
