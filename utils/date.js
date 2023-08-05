function formatDate(timestamp) {
    const date = new Date(timestamp);

    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' };

    const formattedDate = date.toLocaleDateString('en-GB', dateOptions);
    const formattedTime = date.toLocaleTimeString('en-GB', timeOptions);

    return `${formattedDate}, ${formattedTime}`;
}

module.exports = formatDate;