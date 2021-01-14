console.log(Math.ceil(6.1))
console.log(Math.floor(6.1))

const obj = {}
obj.name = 'ball'

console.log(obj.name)

function Obj(name){
    this.get_Name = function(){
        return name
    }

}

obj1 = new Obj('Renan')
console.log(obj1.get_Name())