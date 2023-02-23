import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ThemeSwitcher from './ThemeSwitcher';

export default {
    title: 'ThemeSwitcher',
    component: ThemeSwitcher,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = () => <ThemeSwitcher />;

export const Default = Template.bind({});
Default.args = {};
