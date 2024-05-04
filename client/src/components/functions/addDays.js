export default function addDays(createdAt, n) {
    const date = new Date(createdAt)
    return new Date(date.getTime() + n * 24 * 60 * 60 * 1000);
}