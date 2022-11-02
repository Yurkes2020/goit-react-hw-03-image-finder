import { Component } from 'react';
import { FcSearch } from 'react-icons/fc';
import { SearchBar, Form, Button, Field } from './SearchBar.styled';

export class SearchForm extends Component {
  render() {
    return (
      <SearchBar>
        <Form>
          <Button type="submit">
            <FcSearch />
          </Button>
          <Field
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </Form>
      </SearchBar>
    );
  }
}
