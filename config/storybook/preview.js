import { addDecorator } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/decorators/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider';
import { RouteDecorator } from '../../src/shared/config/storybook/decorators/RouteDecorator';
import { I18nDecorator } from '../../src/shared/config/storybook/decorators/I18nDecorator';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    }
};

export const globalTypes = {
    locale: {
        name: 'Locale',
        description: 'Internationalization locale',
        toolbar: {
            icon: 'globe',
            items: [
                { value: 'en', title: 'English' },
                { value: 'fi', title: 'Finnish' }
            ],
            showName: true
        }
    }
};

addDecorator(RouteDecorator);
addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.Light));
addDecorator(I18nDecorator);
