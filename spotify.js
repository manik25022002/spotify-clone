console.log("welcome!!!!!!")
// alert("hello");

// initialize the variable
let songIndex = 0;
let audioElement = new Audio('songs/0.mp3');
let isplaying = 0;
let myprogressbar = document.getElementById('myprogressbar')
let songItems = Array.from(document.getElementsByClassName('songitem'));
let masterSongName =document.getElementById("masterSongName");

let songs = [
    { songname: " Hare Krishna", filepath: "songs/0.mp3", coverpath: "covers/0.jpg" },
    { songname: "Daku", filepath: "songs/1.mp3", coverpath: "covers/1.jpg" },
    { songname: "Closer", filepath: "songs/2.mp3", coverpath: "covers/2.jpg" },
    { songname: "We rollin", filepath: "songs/3.mp3", coverpath: "covers/3.jpg" },
    { songname: "Players ", filepath: "songs/4.mp3", coverpath: "covers/4.jpg" },
    { songname: "Moonlight", filepath: "songs/5.mp3", coverpath: "covers/5.jpg" },
    { songname: "summer high", filepath: "songs/6.mp3", coverpath: "covers/6.jpg" },
    { songname: "Backbone", filepath: "songs/7.mp3", coverpath: "covers/7.jpg" },
    { songname: "Let me love you", filepath: "songs/8.mp3", coverpath: "covers/8.jpg" },
    { songname: "Sakhiyan", filepath: "songs/9.mp3", coverpath: "covers/9.jpg" },


]
masterSongName.innerText =songs[songIndex].songname;


songItems.forEach((element, i) => {
    console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songname;

})

// handle play pause events
const music = () => {
    const masterplay = document.getElementById("circlebutton");
    if (isplaying == 0) {
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
        isplaying = 1;
    }
    else {
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
        isplaying = 0;
    }
}




// listen to events

audioElement.addEventListener('timeupdate', () => {
    // seek bar update
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myprogressbar.value = progress;
})

myprogressbar.addEventListener('change', () => {
    audioElement.currentTime = (myprogressbar.value * audioElement.duration) / 100;
})

const makeAllPlays =()=>{
  
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        // console.log("MANIKGARG")
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');

    })
}
// ----------------------
// ----------------------
const musicicon =()=>{
    
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.addEventListener('click',(e)=>{
            console.log("manikgarg")
            makeAllPlays();
            
            songIndex=parseInt(e.target.id);
            e.target.classList.add('fa-circle-pause');
            e.target.classList.remove('fa-circle-play');
            masterSongName.innerText =songs[songIndex].songname;
            audioElement.src=`songs/${songIndex}.mp3`;
            audioElement.currentTime=0;
            audioElement.play();
            // gif.style.opacity = 1;
            

            const masterplay = document.getElementById("circlebutton");

            masterplay.classList.remove('fa-circle-play');
            masterplay.classList.add('fa-circle-pause');

        })

})
}

// songIndex=parseInt(e.target.id);
const masterplay = document.getElementById("circlebutton");

const iconprevious =() =>{
    console.log('previous')
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex -=1
    }
    audioElement.src=`songs/${songIndex}.mp3`;
    masterSongName.innerText =songs[songIndex].songname;
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
masterplay.classList.add('fa-circle-pause');
gif.style.opacity = 1;
    // const masterplay = document.getElementById("circlebutton");
// document.getElementById('previous').addEventListener('cick',()=>{
    

// })
}

const iconnext =() =>{
    console.log('next')
    audioElement.play();
    // ()=>{
        if(songIndex>=9){
         songIndex=0
        }  
        else
        {
         songIndex+=1
         console.log(songIndex);
        }
        audioElement.src=`songs/${songIndex}.mp3`;
        masterSongName.innerText =songs[songIndex].songname;
                 audioElement.currentTime=0;
                 audioElement.play();
                 masterplay.classList.remove('fa-circle-play');
             masterplay.classList.add('fa-circle-pause');
             gif.style.opacity = 1;
     
     }
    
    // const masterplay = document.getElementById("circlebutton");

// document.getElementById('next').addEventListener('click',iconnext);






        // makeAllPlays();
        // console.log(e.target);
        // e.target.classList.remove('fa-circle-pause');
        // e.target.classList.add('fa-circle-play');
        // e.target.classList.remove("fa-circle-play")
        // e.target.classList.add('fa-circle-pause');

   



// SONGitemplay = Array.from(document.getElementsByClassName("songItemPlay"));

// const musicicon = ()=>{
//     const SONGitemplay = document.getElementsByClassName("songItemPlay");
//     // console.log('e');
//     console.log('manik')
//     // SONGitemplay.classList.add('')
// }




// SONGitemplay.forEach((element, i) => {
//     musicicon();
//         // element.addEventListener('click', (e)=>{
//         //         console.log('e');
//         //     }
//         //     )
//         // console.log("manik")
//         // makeAllPlays()
//         SONGitemplay.classList.remove('fa-circle-play');
//         SONGitemplay.classList.add('fa-circle-pause');

    
// })


 
    // SONGitemplay = Array.from(document.getElementsByClassName("songItemPlay")); 
    //     SONGitemplay.forEach((element, i) => {


    //         makeAllPlays = () =>{
    //         SONGitemplay.classList.add('fa-circle-pause');
    //         }



    //     })
    

// musicicon=()=>{
//     console.log('hello');
// }

// SONGitemplay = document.getElementsByClassName("songItemPlay");