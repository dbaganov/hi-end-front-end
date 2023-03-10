import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import LoginForm from './LoginForm';

export default {
    title: 'features/ LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = args => (
    <LoginForm {...args} />
);

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [
    StoreDecorator({
        loginForm: {
            username: 'testUsername',
            password: 'testPassword'
        }
    })
];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [
    StoreDecorator({
        loginForm: {
            username: 'testUsername',
            password: 'testPassword',
            isLoading: true
        }
    })
];

export const Error = Template.bind({});
Error.args = {};
Error.decorators = [
    StoreDecorator({
        loginForm: {
            username: 'testUsername',
            password: 'testPassword',
            error: 'testError'
        }
    })
];
