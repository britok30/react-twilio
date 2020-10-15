import React, { Component } from 'react';
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
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name"></label>
                    <input
                        type="text"
                        id="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <button type="submit">Submit</button>
                </form>
                <p>{this.state.greeting}</p>
            </div>
        );
    }
}

export default App;
