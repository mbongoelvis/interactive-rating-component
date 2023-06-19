const toggling1 = () =>{
    let first = document.querySelector("#first")
    first.classList.toggle("orange")  
}
const toggling2 = () => {
    let second = document.querySelector("#second")
    second.classList.toggle("orange")
}
const toggling3 = () => {
    let third = document.querySelector("#third")
    third.classList.toggle("orange")
}
const toggling4 = () => {
    let fourth = document.querySelector("#fourth")
    fourth.classList.toggle("orange")
}
const toggling5 = () => {
    let fift = document.querySelector("#fift")
    fift.classList.toggle("orange")
}


const submit = () => {
    let Next = document.querySelector(".second-section")
    let First = document.querySelector(".first-section")
    Next.style.display = "flex"
    First.style.display = "none"
}