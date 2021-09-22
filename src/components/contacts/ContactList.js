import Contact from './Contact';

const ContactList = ({ contacts, removeContact, updateContact }) => (
  <>
    {
      contacts.map( c => (
        // <Contact id={c.id} firstName={c.firstName} phone={c.phone} />
        // shorthand to "spread out" the array = ...
        <Contact {...c} removeContact={removeContact} updateContact={updateContact} />
      ))

    }


  </>
)

export default ContactList;