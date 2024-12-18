function showDiv(divId) {
  const floors = document.querySelectorAll('.floor');
  floors.forEach(floor => {
    floor.style.display = 'none';
  });

  const selectedFloor = document.getElementById(divId);
  if (selectedFloor) {
    selectedFloor.style.display = 'block';
  }

  const buttons = document.querySelectorAll('.switch');
  buttons.forEach(button => {
    button.classList.remove('active');
  });

  const selectedButton = document.getElementById(`btn-${divId}`);
  if (selectedButton) {
    selectedButton.classList.add('active');
  }
}