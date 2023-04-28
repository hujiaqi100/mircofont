const axios = require('axios')
const _ = require('lodash')
const resolveResquest = (function () {
    let tempStuff;
    const RequestQueue = function (queue) {
        RequestQueue.current = 1
        this.queue = queue
        this.queueLength = queue.length
        this.result = []
    }
    RequestQueue.prototype.CarryFun = async function () {
        while (RequestQueue.current <= this.queueLength) {
            this.currentElement = this.queue.shift()
            let data = await axios.get(this.currentElement.url)
            if (data) {
                let info = {
                    'mark': this.currentElement.mark,
                    'data': _.get(data, 'data', void 0)
                }
                this.result.push(info)
            }
            RequestQueue.current++
        }
    }
    return {
        setQueue: function (queue) {
            // if (!tempStuff) {
            //     tempStuff = new RequestQueue(queue)
            // }
            return new RequestQueue(queue)
        },
        resetQueue: function () {
            tempStuff = null
        }
    }
})()
module.exports = { resolveResquest }