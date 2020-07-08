import React from 'react';
import { Input } from 'semantic-ui-react';
import { useField } from 'react-form';

interface EmailInputFieldProps {}

const validateEmail = () => {};

export const EmailField = ({}: EmailInputFieldProps) => {
  const {
    meta: { error, isTouched, isValidating },
    getInputProps,
  } = useField('email', { validate: validateEmail });

  return (
    <div>
      <Input fulid placeholder="Email" type="email" {...getInputProps()} />{' '}
      {isValidating ? (
        <em>Validating...</em>
      ) : isTouched && error ? (
        <em>{error}</em>
      ) : null}
    </div>
  );
};
