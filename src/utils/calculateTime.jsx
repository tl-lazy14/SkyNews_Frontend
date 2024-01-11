import moment from "moment";

export const calculateTimeAgo = (timestamp) => {
    const postedTime = moment(timestamp);
    const currentTime = moment();
    const timeAgo = moment.duration(currentTime.diff(postedTime));

    const minutes = Math.floor(timeAgo.asMinutes());
    if (minutes < 1) {
      return "Vừa xong";
    } else if (minutes < 60) {
      return `${minutes}' trước`;
    } else {
      const hours = Math.floor(timeAgo.asHours());
      if (hours < 24) {
        return `${hours}h trước`;
      } else {
        const days = Math.floor(timeAgo.asDays());
        if (days < 7) {
          return `${days} ngày trước`;
        } else return '';
      }
    }
};