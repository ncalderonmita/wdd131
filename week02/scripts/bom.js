const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
// trim method of string values removes whitspace from both ends of this string and returns a new string without modifying the original string
button.addEventListener('click', function() {
if(input.value.trim() !== '') {

    const item = document.createElement('li');

    const deleteButton = document.createElement('button');

    item.textContent = input.value;

    deleteButton.textContent = '❌';
    deleteButton.addEventListener('click', function() {
        list.removeChild(item);
        input.focus();
    });
    item.append(deleteButton);

    list.append(item);
    
    input.value = '';
    input.focus();

    
}
});



