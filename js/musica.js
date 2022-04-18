// Variáveis de controle
const duration = document.querySelector('#duration');
const current = document.querySelector('#current');

const playBtn = document.querySelector('#playBtn');
const stopBtn = document.querySelector('#stopBtn');
const volumeBtn = document.querySelector('#volumeBtn');
const volumeSlider = document.querySelector("#volume-slider");



var timeCalculator = function (value) {
    second = Math.floor(value % 60);
    minute = Math.floor((value / 60) % 60);
    
    if (second < 10) {
        second = "0" + second;
    }

    return minute + ":" + second;
};


let wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: '#dde5ec',
    progressColor: '#FF7F00',
    barWidth: 2,
    heigth: 48,
    responsive: true,
    hideScrollbar: true,
    scrollParent: false,
    barRadius: 2,
    barGap: 3
});
wavesurfer.load('./mscs/Sun Came Up (Claptone Extended Mix).mp3');
// Adiciona os eventos de escuta
// playBtn.onclick() = function(){
    
// }
    playBtn.addEventListener('click', () =>{
    wavesurfer.playPause();
    if(playBtn.src.includes('play.png')){
        playBtn.src = './imgs/pause.png';
    }
    else
        playBtn.src = './imgs/play.png';
})

stopBtn.addEventListener('click', () =>{
    wavesurfer.stop();
    playBtn.src = './imgs/play.png';
})

volumeBtn.addEventListener('click', () =>{
    wavesurfer.toggleMute();

    if(volumeBtn.src.includes('volume.png')){
        volumeBtn.src = './imgs/mute.png';
        // wavesurfer.setVolume(0);
        volumeSlider.value = 0
    }
    else{
        volumeBtn.src = './imgs/volume.png';
        // wavesurfer.setVolume(0.5);
        volumeSlider.value = 0.5;
    }
})

//Duração do audio

wavesurfer.on("ready", () => {
    duration.textContent = timeCalculator(wavesurfer.getDuration());
});

//Timer crescente
wavesurfer.on("audioprocess", () => {
    current.textContent = timeCalculator(wavesurfer.getCurrentTime());
});

//Tempo atual independente de onde clique
wavesurfer.on("seek", () => {
    current.textContent = timeCalculator(wavesurfer.getCurrentTime());
});

const changeVolume = (volume) => {
    if (volume == 0) {
        wavesurfer.toggleMute();
        volumeBtn.src = './imgs/mute.png';
    }
    else{
        wavesurfer.setVolume(volume);
        volumeBtn.src = './imgs/volume.png';
    }
};

volumeSlider.addEventListener("mouseup", () => {
    changeVolume(volumeSlider.value);
});
  

wavesurfer.on('finish', function () {
    playBtn.src = './imgs/play.png';
    wavesurfer.stop();
});