export function getLocalStorageItem<T>(key: string): T | null {
    const item = localStorage.getItem(key);
    if (item) {
        return JSON.parse(item);
    }
    return null;
}

export function setLocalStorageItem<T>(key: string, value: T): void {
    if (!value) return;
    if (typeof value === 'object' && Object.keys(value).length === 0) return;
    localStorage.setItem(key, JSON.stringify(value));
}

export function removeLocalStorageItem(key: string): void {
    localStorage.removeItem(key);
}
