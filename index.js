const addRowButton = document.querySelector('#add-row');
const canvas = document.querySelector('#canvas');
const colorPicker = document.querySelector('#color-picker');

const populateColorPicker = () => {
  const color = [];
  for (let i = 0; i < 3; i++) {
    color.push(document.createElement('OPTION'));
  }
  (color[0].text = 'Red'), (color[0].value = 'red');
  (color[1].text = 'Black'), (color[1].value = 'black');
  (color[2].text = 'Clear'), (color[2].value = 'clear');
  for (let i = 0; i < 3; i++) {
    colorPicker.add(color[i]);
  }
};

const squareClicked = (e) => {
  switch (colorPicker.value) {
    case 'black':
      e.target.classList.add('black');
      e.target.classList.remove('red');
      break;
    case 'red':
      e.target.classList.remove('black');
      e.target.classList.add('red');
      break;
    default:
      e.target.classList.remove('black');
      e.target.classList.remove('red');
      break;
  }
};

const addRow = () => {
  const row = document.createElement('div');
  row.classList.add('row');
  for (let i = 0; i < 20; i++) {
    let square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('click', squareClicked);
    row.append(square);
  }
  canvas.append(row);

  if (colorPicker.length === 0) populateColorPicker();
};

addRowButton.addEventListener('click', addRow);
