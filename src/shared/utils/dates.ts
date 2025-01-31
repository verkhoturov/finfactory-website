export const formattedDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date
        .toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        })
        .replace(/\//g, '.');
};
