import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input from './Input';

export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = args => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithLabel = Template.bind({});
WithLabel.args = {
    label: 'Label'
};

export const WithValue = Template.bind({});
WithValue.args = {
    value: 'Value'
};

export const WithLabelAndValue = Template.bind({});
WithLabelAndValue.args = {
    label: 'Label',
    value: 'Value'
};
