export function formatDate(inputDateStr) {
        
    // Parse input date string into a Date object
    const inputDate = new Date(inputDateStr);

    // Days of the week and months
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    // Extract day of the week, day of the month, and month
    const dayOfWeek = daysOfWeek[inputDate.getDay()];
    const dayOfMonth = inputDate.getDate();
    const month = months[inputDate.getMonth()];

    // Construct the output date string
    const outputDateStr = `${dayOfWeek} ${dayOfMonth} ${month}`;

    return outputDateStr;
}