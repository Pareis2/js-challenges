// Put your JS code in here

function addLi(content, parent){
  let li = document.createElement('li');
  li.innerHTML = content;
  let deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = "Delete";
  deleteBtn.addEventListener('click', function(e){
    e.target.parentNode.parentNode.removeChild(e.target.parentNode);
  })
  li.appendChild(deleteBtn);
  parent.appendChild(li);
}

function generateList(list, parent){
  parent.innerHTML = '';
  for(item in list.sort()){
    addLi(list[item], parent);
  }
}

function make_list(list, el){
  let mainEl = document.querySelector(el);

  generateList(list, mainEl)
  
  document.querySelector('#addFilm').addEventListener('click', function(e){
    let newItem = document.querySelector('#filmName').value;
    list.push(newItem);
    generateList(list, mainEl);
  });
  
}