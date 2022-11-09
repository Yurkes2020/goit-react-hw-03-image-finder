import { Component } from 'react';
import { Gallery } from 'components/ImageGallery/ImageGallery';
import { Oval } from 'react-loader-spinner';
// import axios from 'axios';

export class FetchArticlesWithQuery extends Component {
  state = {
    hits: [],
    error: null,
    status: 'idle',
  };
  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.searchQuery !== this.props.searchQuery ||
      prevProps.page !== this.props.page
    ) {
      this.setState({ status: 'pending' });
      fetch(
        `https://pixabay.com/api/?key=29907105-27da4e6e42fdff29794422632&q=${this.props.searchQuery}&image_type=photo&page=${this.props.page}&per_page=12`
      )
        .then(responce => {
          if (responce.ok) {
            return responce.json();
          }
          return Promise.reject(new Error('Не найдено таких картинок'));
        })
        .then(data => {
          if (data.totalHits === 0) {
            this.setState({ status: 'rejected' });
            return alert('Error');
          }
          this.setState(prevState => ({
            hits: [...prevState.hits, ...data.hits],
            status: 'resolved',
          }));
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
      // .finally(
      //   window.scrollTo({
      //     top: document.documentElement.scrollHeight,
      //     behavior: 'smooth',
      //   })
      // );
    }
  }

  render() {
    if (this.state.status === 'idle') {
      return <p style={{ textAlign: 'center' }}>Введите имя запроса</p>;
    }
    if (this.state.status === 'pending') {
      return (
        <Oval
          height={80}
          width={80}
          color="#4fa94d"
          wrapperStyle={{ margin: 'auto' }}
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#4fa94d"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      );
    }
    if (this.state.status === 'rejected') {
      return (
        <p style={{ textAlign: 'center' }}>
          По Вашему запросу ничего не найдено
        </p>
      );
    }
    if (this.state.status === 'resolved') {
      return <Gallery images={this.state.hits} modal={this.props.onClick} />;
    }
  }
}
