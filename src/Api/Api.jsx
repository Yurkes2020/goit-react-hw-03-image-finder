import { Component } from 'react';
import { Gallery } from 'components/ImageGallery/ImageGallery';
// import axios from 'axios';

export class FetchArticlesWithQuery extends Component {
  state = {
    hits: [],
    error: null,
    status: 'idle',
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      this.setState({ status: 'pending' });
      fetch(
        `https://pixabay.com/api/?key=29907105-27da4e6e42fdff29794422632&q=${this.props.searchQuery}&image_type=photo&page=1&per_page=12`
      )
        .then(responce => {
          if (responce.ok) {
            return responce.json();
          }
          return Promise.reject(new Error('Не найдено таких картинок'));
        })
        .then(({ hits }) => this.setState({ hits, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  render() {
    if (this.state.status === 'idle') {
      return <p>Введите имя запроса</p>;
    }
    if (this.state.status === 'pending') {
      return <p>Loading...</p>;
    }
    if (this.state.status === 'rejected') {
      return <p>{this.state.error.messege}</p>;
    }
    if (this.state.status === 'resolved') {
      return <Gallery images={this.state.hits} />;
    }
  }
}
