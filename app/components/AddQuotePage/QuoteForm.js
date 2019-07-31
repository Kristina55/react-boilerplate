/**
 * QuoteForm
 */

import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: 400px;
  padding: 5px;
  font-size: 1.2rem;
  color: #333;
  border: 1px solid #333;
  &:focus {
    outline: none !important;
    border: 1px solid #f8c246;
    box-shadow: 0 0 4px #f8c246;
  }
`;

const Button = styled.button`
  background-color: #bbbbbb;
  margin: 22px;
  padding: 2px 19px;
  font-size: 20px;
  color: white;
  border-radius: 5px;
  border-color: #bbbbbb;
  outline: none;
  box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
export default function QuoteForm(props) {
  const [value, setValue] = useState('');
  const { manageAdding } = props;
  const inputEl = useRef(null);

  useEffect(() => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  }, []);

  const handleChange = e => {
    setValue(e.target.value);
  };

  // on submit pass the input value up to the store
  const handleSubmit = e => {
    e.preventDefault();
    manageAdding(value);
    setValue('');
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Input name="quote" onChange={handleChange} value={value} ref={inputEl} />
      <Button>Add Quote</Button>
    </Form>
  );
}

QuoteForm.propTypes = {
  manageAdding: PropTypes.func,
};
