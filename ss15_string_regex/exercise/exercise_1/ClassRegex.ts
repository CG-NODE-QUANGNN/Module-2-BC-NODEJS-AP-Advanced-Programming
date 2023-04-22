export class ClassRegex {
    private static CLASS_REGEX: RegExp = /^[CAP][0-9]{4}[GHIKLM]$/;

    public static validateClass(regex: string): boolean {
        return this.CLASS_REGEX.test(regex);
    }
}
