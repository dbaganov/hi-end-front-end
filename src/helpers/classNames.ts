type Modifier = Record<string, boolean | string>

export function classNames(cls: string, modifiers: Modifier, additional: string[]): string {
    return [
        cls,
        ...additional,
        ...Object.entries(modifiers)
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className)
    ].join(' ');
}
