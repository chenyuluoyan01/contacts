import React, {Component} from 'react'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class ListContacts extends Component {
static propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired
}

state = {
  query:''
}

updateQuery = (query) => {
this.setState({ query: query.trim() })
}

  render() {
    let showingContacts 
    if (this.state)


    return (
      <div className="list-contacts">
      {JSON.stringify(this.state)}
      <div className="list-contacts-top">
      <input type="text" className="search-contacts"
      placeholder="Search contacts" 
      value = {this.state.query}
      onChange={(event) => this.updateQuery(event.target.value)}
      />
      </div>

      

      <ol className='contact-list'>
      {this.props.contacts.map(contact =>(
        <li key={contact.id} className='contact-list-item'>
          <div className="contact-avatar" style={{backgroundImage:`url(${contact.avatarURL})`}}></div>
              <div className='contact-details'>
                <p>{contact.name}</p>
                <p>{contact.email}</p>
              </div>
              <button onClick={()=>this.props.onDeleteContact(contact)} className='contact-remove'>
                Remove
              </button>
        </li>
      ))}

      </ol>
      </div>
    )
  }
}



export default ListContacts