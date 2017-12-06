class RegexMethods {

    public static findPattern(regex: string, input: string): string {
        return input.match(regex)[0];
    }
}