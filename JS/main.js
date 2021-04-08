let ul = document.querySelector('.list-items')

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
        }
    })