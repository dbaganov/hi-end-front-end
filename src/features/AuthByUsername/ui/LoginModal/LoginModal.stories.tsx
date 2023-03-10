import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import LoginModal from './LoginModal';

export default {
    title: 'features/LoginModal',
    component: LoginModal,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof LoginModal>;

const Template: ComponentStory<typeof LoginModal> = () => <LoginModal />;

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [
    StoreDecorator({
        loginModal: {
            isLoginModalOpened: true
        }
    })
];
