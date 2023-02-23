import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Layout } from 'widgets/Layout';
import Sidebar from './Sidebar';

export default {
    title: 'Sidebar',
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = args => (
    <Layout>
        <Sidebar {...args} />
    </Layout>
);

export const Default = Template.bind({});
Default.args = {};
