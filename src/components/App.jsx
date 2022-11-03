import React, { Component } from 'react';
// import { Modal } from './Modal/Modal';
import { Load } from './Button/Button';
import { SearchForm } from './SearchBar/SearchBar';
import { Gallery } from './ImageGallery/ImageGallery';
import { fetchArticlesWithQuery } from 'Api/Api';
import { Conteiner } from './App.styled';

export class App extends Component {
  state = {
    articles: [],
    isLoading: false,
    error: null,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });

    try {
      const articles = fetchArticlesWithQuery();
      this.setState({ articles });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    return (
      <Conteiner>
        <SearchForm />
        <Gallery />
        <Load />
        {/* <Modal /> */}
      </Conteiner>
    );
  }
}
