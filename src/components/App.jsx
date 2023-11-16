import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import './App.css';
import AppBar from './AppBar/AppBar';
const App = () => {
  return (
    <div className="Container">
      <AppBar />
      <h1 className="Title">Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
