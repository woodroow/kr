import React from 'react';
import Head from 'next/head';
import {
  Button, Form, FormGroup, Label, Input, Alert
} from 'reactstrap';
import Router from 'next/router';
import LayoutAuth from '../components/layouts/LayoutAuth';
import favicon from '../assets/favicon.ico';
import 'bootstrap/dist/css/bootstrap.min.css';


class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '', password: '', alertVisible: false, alertText: ''
    };

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeEmail(event) {
    this.setState({ email: event.target.value });
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    const { email, password } = this.state;
    if (email === '' || password === '') {
      this.setState({ alertVisible: true, alertText: 'Заполнените все поля!' });
    } else {
      Router.push('/main');
    }
    // alert('A name was submitted: ', email, password);
    event.preventDefault();
  }

  render() {
    const {
      email, password, alertVisible, alertText
    } = this.state;
    return (
      <div>
        <Head>
          <link rel='shortcut icon' type='image/x-icon' href={favicon} />
          <title>Курсовая работа</title>
        </Head>
        <LayoutAuth>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for='exampleEmail'>Email</Label>
              <Input type='email' name='email' value={email} onChange={this.handleChangeEmail} placeholder='Введите email' />
            </FormGroup>
            <FormGroup>
              <Label for='examplePassword'>Password</Label>
              <Input type='password' name='password' id='examplePassword' value={password} onChange={this.handleChangePassword} placeholder='Введите пароль' />
            </FormGroup>
            <FormGroup>
              <Button block onClick={this.checkAuth}>Войти</Button>
            </FormGroup>
          </Form>
          <Alert color='danger' isOpen={alertVisible}>
            {alertText}
          </Alert>
        </LayoutAuth>
      </div>
    );
  }
}

export default Auth;
