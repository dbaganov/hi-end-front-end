import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import Header from './Header';

export default {
    title: 'widgets/Header',
    component: Header,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = args => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [StoreDecorator({})];

export const LoggedIn = Template.bind({});
LoggedIn.args = {};
LoggedIn.decorators = [
    StoreDecorator({
        user: {
            authData: {
                username: 'test'
            }
        }
    })
];
