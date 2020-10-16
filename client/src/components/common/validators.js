export const required = value => value ? undefined : '! Required';

export const maxTextLength = max=> value =>
    value && value.length > max ? `! Must be ${max} characters or less` : undefined;

export const notEmail = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? '! Invalid email address'
        : undefined;
