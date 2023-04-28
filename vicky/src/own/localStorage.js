const getItem = (key) => {
    return window.localStorage.getItem(key)
}
const setItem = (key, data) => {
    return window.localStorage.setItem(key, data)
}
const removeItem = (key) => {
    return window.localStorage.removeItem(key)
}
export const local = {
    getItem,
    setItem,
    removeItem
}