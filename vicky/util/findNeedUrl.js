const getMarkUrl = (mark = '', urlList = []) => {
    return urlList.find(d => d.mark === mark)?.url ?? ''
}
export { getMarkUrl }