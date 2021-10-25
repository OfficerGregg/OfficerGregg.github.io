function saveName(){
  var fieldValue = document.getElementById('textfield').value;
  localStorage.setItem('uName',fieldValue);
  window.location.href="page2.html";
}