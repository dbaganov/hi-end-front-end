import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import LangSwitcher from './LangSwitcher';

export default {
    title: 'widgets/LangSwitcher',
    component: LangSwitcher,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof LangSwitcher>;

const Template: ComponentStory<typeof LangSwitcher> = () => <LangSwitcher />;

export const Default = Template.bind({});
Default.args = {};
