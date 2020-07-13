import React, { useState } from 'react';
import { useForm } from 'react-form';
import { BaseInputField } from '../../components/inputFields/baseInputField';
import { EmailField } from '../../components/inputFields/emailField';
import { PasswordField } from '../../components/inputFields/passwordField';
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Button, Form, Grid, Segment } from 'semantic-ui-react';

const CREATE_USER_MUTATION = gql`
  mutation createUser($input: ResgisterInput!) {
    register(input: $input) {
      id
      email
      username
    }
  }
`;

const SignUpForm = () => {
  const [data, setData] = useState({ username: '', email: '', password: '' });
  const [addUser] = useMutation(CREATE_USER_MUTATION);

  return (
    <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Form onSubmit=>
          <Segment stacked>
            <BaseInputField label="Username" placeHolder="UserName" />
            <EmailField />
            <PasswordField />
            <Button type="submit" active>
              Sign Up
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default SignUpForm;
