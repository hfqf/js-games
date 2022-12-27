/**
 * 计算器类，保存数据+提供执行方法
 */
var Counter = function () {
    this.currentValue = 0 //目前数字
    this.op = 0//当前操作 0输入数字 1加 2减 3乘 4除 5计算结果 6清零 7删除一个最后数字
    this.willOpValue = 0//将要计算的数字

    this.print=function(){  
        console.log("currentValue=",this.currentValue)
        console.log("op=",this.op)
        console.log("willOpValue=",this.willOpValue)
        console.log("time=",Date())
    }
}

/**
 * 扩展计算器实体方法
 */
Counter.prototype.inputNumber=function(number){
    if(this.op==0){
        var temp = this.currentValue.toString()
        if(temp.includes(".")){
            temp=temp+number.toString()
            this.currentValue=temp
        }else{
            this.currentValue=(this.currentValue*10)
            this.currentValue+=number
        }
        return this.currentValue
    }else if(
        this.op==1||
        this.op==2||
        this.op==3||
        this.op==4){
        this.willOpValue +=0
        return this.willOpValue
    }
    this.print()
    return 0
}

Counter.prototype.inputPoint=function(){
    if(this.op==0){
        var temp = parseFloat(this.currentValue).toString()
        if(temp.includes(".")){
            return this.currentValue
        }else{
            temp=temp+'.'
            this.currentValue=temp
        }
        return this.currentValue
    }else if(
        this.op==1||
        this.op==2||
        this.op==3||
        this.op==4){
        this.willOpValue +=0
        return this.willOpValue
    }
    this.print()
    return 0
}

Counter.prototype.add=function(){
    this.op = 1
    this.print()
    return this.currentValue
}

Counter.prototype.minus=function(){
    this.print()
    return this.currentValue
}

Counter.prototype.multi=function(){
    this.print()
    return this.currentValue
}

Counter.prototype.divide=function(){
    console.log(this.value)
    return this.currentValue
}

Counter.prototype.equal=function(){
    this.print()
    return this.currentValue
}

Counter.prototype.clear=function(){
    this.currentValue = 0 
    this.op = 0
    this.willOpValue = 0
    this.print()
    return this.currentValue
}

Counter.prototype.del=function(){
    this.print()
    return this.currentValue
}



