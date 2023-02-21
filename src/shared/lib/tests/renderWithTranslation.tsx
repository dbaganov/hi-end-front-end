import { RenderOptions, render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import React from 'react';
import i18n from 'shared/config/i18n/i18nForTests';

export function renderWithTranslation(
    ui: React.ReactElement,
    options?: Omit<RenderOptions, 'queries'>
) {
    return render(<I18nextProvider i18n={i18n}>{ui}</I18nextProvider>, options);
}
