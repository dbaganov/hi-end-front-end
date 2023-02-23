import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Header } from 'widgets/Header';
import { Sidebar } from 'widgets/Sidebar';
import { Content } from 'widgets/Content';
import { AppRouter } from 'app/providers/RouteProvider';
import Layout from './Layout';

export default {
    title: 'widgets/Layout',
    component: Layout,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = args => <Layout {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: (
        <Layout className="app">
            <Header />
            <Sidebar />
            <Content>
                <AppRouter />
            </Content>
        </Layout>
    )
};
