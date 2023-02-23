import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button, { ThemeButton } from './Button';

export default {
    title: 'widgets/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    theme: ThemeButton.PRIMARY,
    children: 'Primary'
};

export const Clear = Template.bind({});
Clear.args = {
    theme: ThemeButton.CLEAR,
    children: 'Clear'
};

export const Outline = Template.bind({});
Outline.args = {
    theme: ThemeButton.OUTLINE,
    children: 'Outline'
};
