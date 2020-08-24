// change data format
export const formatDate = (_date) => {
    let date = new Date(_date);

    let dd = date.getDate();
    if (dd < 10) dd = `0${dd}`;
    let mm = date.getMonth() + 1;
    if (mm < 10) mm = `0${mm}`;
    let yy = date.getFullYear();
    if (yy < 10) yy = `0${yy}`;
    return `${dd}/${mm}/${yy}`;
}

// change time format
export const formatTime = (_date) => {
    let date = new Date(_date);

    let h = date.getHours();
    let m = date.getMinutes();
    if (m < 10) m = `0${m}`;
    return `${h}:${m}`;
}

// concat date
export const concatDate = (date, time) => {
    const dey = date.getDate();
    const mount = date.getMonth();
    const year = date.getFullYear();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    return new Date(year, mount, dey, hours, minutes, seconds)
}

// compare date
export const isPassedDate = (date) => {
    return new Date(date) <= new Date();
}