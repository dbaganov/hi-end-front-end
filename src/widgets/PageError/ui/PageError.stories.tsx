import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PageError from './PageError';

export default {
    title: 'PageError',
    component: PageError,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof PageError>;

const Template: ComponentStory<typeof PageError> = args => (
    <PageError {...args} />
);

export const Default = Template.bind({});
Default.args = {};