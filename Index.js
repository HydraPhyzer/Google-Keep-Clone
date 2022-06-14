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