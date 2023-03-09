const desserts =["desserts1","desserts2","desserts3","desserts4"]
//console.log(desserts.length)
desserts.splice(1,1)
desserts.unshift("desserts0")

const Rnum =[1,3,5,7,9]
let sum = 0 
Rnum.forEach(function (element) {
    sum = sum+element
    console.log (sum) 
})

const twoDArray = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]