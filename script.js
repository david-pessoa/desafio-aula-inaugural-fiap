const inputNome1 = document.getElementById('nome1');
const inputNome2 = document.getElementById('nome2');
const inputNome3 = document.getElementById('nome3');
const inputNome4 = document.getElementById('nome4');
const inputNome5 = document.getElementById('nome5');
const inputHistory = document.getElementById('history');
const sendBtn = document.getElementById('send-btn');

sendBtn.addEventListener('click', (e) => {
  e.preventDefault();
  
  fetch('https://fsdt-contact.onrender.com/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      names: [
        inputNome1.value,
        inputNome2.value,
        inputNome3.value,
        inputNome4.value,
        inputNome5.value,
      ],
      message: inputHistory.value,
    }),
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(e => console.error(e));
});
