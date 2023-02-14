import { classNames } from './classNames';

describe('classNames', () => {
    it('1st param only', () => {
        expect(classNames('class')).toBe('class');
    });

    it('with additional', () => {
        expect(classNames('class1', {}, ['class3'])).toBe('class1 class3');
    });

    it('with mods, with additional', () => {
        expect(classNames('class1', { class2: true }, ['class3'])).toBe(
            'class1 class2 class3'
        );
    });

    it('with false mods, with additional', () => {
        expect(
            classNames('class1', { class2: true, class4: false }, ['class3'])
        ).toBe('class1 class2 class3');
    });

    it('with undefined mods, with additional', () => {
        expect(
            classNames('class1', { class2: true, class4: undefined }, [
                'class3'
            ])
        ).toBe('class1 class2 class3');
    });
});
