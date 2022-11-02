// import { Modal } from './Modal/Modal';
import { Load } from './Button/Button';
import { SearchForm } from './SearchBar/SearchBar';
import { Conteiner } from './App.styled';

export const App = () => {
  return (
    <Conteiner>
      <SearchForm />
      <Load />
      {/* <Modal /> */}
    </Conteiner>
  );
};
