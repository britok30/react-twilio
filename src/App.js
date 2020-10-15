import React, { Component } from 'react';
import SMSForm from './components/SMSForm';
import axios from 'axios';

class App extends Component {
    state = {
        name: '',
        greeting: '',
    };

    handleChange = (e) => {
        this.setState({ name: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        axios
            .get(`/api/greeting?name=${encodeURIComponent(this.state.name)}`)
            .then((state) => {
                this.setState(state);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    render() {
        return (
            <div className="App">
                <SMSForm />
            </div>
        );
    }
}

export default App;
