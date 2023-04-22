export class PhoneRegex {
    private static PHONE_REGEX: RegExp = /^\(\d{2}\)-\(0\d{9}\)$/;

    public static validatePhone(regex: string): boolean {
        return this.PHONE_REGEX.test(regex);
    }
}
