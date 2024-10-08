//요구사항 라디오버튼을 추가해서 남자인지 여자인지 필드를 만들어주세요

const table = document.querySelector('.table');

function createInputField(name, placeholder) {
  //인풋태그를 만든다
  const input = document.createElement('input');
  input.name = name;
  input.placeholder = placeholder;
  return input;
}

function createRadioField(name, options) {
  const label = document.createElement('label');
  options.forEach((option) => {
    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = name;
    radio.value = option.value;
    if (option.checked) {
      radio.checked = true;
    }
    label.appendChild(radio);
    label.appendChild(document.createTextNode(option.label));
  });
  return label;
}

function createTableRow(thText, inputElement) {
  //테이블을만든다.
  const tr = document.createElement('tr');
  const th = document.createElement('th');
  th.textContent = thText;

  const td = document.createElement('td');

  td.appendChild(inputElement);
  tr.appendChild(th);
  tr.appendChild(td);
  return tr;
}

//배열ㅇ늘 순회할수 있도록 자료구조를 만든다
const formInfoArray = [
  { th: '아이디', name: 'id', placeholder: '아이디', type: 'text' },
  { th: '비밀번호', name: 'pw1', placeholder: '아이디', type: 'text' },
  { th: '비밀번호확인', name: 'pw2', placeholder: '아이디', type: 'text' },
  { th: '이름', name: 'name', placeholder: '아이디', type: 'text' },
  { th: '전화번호', name: 'phone', placeholder: '아이디', type: 'text' },
  {
    th: '성별',
    name: 'gender',
    type: 'radio',
    options: [
      { label: '남자', value: 'male', checked: true },
      { label: '여자', value: 'female' },
    ],
  },
];

//만든자료구조를 순회해서 무언갈 한다
formInfoArray.forEach((item) => {
  let inputElement;

  switch (item.type) {
    case 'radio':
      inputElement = createRadioField(item.name, item.options);
      break;
    default:
      inputElement = createInputField(item.name, item.placeholder);
  }
  const tableRow = createTableRow(item.th, inputElement);
  table.appendChild(tableRow);
});
