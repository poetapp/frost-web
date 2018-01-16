import * as React from 'react';
import { connect } from 'react-redux';
import { Input } from '../../Input/Input';
import { Checkbox } from '../../Checkbox/Checkbox';
import { Button } from '../../Button/Button';
import { Form } from '../../Form/Form';

interface SignInProps {
    onSubmit(event: any): void;
}

export const SignIn = (props: SignInProps) => 
    <Form onSubmit={props.onSubmit} legend={'Already Signed Up?'} textButton={'Login'}>
        <Input name={'email'} type={'email'} placeholder={'Email'} required />
        <Input name={'password'} type={'password'} placeholder={'Password'} required />
    </Form>

