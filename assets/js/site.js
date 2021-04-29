const mes = document.getElementById('mes')
const form = document.getElementById('form')
form.addEventListener('submit', (e) => {
  if(mes.textLength <= 0){
    alert("Message field cannot be left empty");
    e.preventDefault()
  }
}
)

