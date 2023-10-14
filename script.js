let count = 0;

function ChangePos(event){
    let box = document.getElementById('box');
    screen_height = document.documentElement.clientHeight;
    screen_width = document.documentElement.clientWidth;
    box_height = box.offsetHeight;
    // console.log(screen_height,screen_width,box_height);

    random_height = Math.floor(Math.random()* (screen_height-box_height));
    random_width  = Math.floor(Math.random()* (screen_width-box_height));
    // console.log(random_height,random_width,box_height);

    

    if(0<random_height<screen_height+box_height && 0<random_width<screen_width+box_height ){
        box.style.left = random_width+'px';
        box.style.top = random_height+'px';
        let audio = new Audio('./oops.mp3');
        audio.play();
        count++;
        console.log(count);
    }
    if(count==15 ||count==30||count==45 || count ==60){
        DisplayDialog();
    }

    function DisplayDialog(){
        let audio1 = new Audio('./lost_yet.mp3');
        audio1.play();
        alert("Try Harder, Are you Lost yet haha...");
        

    }
    
}