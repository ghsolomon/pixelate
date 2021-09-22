const addRowButton = document.querySelector('#add-row');
const canvas = document.querySelector('#canvas');
const colorPicker = document.querySelector('#color-picker');

const populateColorPicker = () => {
  colorPicker.innerHTML = `
  <option value="red">Red</option>
  <option value="black">Black</option>
  `;
};

const squareClicked = (e) => {
  if (!e.target.classList.contains('square')) return;
  if (colorPicker.value === 'black') {
    e.target.classList.toggle('black');
    e.target.classList.remove('red');
  } else {
    e.target.classList.remove('black');
    e.target.classList.toggle('red');
  }
};

const addRow = () => {
  const row = document.createElement('div');
  row.classList.add('row');
  for (let i = 0; i < 20; i++) {
    let square = document.createElement('div');
    square.classList.add('square');
    row.append(square);
  }
  canvas.append(row);

  if (colorPicker.length === 0) populateColorPicker();
};

addRowButton.addEventListener('click', addRow);
canvas.addEventListener('click', squareClicked);
