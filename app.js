let pop_song_left= document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName("pop_song")[0]


pop_song_right.addEventListener('click', ()=>{
    pop_song.scrollLeft += 330;
})

pop_song_left.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 330;
})

let pop_art_left= document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let pop_art= document.getElementsByClassName("pop_artists")[0]

pop_art_right.addEventListener('click', ()=>{
    pop_art.scrollLeft += 330;
})

pop_art_left.addEventListener('click', ()=>{
    pop_art.scrollLeft -= 330;
})

