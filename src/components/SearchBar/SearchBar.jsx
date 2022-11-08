import { Component } from 'react';
import { FcSearch } from 'react-icons/fc';
import { SearchBar, Form, Button, Field } from './SearchBar.styled';

export class SearchForm extends Component {
  state = {
    searchQuery: '',
  };

  handleSearchChange = event => {
    this.setState({ searchQuery: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.searchQuery.trim() === '') {
      return;
    }
    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };

  render() {
    return (
      <SearchBar>
        <Form onSubmit={this.handleSubmit}>
          <Button type="submit">
            <FcSearch />
          </Button>
          <Field
            onChange={this.handleSearchChange}
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      </SearchBar>
    );
  }
}
