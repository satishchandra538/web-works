const Bill = document.getElementById("bill");
const tipPercentage = document.getElementById("tipPercentage");
const People = document.getElementById("people");
const Total = document.getElementById("total");
const BillPerPerson = document.getElementById("billPerPerson");

tipPercentage.children[0].innerHTML = tipPercentage.children[1].value;
People.children[0].innerHTML = People.children[1].value;

const tipChange = () => {
    tipPercentage.children[0].innerHTML = tipPercentage.children[1].value;
    const total = Math.floor((parseInt(Bill.value) * parseFloat((100 + parseInt(tipPercentage.children[1].value)) / 100) * 100)) / 100;
    const billPerPerson = Math.floor((total / parseInt(People.children[1].value) * 100)) / 100;
    Total.innerHTML = total;
    BillPerPerson.innerHTML = billPerPerson;
}
const peopleChange = () => {
    People.children[0].innerHTML = People.children[1].value;
    const total = Math.floor((parseInt(Bill.value) * parseFloat((100 + parseInt(tipPercentage.children[1].value)) / 100) * 100))/100;
    const billPerPerson = Math.floor((total / parseInt(People.children[1].value) * 100)) / 100;
    Total.innerHTML = total;
    BillPerPerson.innerHTML = billPerPerson;
}
const calculateBill = () => {
    const total = Math.floor((parseInt(Bill.value) * parseFloat((100 + parseInt(tipPercentage.children[1].value)) / 100) * 100)) / 100;
    const billPerPerson = Math.floor((total / parseInt(People.children[1].value) * 100)) / 100;
    Total.innerHTML = total;
    BillPerPerson.innerHTML = billPerPerson;
}
tipPercentage.oninput = tipChange;
People.oninput = peopleChange;
Bill.oninput = calculateBill;