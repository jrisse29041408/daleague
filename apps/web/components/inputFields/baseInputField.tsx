import React from 'react';
import { Input } from 'semantic-ui-react';
import { useField } from 'react-form';

interface baseInputFieldProps {
  placeHolder: string;
  label: string;
}

export const BaseInputField = ({ placeHolder }: baseInputFieldProps) => {
  return (
    <div>
      <Input fluid placeholder={placeHolder} text="text" />
    </div>
  );
};
