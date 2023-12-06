export const getTime = (timeStamp) => {
  const minutes = new Date(timeStamp * 1000).getMinutes();
  if (minutes < 10)
    return `${new Date(timeStamp * 1000).getHours()} : 0${minutes}`;
  return `${new Date(timeStamp * 1000).getHours()} : ${minutes}`;
};

// Define options for formatting
const options = {
  weekday: "short",
  year: "numeric",
  month: "short",
  day: "numeric",
};

// Format the date using toLocaleString with the custom options
export const formattedDate = (time) =>
  new Date(time).toLocaleString("en-US", options);

export const formattedTime = (time) =>
  new Date(time).toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
  });
