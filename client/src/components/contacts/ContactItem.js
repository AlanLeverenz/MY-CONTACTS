import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/contactContext';
import dateFormat from 'dateformat';
const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);

  const { deleteContact, setCurrent, clearCurrent } = contactContext;

  const { _id, name, email, phone, type, company, note, date } = contact;

  const onDelete = () => {
    deleteContact(_id);
    clearCurrent();
  };

  const dateFormatted = dateFormat([date], 'mmmm dS, yyyy');

  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>
        {name}{' '}
        <span
          style={{ float: 'right' }}
          className={
            'badge ' +
            (type === 'professional' ? 'badge-success' : 'badge-primary')
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>

      <ul className='list'>
        {email && (
          <li>
            <i
              className='fas fa-envelope-open'
              style={{ color: 'dodgerblue' }}
            />{' '}
            {email}
          </li>
        )}
        {phone && (
          <li>
            <i className='fas fa-phone' style={{ color: 'limegreen' }} />{' '}
            {phone}
          </li>
        )}
        {company && (
          <li>
            <i className='fas fa-building' style={{ color: 'indianred' }} />{' '}
            {company}
          </li>
        )}
        {note && (
          <li>
            <i className='fas fa-comment-alt' style={{ color: 'darkorange' }} />{' '}
            {note}
          </li>
        )}
        {date && (
          <li>
            <i
              className='fas fa-calendar-day'
              style={{ color: 'darkorchid' }}
            />{' '}
            {dateFormatted}
          </li>
        )}
      </ul>
      <p>
        <button
          className='btn btn-dark btn-sm'
          onClick={() => setCurrent(contact)}
        >
          Edit
        </button>
        <button className='btn btn-danger btn-sm' onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
