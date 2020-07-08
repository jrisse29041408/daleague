import React from 'react';
import { Input } from 'semantic-ui-react';
import { useField } from 'react-form';

interface PasswordFieldProps {}

const validatePassword = () => {};

export const PasswordField = ({}: PasswordFieldProps) => {
  const {
    meta: { error, isTouched, isValidating },
    getInputProps,
  } = useField('password', { validate: validatePassword });

  return (
    <div>
      <Input
        fluid
        placeholder="Password"
        type="password"
        {...getInputProps()}
      />{' '}
      {isValidating ? (
        <em>Validating...</em>
      ) : isTouched && error ? (
        <em>{error}</em>
      ) : null}
    </div>
  );
};
