/**
 * 计算器单例，保存数据+提供执行方法
 */
var Counter = (function () {
    function Counter() {
        this.value = 0
    }
    let instance
    return function () {
        if (!instance) instance = new Counter()   
        return instance
    }
})()

/**
 * 扩展计算器实体方法
 */

const counter = new Counter()

Counter.prototype.add=function(){
    console.log(counter.value)
}

Counter.prototype.minus=function(){
    console.log(counter.value)
}

