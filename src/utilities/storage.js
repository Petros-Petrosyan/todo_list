// get data from localstorage
export const getDataFromStorage = (key) => {
    const data = localStorage.getItem(key);
    return JSON.parse(data);
}

// set data in localstorage
export const setDataInStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
}