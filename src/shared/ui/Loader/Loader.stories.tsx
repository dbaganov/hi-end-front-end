import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Loader from './Loader';

export default {
    title: 'shared/Loader',
    component: Loader,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    parameters: {
        loki: {
            skip: true
        }
    }
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = () => <Loader />;

export const Default = Template.bind({});
Default.args = {};
