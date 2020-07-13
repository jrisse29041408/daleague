import React from 'react';
import { Input } from 'semantic-ui-react';

interface PasswordFieldProps {}

export const PasswordField = ({}: PasswordFieldProps) => {
  return (
    <div>
      <Input fluid placeholder="Password" type="password" />
    </div>
  );
};
