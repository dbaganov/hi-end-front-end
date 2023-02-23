import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AppRouter } from 'app/providers/RouteProvider';
import { Layout } from 'widgets/Layout';
import Content from './Content';

export default {
    title: 'Content',
    component: Content,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Content>;

const Template: ComponentStory<typeof Content> = args => (
    <Layout>
        <Content {...args}>
            <AppRouter />
        </Content>
    </Layout>
);

export const Default = Template.bind({});
Default.args = {
    children: <AppRouter />
};
