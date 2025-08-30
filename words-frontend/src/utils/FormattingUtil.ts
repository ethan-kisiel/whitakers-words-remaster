export function formatNumberAsOrdinal(input: number): string {
    if (input <= 0) {
        return '';
    }

    if (input == 1) {
        return '1st';
    }

    if (input == 2) {
        return '2nd';
    }

    if (input == 3) {
        return '3rd';
    }

    return `${input}th`;
}