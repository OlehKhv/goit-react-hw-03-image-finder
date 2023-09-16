import { Component } from 'react';
import PropTypes from 'prop-types';

export class Searchbar extends Component {
    static propTypes = { onSubmit: PropTypes.func.isRequired };

    state = {
        value: '',
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.value.trim());
        this.setState({ value: '' });
    };

    handleChange = ({ target: { value } }) => {
        this.setState({ value });
    };

    render() {
        const { value } = this.state;
        return (
            <header className="searchbar" onSubmit={this.handleSubmit}>
                <form className="form">
                    <button type="submit" className="button">
                        <span className="button-label">Search</span>
                    </button>

                    <input
                        className="input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={value}
                        onChange={this.handleChange}
                    />
                </form>
            </header>
        );
    }
}

export default Searchbar;
