
function playSound(e) {
    //  console.log(KeyboardEvent.e)  //-->this does not work
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    
    //* same as select audio[data-key = 65, 83 ...]
    //! remember to include ${} with quotes
    
    if (!audio) return; // simply returns
    audio.currentTime = 0; // resets time of audio
    audio.play();
    
    key.classList.add("playing");
    
    // setTimeout(function () {
        //     key.classList.remove('playing')
        // },70)
    }
    
    function removeTrans(e) {
        if (e.propertyName !== "transform") return; //skips
        console.log(this);
        this.classList.remove('playing');
    }
    
    const keys = document.querySelectorAll(".key");
    keys.forEach((key) => {
        key.addEventListener("transitionend", removeTrans);
    });
    
    window.addEventListener("keydown", playSound);