/* Новые элементы должны добавляться в список по нажатию на Enter */

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */

const input = document.querySelector('#input');
const itemsContainer = document.querySelector('.items');

input.addEventListener('keydown', function (event) {
  if (event.key == 'Enter') {
    const itemText = input.value;

    const newItem = document.createElement('div');
    newItem.classList.add('items');
    newItem.textContent = itemText;

    if (newItem != '') {
      itemsContainer.append(newItem);
      input.value = '';
    }

    newItem.addEventListener('click', function () {
      newItem.classList.toggle('done');
    });

  }
});

