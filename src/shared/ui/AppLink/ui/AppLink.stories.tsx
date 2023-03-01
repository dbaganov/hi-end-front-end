import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import AppLink, { AppLinkTheme } from './AppLink';

export default {
    title: 'widgets/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = args => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    theme: AppLinkTheme.PRIMARY,
    children: 'Primary'
};
