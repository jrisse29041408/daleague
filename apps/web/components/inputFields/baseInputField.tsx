import React from 'react';
import { Input } from 'semantic-ui-react';
import { useField } from 'react-form';

interface baseInputFieldProps {
  placeHolder: string;
  label: string;
}

export const BaseInputField = ({ placeHolder, label }: baseInputFieldProps) => {
  const {
    meta: { error, isTouched },
    getInputProps,
  } = useField(label);

  return (
    <div>
      <Input fluid placeholder={placeHolder} text="text" {...getInputProps()} />{' '}
      {isTouched && error ? <em>{error}</em> : null}
    </div>
  );
};
