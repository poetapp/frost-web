import * as React from 'react';
import { connect } from 'react-redux';
import { Input } from '../../Input/Input';
import { Checkbox } from '../../Checkbox/Checkbox';
import { Button } from '../../Button/Button';
import { Form } from '../../Form/Form';

interface SignUpProps {
    onSubmit(event: any): void;
}

export const SignUp = (props: SignUpProps) => 
    <Form onSubmit={props.onSubmit} legend={'Sign Up'} textButton={'Sign Up'}>
        <Input name={'email'} type={'email'} placeholder={'Email'} required />
        <Input name={'password'} type={'password'} placeholder={'Password'} required />
        <Input name={'re-password'} type={'password'} placeholder={'Password'} required />
        <Checkbox name={'testnet'} text={'I understand that Frost App is in beta and in testnet'} required />
    </Form>

