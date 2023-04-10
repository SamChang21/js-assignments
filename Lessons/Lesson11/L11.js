function updateMe(){
    const name = document.querySelector("#name").value
    const age = document.querySelector("#age").value
    const kind = document.querySelector("#kind").value

    localStorage.setItem('name', name)
    localStorage.setItem('age', age)
    localStorage.setItem('kind', kind)

    console.log(name)
    console.log(age)
    console.log(kind)
}