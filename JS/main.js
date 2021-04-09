//store div, list and ul is variables
let ul = document.querySelector('.list-items')
const list = ul.children;
const div = document.querySelector('.list')

//creating function that on clock created new li element, 
// holding the value entered into the submit button.
function makeBtn() {
    const submitBtn = document.getElementById('button')
        submitBtn.addEventListener('click', function(e){
        e.preventDefault();
        const item = document.createElement('li');
        const input = document.getElementById('submit');
        item.textContent = input.value; 
        if(input.value === '') {
        return;
        } else
        ul.appendChild(item);
        input.value = '';
        createDltBtn(item)       
    })
}
//function called:
makeBtn()

//function that creates delete button, links to parent li created item with 'for loop'
function createDltBtn (li){
    const remove = document.createElement('button')
    remove.className = 'btn-remove'
    remove.innerHTML = 'X'
    li.prepend(remove)
}

for(var i = 0; i < list.length; i ++){
    createDltBtn(list[i])
}

//adding event listener to delte button, deleting li parent element on click
div.addEventListener('click', (e) => {
    e.preventDefault();
    if(e.target.tagName === 'BUTTON') {
        const button = e.target;
        const li = button.parentNode;
        const ul = li.parentNode;
        if(button.className === 'btn-remove') {
            alert('are you sure?')
            ul.removeChild(li);
        }
    }
})
