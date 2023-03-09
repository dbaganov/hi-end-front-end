import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import Text, { TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = args => <Text {...args} />;

export const OnlyTextLight = Template.bind({});
OnlyTextLight.args = {
    text: 'This is a text'
};

export const OnlyTitleLight = Template.bind({});
OnlyTitleLight.args = {
    title: 'This is a title'
};

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: 'This is a text'
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.Dark)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: 'This is a title'
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.Dark)];

export const OnlyTextLightError = Template.bind({});
OnlyTextLightError.args = {
    text: 'This is a error text',
    theme: TextTheme.Error
};

export const OnlyTitleLightError = Template.bind({});
OnlyTitleLightError.args = {
    title: 'This is a error title',
    theme: TextTheme.Error
};
