const song1 = new Audio('audio/01.mp3')
const song2 = new Audio('audio/02.mp3')
const song3 = new Audio('audio/03.mp3')

function playSong(song){
    if (song === 1) {
    console.log('play')
    song1.play()
    }
    if (song === 2) {
        console.log('play')
        song2.play()
    }
    if (song === 3) {
        console.log('play')
        song3.play()
    }
}
function stopSong(song){
    if (song === 1) {
        console.log('play')
        song1.pause()
    }
    if (song === 2) {
        console.log('play')
        song2.pause()
    }
    if (song === 3) {
        console.log('play')
        song3.pause()
    }
}
function restartSong(song){
    if (song === 1) {
        console.log('play')
        song1.pause()
    }
    if (song === 2) {
        console.log('play')
        song2.pause()
    }
    if (song === 3) {
        console.log('play')
        song3.pause()
    }
}