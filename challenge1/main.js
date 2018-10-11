function makeList(list, destination, inputtext, inputbutton){

  let ul = document.querySelector(destination);

  function renderList(){
    list.sort(function (a, b) {  //case insensitive sorting
      return a.toLowerCase().localeCompare(b.toLowerCase());
    });

    ul.innerHTML = "";

    for(let film in list){
      let li = document.createElement('li');
      let btn = document.createElement('button');//creating button
      btn.innerHTML = ' Delete';//naming button
      btn.addEventListener('click', function(){
        deleteFilm(list[film]);
      });//"closure"
      li.innerHTML = list[film];
      li.appendChild(btn);
      ul.appendChild(li)
    } //plural for collection and singular fo item im collection
  }
  renderList();

  function deleteFilm(film)
  {
    list.splice(list.indexOf(film), 1)
    renderList();
    alert(film + ' deleted!')

  }


  function uniqueFilm(list, filmName){
    if (list.indexOf(filmName) === -1){
      list.push(filmName);
      alert(filmName + ' added!')
      return true;
    } else if(list.indexOf(filmName) > -1){
      alert(filmName + ' already exist');
      return false;
    }
  }

  let add = function(){
    let filmName = document.querySelector(inputtext).value;

    if(filmName != ""){
      if(uniqueFilm(list, filmName)){
        renderList();
      }
    }else{
      alert("you must enter a film")
    }
  }

  if( inputbutton){
    let button = document.querySelector(inputbutton)//setup event listener
    button.addEventListener('click', add );// when clicked, log the value of the field
  }
}
