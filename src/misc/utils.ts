export const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

export const cn = (...classNames: (string | {})[]) => classNames.reduce((result, current) => {
    if (!current) return result;

    if (typeof current === 'string') return `${result} ${current}`;

    return Object.entries(current).reduce((r, [key, value]) => value ? `${r} ${key}` : r, '');
}, '') as string;
