/**
 * <h1>Data Generator Helper</h1>
 * >Data Generator Helper is handle generating data to use it in test cases in playwright
 * @version : 1.0
 */

const { faker } = require('@faker-js/faker');

/**
 * Function to Generate Random full Name.
 * 
 */
export function randomName() {
    return faker.person.fullName();
}

/**
 * Function to Generate numer with specific length.
 * 
 * @param {numberOfDigits} length of random number
 */
export function randomNumber(numberOfDigits) {
    return faker.string.numeric(numberOfDigits);
}

/**
 * Function to Generate random integer between two Integers.
 * 
 * @param {lowerBound} lower bound integer.
 * @param {upperBound} upper bound integer.
 */
export function randomIntegerBetween(lowerBound, upperBound) {
    return faker.number.int({ min: lowerBound, max: upperBound });
}

/**
 * Function to Generate random phone number.
 * 
 */
export function randomPhoneNumber() {
    const prefix = faker.helpers.arrayElement(['05', '018', '019']);
    return prefix + this.randomNumber(8);
}

/**
 * Function to Generate random email.
 * 
 */
export function randomEmail() {
    return faker.internet.email();
}

/**
 * Function to Generate random password.
 * 
 */
export function randomPassword() {
    return `K@${this.randomNumber(6)}`;
}


/**
 * Function to Generate random Egyptian National ID by send its age.
 * 
 * @param {age} the age of person (ex. 35).
 */
export function randomEGYNationalId(age) {
    const currentYear = new Date().getFullYear();
    const birthYear = currentYear - age;
    const birthMonth = this.randomIntegerBetween(1, 12).toString().padStart(2, '0');
    const birthDay = this.randomIntegerBetween(1, 28).toString().padStart(2, '0');
    const yearIdentifier = birthYear >= 2000 ? 3 : 2;

    const randomDigits = this.randomNumber(3) + faker.string.numeric(2);
    return `${yearIdentifier}${birthYear % 100}${birthMonth}${birthDay}01${randomDigits}`;
}

/**
 * Function to Generate Data from Egyptian National and save it on Json Object.
 * 
 * @param {nationalId} the person national ID (ex. '29009260198090').
 */
export function extractDataFromEGYNid(nationalId) {
    if (nationalId.length !== 14) {
        throw new Error('National ID is not 14 digits');
    }

    const yearIdentifier = parseInt(nationalId.substring(0, 1), 10);
    const birthYear = yearIdentifier === 2
        ? 1900 + parseInt(nationalId.substring(1, 3), 10)
        : 2000 + parseInt(nationalId.substring(1, 3), 10);
    const birthMonth = parseInt(nationalId.substring(3, 5), 10);
    const birthDay = parseInt(nationalId.substring(5, 7), 10);
    const genderIdentifier = parseInt(nationalId.substring(12, 13), 10);
    const gender = genderIdentifier % 2 === 0 ? 'female' : 'male';

    return {
        Year: birthYear,
        Month: birthMonth,
        Day: birthDay,
        Gender: gender,
    };
}
