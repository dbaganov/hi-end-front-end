import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import NotFoundPage from './NotFoundPage';

export default {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof NotFoundPage>;

const Template: ComponentStory<typeof NotFoundPage> = args => <NotFoundPage />;

export const Default = Template.bind({});
Default.args = {};
