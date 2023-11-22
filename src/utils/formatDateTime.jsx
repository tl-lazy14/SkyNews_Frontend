export const getFormattedDateTime = () => {
    const currentDateTime = new Date();
    const daysOfWeek = ["Chủ nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];
    const dayOfWeek = daysOfWeek[currentDateTime.getDay()];
    const day = currentDateTime.getDate();
    const month = currentDateTime.getMonth() + 1;
    const year = currentDateTime.getFullYear();
    return `${dayOfWeek}, ${day}/${month}/${year}`;
}
