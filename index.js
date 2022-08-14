let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");

const ulEl = document.getElementById("unorder-el");
console.log(ulEl);

inputBtn.addEventListener("click", function() {
    let x = document.getElementById("input-el").value;
    myLeads.push(x);
    console.log(myLeads);
    inputEl.value = "";
    renderFunction();
})

function renderFunction() {
    let n = myLeads.length;
    let listItems = "";
    for (let i = 0; i < n; i++) {
        listItems += `
            <li>
                <a href='${myLeads[i]}' target='_blank'> ${myLeads[i]} </a>
            </li >
            `
    }
    ulEl.innerHTML = listItems;
}