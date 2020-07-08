import React from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { LoginButton } from './loginButton/loginButton';

export const Header = () => {
  return (
    <div>
      <Menu fixed="top">
        <Container>
          <a href="/">
            <Menu.Item header>Da League</Menu.Item>
          </a>
          <a href="/">
            <Menu.Item>Home</Menu.Item>
          </a>
          <a href="/about">
            <Menu.Item>About</Menu.Item>
          </a>
          <a href="/contact">
            <Menu.Item>Contant us</Menu.Item>
          </a>
          {/* TODO: add auth logic if !user exists then the button routes to /signup */}
          <Menu.Item position="right">
            <LoginButton />
          </Menu.Item>
        </Container>
      </Menu>
    </div>
  );
};
