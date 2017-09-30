//Simulating calls to super methods

//Helper
Function.prototype.method = function(name, func) {
    this.prototype[name] = func
    return this
}

//Helper
Object.method("super", function (name) {
    var that = this
    var method = that[name]
    return function() {
        return method.apply(that, arguments)
    }
})

var person = function(spec) {
    var that = { }
    
    that.get_name = function() {
        return spec.name
    }

    that.get_age = function() {
        return spec.age
    }

    return that
}

var employee = function(spec) {

    var that = person(spec) 
    var super_get_name = that.super("get_name")
    that.get_designation = function() {
        return spec.designation
    }

    that.get_employeeId = function() {
        return employeeId
    }
    
    //Redefining get_name
    that.get_name = function() {
        return super_get_name() + ", " + spec.designation
    }    
    return that
}

var yogi = employee({name: "Yogi Prem", age: 31, employeeId: "9H88U", designation: "Senior Manager"})
console.log(yogi.get_name())
    
