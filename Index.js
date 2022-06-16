document.addEventListener('click', (Event) => {

  document.querySelector('.Search').style.backgroundColor = "white";
  document.querySelector('.Search').classList.add('Search-Shadow');

  const Box = document.getElementById('Search-Text');

  if (!Box.contains(Event.target)) {

    document.querySelector('.Search').classList.remove('Search-Shadow');
    document.querySelector('.Search').style.backgroundColor = "#F1F3F4";
  }
});

function LocalStore() {
  let Notes = [];
  let All = document.querySelectorAll('textarea');
  All.forEach((element) => {
    if (element.value)
      return Notes.push(element.value);
  });
  localStorage.setItem('Notes', JSON.stringify(Notes));
}

document.querySelector('.Call').addEventListener('click', AddingNote = (Para = ' ') => {

  let NewNote = document.createElement('div');
  NewNote.classList.add('Note-Box');


  const HTMLData =
    `<div class="Operations">
      <div class="Images">
          <img class="Save" src="/Icons/Save.png" alt="Save Here">
          <img class="Del" src="/Icons/Delete.png" alt="Delete Here">
      </div>
    </div>
    <p class="Note-Text Note-Display">
    </p>
    <textarea name="Write" id="Area" class="Note-Text" cols="100%"></textarea>`

  NewNote.insertAdjacentHTML('afterbegin', HTMLData);
  document.querySelector('.All-Notes').appendChild(NewNote);


  NewNote.querySelector('.Del').addEventListener('click', () => {
    let Ans = confirm('Are You Sure to Delete this Note ? ');
    if (Ans == true) {
      NewNote.remove();
    }
    LocalStore();
  });


  NewNote.querySelector('.Save').addEventListener('click', () => {

    if (NewNote.querySelector('textarea').value == '') {
      NewNote.remove();
      LocalStore();
    }
    else {
      NewNote.querySelector('.Note-Display').innerHTML = NewNote.querySelector('#Area').value;
      NewNote.querySelector('.Note-Display').style.display = 'block';
      NewNote.querySelector('#Area').style.setProperty('display', 'none', 'important');
    }
    LocalStore();
  });
  if (Para != '[object PointerEvent]') {
    NewNote.querySelector('#Area').innerHTML = Para;
    NewNote.querySelector('.Note-Display').style.display = "none";
    NewNote.querySelector('#Area').style.display = "block";
    LocalStore();
  }
  else {
    NewNote.querySelector('#Area').style.display = "block";
    NewNote.querySelector('.Note-Display').style.display = "none";
  }
});

let GetNotes = JSON.parse(localStorage.getItem('Notes'));
if (GetNotes) {
  GetNotes.forEach(Element => {
    AddingNote(Element);
  });
}

// ===================================

document.querySelector('.Search-Click').addEventListener('click' , ()=>
{

  let Key=document.querySelector('#Search-Text').value;
  let GetNotes = JSON.parse(localStorage.getItem('Notes'));
  if (GetNotes) {
  GetNotes.forEach(Element => {
    if(Element.search(Key)!=-1)
    {
      let All = document.querySelectorAll('textarea');
      All.forEach((element) => {
      if (element.value==Element){
      let Getter=document.querySelector('textarea').parentNode;
      document.querySelector('.All-Notes').appendChild(Getter);
      }
      });
    }
    else
    {
      let All = document.querySelectorAll('textarea');
      All.forEach((element) => {
      if (element.value==Element){
      let Getter=document.querySelector('textarea').parentNode;
      document.querySelector('.All-Notes').removeChild(Getter);
      }
      });
    }
  });
}
});