import { Component } from 'react';
import PropTypes from 'prop-types';
import {
    BtnLabel,
    BtnSearch,
    Form,
    Header,
    InputSearh,
} from './Searchbar.styled';

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
            <Header onSubmit={this.handleSubmit}>
                <Form>
                    <BtnSearch type="submit">
                        🔍
                        <BtnLabel>Search</BtnLabel>
                    </BtnSearch>

                    <InputSearh
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={value}
                        onChange={this.handleChange}
                    />
                </Form>
            </Header>
        );
    }
}

export default Searchbar;
