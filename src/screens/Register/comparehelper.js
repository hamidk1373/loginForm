export const NameValidation = (fieldName, fieldValue) => {
    if (fieldValue.trim() === '') {
        return `${fieldName} is required`;
    }
    if (/[^a-zA-Z -]/.test(fieldValue)) {
        return 'Invalid characters';
    }
    if (fieldValue.trim().length < 3) {
        return `${fieldName} needs to be at least three characters`;
    }

};

export const EmailValidation = email => {
    if (
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
            email,
        )
    ) {
        return null;
    }
    if (email.trim() === '') {
        return 'Email is required';
    }
    return 'Please enter a valid email';
};

export const AgeValidation = age => {
    if (!age) {
        return 'Age is required';
    }
    if (age < 18) {
        return 'Age must be at least 18';
    }
    if (age > 99) {
        return 'Age must be under 99';
    }
    return null;
};