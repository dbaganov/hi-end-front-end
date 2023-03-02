import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import Modal from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = args => <Modal {...args} />;

export const Light = Template.bind({});
Light.args = {
    children:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
        'Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, ' +
        'eget aliquam nisl nisl eu ante. Nulla fa',
    isOpen: true
};

export const Dark = Template.bind({});
Dark.args = {
    children:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
        'Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, ' +
        'eget aliquam nisl nisl eu ante. Nulla fa',
    isOpen: true
};
Dark.decorators = [ThemeDecorator(Theme.Dark)];
