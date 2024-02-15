function formatDate(date) {
    // Input string date
    var dateString = "2024-02-15"; // Assuming the format is YYYY-MM-DD

    // Convert string to Date object
    var dateObject = new Date(dateString);

    // Define the desired date format with month name and day of the week
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    // Format the date using Intl.DateTimeFormat
    var formattedDate = new Intl.DateTimeFormat('en-US', options).format(dateObject);

    return formattedDate;
}