document.addEventListener('click', (Event)=>
{

    document.querySelector('.Search').style.backgroundColor="white";
    document.querySelector('.Search').classList.add('Search-Shadow');

    const Box = document.getElementById('Search-Text');
  
    if (!Box.contains(Event.target)) {

      document.querySelector('.Search').classList.remove('Search-Shadow');
      document.querySelector('.Search').style.backgroundColor="#F1F3F4";
    }
});


document.querySelector('.Call').addEventListener('click' , ()=>
{

  let NewNote=document.createElement('div');
  NewNote.classList.add('Note-Box');

  let HTMLData=
  `<div class="Operations">
    <div class="Images">
        <img class="Edit" src="/Icons/Edit.png" alt="Edit Here">
        <img class="Del" src="/Icons/Delete.png" alt="Delete Here">
    </div>
  </div>
  <p class="Note-Text">
  </p>
    <textarea name="Write" id="Area" class="Note-Text" cols="100%"></textarea>`

    NewNote.insertAdjacentHTML('afterbegin' , HTMLData);
    document.querySelector('.All-Notes').appendChild(NewNote);

    NewNote.querySelector('.Del').addEventListener('click' , ()=>
    {
      let Ans=confirm('Are You Sure to Delete this Note ? ');
      if(Ans==true)
      {
        NewNote.remove();
      }
    })
});