//cleaning
const gotCleanData = localStorage.getItem('cleanArray')
const convertedCleanData = JSON.parse(gotCleanData)
let robotsclean = []
if (robotsclean === null){
    robotsclean = []
}
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
    const robot = new Robotclean(num, functions, time, imgURL)
    console.log(robot)
    // add to array
    robotsclean.push(robot)
    // show on screen (forEach)
    robotsclean.forEach(function(element){
        document.querySelector("#workingClean").innerHTML += `
        <img src='${element.imgURL}' />
        <p>The robot No. ${element.num} is ${element.functions} at ${element.time}</p>
        `
    });
    const cleanData = JSON.stringify(robotsclean)
    localStorage.setItem('cleanArray',cleanData)
    const gotCleanData = localStorage.getItem('cleanArray')
    const convertedCleanData = JSON.parse(gotCleanData)
    }
    convertedCleanData.forEach(function(element){
        document.querySelector("#workingClean").innerHTML += `
        <img src='${element.imgURL}' />
        <p>The robot No. ${element.num} is ${element.functions} at ${element.time}</p>
        `
    });