import { Component } from 'react';
import { Modal } from './Modal/Modal';
import { Load } from './Button/Button';
import { SearchForm } from './SearchBar/SearchBar';
import { FetchArticlesWithQuery } from 'Api/Api';
import { Conteiner } from './App.styled';

export class App extends Component {
  state = {
    hits: [],
    searchQuery: '',
    showMore: false,
    imageLarge: '',
    tags: '',
    page: 1,
  };

  updateHits = data => {
    this.setState(prevState => ({
      hits: [...prevState.hits, ...data],
    }));
  };

  onClickButtonLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handleFormSubmit = searchQuery => {
    this.setState({
      searchQuery,
      // showMore: true,
      page: 1,
      hits: [],
    });
  };

  openModal = img => {
    this.setState({
      imageLarge: img.largeImageURL,
      tags: img.tags,
    });
  };

  onCloseModal = () => {
    this.setState({
      imageLarge: '',
      tags: '',
    });
  };

  render() {
    return (
      <Conteiner>
        <SearchForm onSubmit={this.handleFormSubmit} />
        <FetchArticlesWithQuery
          data={this.updateHits}
          hits={this.state.hits}
          searchQuery={this.state.searchQuery}
          page={this.state.page}
          onClick={this.openModal}
        />

        {this.state.hits.length > 0 && (
          <Load loadMore={this.onClickButtonLoadMore} />
        )}

        {this.state.imageLarge && (
          <Modal
            img={this.state.imageLarge}
            tag={this.state.tags}
            closeModal={this.onCloseModal}
          />
        )}
      </Conteiner>
    );
  }
}
