const billTotalInput = document.getElementById("bill-total")
const tipInput = document.getElementById("tip")
const numOfPeople = document.getElementById("people-no")
const totalPerPerson = document.getElementById("per-person-total")
let count = Number(numOfPeople.textContent)



const calculateBill = () =>{
    let billTotal = Number(billTotalInput.value)
    let tip = Number(tipInput.value)/100

    let tipTotal = billTotal * tip
    const totalAmount = billTotal + tipTotal 

    const individualTotal = totalAmount/count

    totalPerPerson.textContent = `$${individualTotal.toFixed(2)}`

}

function addBtn(){
    count += 1
    numOfPeople.textContent = count 
    calculateBill()

}

function subBtn(){
    if(count > 1){
    count -= 1
    numOfPeople.textContent = count 
    }
    calculateBill()
}
