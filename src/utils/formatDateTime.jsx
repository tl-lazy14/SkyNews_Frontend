import moment from "moment";

export const getFormattedDate = () => {
    const currentDateTime = new Date();
    const daysOfWeek = ["Chủ nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];
    const dayOfWeek = daysOfWeek[currentDateTime.getDay()];
    const day = currentDateTime.getDate();
    const month = currentDateTime.getMonth() + 1;
    const year = currentDateTime.getFullYear();
    return `${dayOfWeek}, ${day}/${month}/${year}`;
}

export const getFormattedDateTime = (date) => {
    const daysOfWeek = ["Chủ nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];
    const dayOfWeek = daysOfWeek[date.getDay()];
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hour = date.getHours();
    var minute = date.getMinutes();
    if (minute < 10) minute = '0' + minute;
    return `${dayOfWeek}, ${day}/${month}/${year}, ${hour}:${minute} (GMT+7)`;
}

export const getFormattedDateMonthYear = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

export const getFormattedTimestampComment = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hour = date.getHours();
    var minute = date.getMinutes();
    if (minute < 10) minute = '0' + minute;
    return `${hour}:${minute} ${day}/${month}/${year}`;
}

export const convertLocaleStringToCustomDateFormat = (inputDate) => {
    const inputDateFormat = moment(inputDate, 'HH:mm:ss DD-MM-YYYY');
    const result = inputDateFormat.format('YYYY-MM-DD')

    return result;
}

export const formatDateFromResponse = (inputDate) => {

    const inputDateFormat = moment(inputDate, 'HH:mm:ss DD-MM-YYYY');
    const result = inputDateFormat.format('DD/MM/YYYY')

    return result;

}

export const formatDateTimeFromResponse = (inputDate) => {
    const inputDateFormat = moment(inputDate, 'HH:mm:ss DD-MM-YYYY');
    const result = inputDateFormat.format('HH:mm DD/MM/YYYY')

    return result;

}

export function formatDateToYYYYMMDD(date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Thêm '0' nếu tháng < 10
    const day = date.getDate().toString().padStart(2, '0'); // Thêm '0' nếu ngày < 10
    return `${year}-${month}-${day}`;
}