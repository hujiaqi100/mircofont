import _ from "lodash"
function swap(array, first, second) {
    let tmp = array[second];
    array[second] = array[first];
    array[first] = tmp;
    return array;
}
class Mm {
    constructor({ dom, setList, list }) {
        this.dom = dom
        this.dragNode = null
        this.rep = document.createElement('div')
        this.rep.style.width = '500px'
        this.rep.style.height = '50px'
        this.rep.className = 'rep'
        this.rep.style.position = 'relative'
        // this.rep.style.background = '#fff'
        this.currentTop = null
        this.nodeList = []
        this.diff = null
        this.pre = null
        this.initPos = 0
        this.dropNode = null
        this.list = list
        this.setList = setList
        this.init()

    }
    init = () => {
        this.dom.onmousedown = (e) => {
            e.stopPropagation()
            this.dragNode = e.target
            this.dragNode.parentNode.insertBefore(this.rep, this.dragNode)
            this.dragNode.style.position = 'absolute'
            this.dragNode.style.width = '800px'
            this.dragNode.style.zIndex = 1
            this.dragNode.style.cursor = 'move';
            this.currentTop = e.pageY
            this.diff = e.pageY + this.dragNode.getBoundingClientRect().top
            this.dragNode.style.top = e.pageY + (-this.dom.getBoundingClientRect().top - 12) + 'px'
            Array.from(this.dom.children).forEach(val => {
                let data = {
                    attr: {
                        nodeTopBoundray: val.getBoundingClientRect().top,
                        nodeBottomBoundray: val.getBoundingClientRect().bottom,
                    },
                    ele: val,
                    cc: val.className,
                    transformPos: 0
                }
                this.nodeList.push(data)
            })
            let idx = this.nodeList.findIndex(d => d.cc === this.dragNode.className)
            this.nodeList.splice(idx, 1, {
                attr: {
                    nodeTopBoundray: this.rep.getBoundingClientRect().top,
                    nodeBottomBoundray: this.rep.getBoundingClientRect().bottom,
                },
                ele: this.rep,
                cc: this.rep.className,
                transformPos: 0
            })
            this.dom.onmousemove = (e) => {
                e.stopPropagation()
                requestAnimationFrame(() => {
                    const diffY = e.pageY + (-this.dom.getBoundingClientRect().top - 12)
                    this.dragNode.style.top = diffY + 'px'
                    for (let i of this.nodeList) {
                        if (e.pageY > i.attr.nodeTopBoundray && e.pageY < i.attr.nodeBottomBoundray && i.ele.className !== 'rep') {
                            if (i.ele.className === this.dragNode.className) {
                                continue
                            } else {
                                this.pre = i.ele
                                this.dropNode = i.ele
                                const rep = this.nodeList.find(d => d.cc === 'rep')
                                const distance = rep.attr.nodeTopBoundray - i.attr.nodeTopBoundray
                                let temp;
                                temp = rep.attr
                                rep.attr = i.attr
                                i.attr = temp
                                this.animationSwitchElement(distance, i.transformPos)
                                i.transformPos = i.transformPos + distance
                                if (distance < 0) {
                                    this.initPos += 50
                                } else {
                                    this.initPos -= 50
                                }
                                const idx1 = this.list.findIndex(d => (d.cc === this.dragNode.className))
                                const idx2 = this.list.findIndex(d => (d.cc === this.dropNode.className))
                                this.list = swap(this.list, idx1, idx2)
                            }
                        }
                    }
                })
            }
            this.dom.onmouseup = (e) => {
                e.stopPropagation()
                this.nodeList = []
                this.initPos = 0
                this.dragNode.style.top = this.rep.getBoundingClientRect().top + 'px'
                this.dom.onmousemove = null
                this.dom.removeChild(this.rep)
                this.setList(() => [])
                this.setList(() => _.cloneDeep(this.list))
            }
        }
    }
    animationSwitchElement = (distance, xx) => {
        this.rep.style.transition = 'none';
        this.dropNode.style.transition = 'none';
        this.rep.style.transform = 'translate3d(' + (0) + 'px, ' + (this.initPos) + 'px, 0)';
        this.dropNode.style.transform = 'translate3d(' + (0) + 'px, ' + (xx) + 'px, 0)';
        this.rep.offsetTop;
        this.rep.style.transition = 'transform 300ms';
        this.dropNode.style.transition = 'transform 300ms';
        this.rep.style.transform = 'translate3d(' + (0) + 'px, ' + ((this.initPos - distance)) + 'px, 0)';
        this.dropNode.style.transform = 'translate3d(' + (0) + 'px, ' + (xx + distance) + 'px, 0)';
    }
}
export { Mm }