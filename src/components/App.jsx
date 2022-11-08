import { Component } from 'react';
// import { Modal } from './Modal/Modal';
import { Load } from './Button/Button';
import { SearchForm } from './SearchBar/SearchBar';
import { FetchArticlesWithQuery } from 'Api/Api';
import { Conteiner } from './App.styled';

export class App extends Component {
  state = {
    searchQuery: '',
  };

  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  render() {
    return (
      <Conteiner>
        <SearchForm onSubmit={this.handleFormSubmit} />
        <FetchArticlesWithQuery searchQuery={this.state.searchQuery} />
        <Load />/
      </Conteiner>
    );
  }
}
