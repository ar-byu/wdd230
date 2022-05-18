const input = document.getElementById('favchap')
const button = document.querySelector('button')
const list = document.querySelector('ul')
const deleteButton = '❌';

button.addEventListener('click', function() {
    const chapter = input.value;
    input.value = ' ';

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listButton = document.createElement('button');

    listItem.appendChild(listText);
    listText.textContent = chapter;
    listItem.appendChild(listButton);
    listButton.textContent = deleteButton;
    list.appendChild(listItem);

    listBtn.addEventListener('click', () => {
        list.removeChild(listItem);
      });

      input.focus();
    });