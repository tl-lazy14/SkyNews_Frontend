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
    // Tạo một đối tượng Date từ chuỗi đầu vào
    let dateObject = new Date(inputDate);

    // Lấy thông tin về ngày, tháng, năm
    let year = dateObject.getFullYear();
    let day = String(dateObject.getMonth() + 1).padStart(2, '0'); // Thêm '0' trước nếu cần
    let month = String(dateObject.getDate()).padStart(2, '0');

    // Tạo chuỗi mới theo định dạng 'yyyy-MM-dd'
    let result = `${year}-${month}-${day}`;

    return result;
}

export const formatDateFromResponse = (inputDate) => {
    let dateObject = new Date(inputDate);

    // Lấy thông tin về ngày, tháng, năm
    let year = dateObject.getFullYear();
    let day = String(dateObject.getMonth() + 1);
    let month = String(dateObject.getDate());

    // Tạo chuỗi mới theo định dạng 'yyyy-MM-dd'
    let result = `${day}/${month}/${year}`;

    return result;

}

export const formatDateTimeFromResponse = (inputDate) => {
    let dateObject = new Date(inputDate);

    // Lấy thông tin về ngày, tháng, năm
    let year = dateObject.getFullYear();
    let day = String(dateObject.getMonth() + 1);
    let month = String(dateObject.getDate());
    let hour = String(dateObject.getHours()).padStart(2,0);
    let minute = String(dateObject.getMinutes()).padStart(2,0);

    // Tạo chuỗi mới theo định dạng 'yyyy-MM-dd'
    let result = `${hour}:${minute} ${day}/${month}/${year}`;

    return result;

}

export function formatDateToYYYYMMDD(date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Thêm '0' nếu tháng < 10
    const day = date.getDate().toString().padStart(2, '0'); // Thêm '0' nếu ngày < 10
    return `${year}-${month}-${day}`;
}