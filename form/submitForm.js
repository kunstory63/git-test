const form = document.getElementById('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(event.target);
  const formData = new FormData(event.target);
  console.log(formData);
  console.log('아이디는 :', formData.get('id'));
  const id = formData.get('id');
  if (!id) {
    alert('아읻를 입력해줏요');
    return;
  }
  if (id.length < 6) {
    alert('최소 6자리로 입력해주쇼');
    return;
  }
});
