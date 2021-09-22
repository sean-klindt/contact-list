import { useState } from 'react';
import ContactList from './components/contacts/ContactList';
import ContactForm from './components/contacts/ContactForm';

const App = ({}) => {
  const [contacts, setContacts] = useState ([
    { id: 1, firstName: "Jenny", phone: "867-5309"},
    { id: 2, firstName: "Venkman", phone: "1-804-4612"},
    { id: 3, firstName: "Hercules", phone: "1-800-ixii"},
  ])

  const getId = () => {
    // helper function since we aren't using a db
    return Math.floor((1 + Math.random()) * 10000)
    .toString(16)
    .substring(1);
  }

  const addContact = (incomingContact) => {
    // only doing this becuase we don't have a db
    let newContact = { id: getId(), ...incomingContact}
    // add to the list
    setContacts([...contacts, newContact])
  }

  const removeContact = (id) => {
    setContacts( contacts.filter( c => c.id !== id ))
  }

  const updateContact = (id, incomingContact) => {
    const updatedContacts = contacts.map( c => {
      if (c.id === id) {
        return incomingContact
      }
      return c
    })
    setContacts(updatedContacts)
  }

  return(
    <>
      <ContactForm addContact={addContact} />
      <ContactList 
        contacts={contacts} 
        removeContact={removeContact} 
        updateContact={updateContact} 
        />

    </>
  )
}

export default App;
