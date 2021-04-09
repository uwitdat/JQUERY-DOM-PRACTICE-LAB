let ul = document.querySelector('.list-items')
const list = ul.children;
const div = document.querySelector('.list')

function makeBtn() {
const submitBtn = document.getElementById('button')
    submitBtn.addEventListener('click', function(e){
        const item = document.createElement('li');
        const input = document.getElementById('submit');
        item.textContent = input.value; 
        if(input.value === '') {
        return
        }else{
            ul.appendChild(item);
            input.value = '';
            createDltBtn(item)   
        }
    })
}
makeBtn()


function createDltBtn (li){
    const remove = document.createElement('button')
    remove.className = 'btn-remove'
    remove.innerHTML = 'X'
    li.appendChild(remove)
    return li;
}
for(var i = 0; i < list.length; i ++){
    createDltBtn(list[i])
}

div.addEventListener('click', (e) => {
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
