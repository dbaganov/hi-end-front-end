import { Story } from '@storybook/react';
import { LayoutProvider } from 'app/providers/LayoutProvider';

export const LayoutDecorator = (Story: Story) => (
    <LayoutProvider>
        <Story />
    </LayoutProvider>
);
