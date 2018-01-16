import * as React from 'react';
import { Input } from '../../../atoms/Input/Input';
import { Button } from '../../../atoms/Button/Button';
import { Checkbox } from '../../../molecules/Checkbox/Checkbox';
import { Form } from '../../../templates/Form/Form';

interface SignInProps {
    onSubmit(event: any): void;
}

export const SignIn = (props: SignInProps) => 
    <Form onSubmit={props.onSubmit} legend={'Already Signed Up?'} textButton={'Login'}>
        <Input name={'email'} type={'email'} placeholder={'Email'} required />
        <Input name={'password'} type={'password'} placeholder={'Password'} required />
    </Form>

