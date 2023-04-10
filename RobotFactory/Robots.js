//cooking 
let robotscook = []
class Robotcook{
    constructor(num, functions, times, imgURL){
        this.num = num,
        this.functions = functions,
        this.times = times,
        this.imgURL = imgURL
    }
}

function cookClick(){
    // get form values
    const num = document.querySelector(`#name`).value
    const functions = document.querySelector(`#functions`).value
    const times = document.querySelector(`#times`).value
    const imgURL = document.querySelector(`#img`).value

    // create object from class
    const robot = new Robotcook(num, functions)
    console.log(robot)
    // add to array
    robotscook.push(robot)
    // show on screen (forEach)
    robotscook.forEach(function(){
        document.querySelector("#working").innerHTML += `
        <img src='${imgURL}' />
        <p>The robot No. ${num} is ${functions} for ${times}</p>
        `
    });
    }
//cleaning
let robotsclean = []
class Robotclean {
    constructor(num, functions, time, imgURL){
        this.num = num,
        this.functions = functions,
        this.time = time,
        this.imgURL = imgURL
    }
}

function cleanClick(){
    // get form values
    const num = document.querySelector(`#name`).value
    const functions = document.querySelector(`#functions`).value
    const time = document.querySelector(`#time`).value
    const imgURL = document.querySelector(`#img`).value
    // create object from class
    const robot = new Robotclean(num, functions)
    console.log(robot)
    // add to array
    robotsclean.push(robot)
    // show on screen (forEach)
    robotsclean.forEach(function(){
        document.querySelector("#working").innerHTML += `
        <img src='${imgURL}' />
        <p>The robot No. ${num} is ${functions} at ${time}</p>
        `
    });
    }
//planting
let robotsplant = []
class Robotplan {
    constructor(num, functions, number, imgURL){
        this.num = num,
        this.functions = functions,
        this.number = number,
        this.imgURL = imgURL
    }
}

function plantClick(){
    // get form values
    const num = document.querySelector(`#name`).value
    const functions = document.querySelector(`#functions`).value
    const number = document.querySelector(`#name`).value
    const imgURL = document.querySelector(`#img`).value
    // create object from class
    const robot = new Robotplan(num, functions)
    console.log(robot)
    // add to array
    robotsplant.push(robot)
    // show on screen (forEach)
    robotsplant.forEach(function(){
        document.querySelector("#working").innerHTML += `
        <img src='${imgURL}' />
        <p>The robot No. ${num} is planting ${number} ${functions}</p>
        `
    });
    }




