
const text = document.getElementsByClassName('border');


function resize(){
    if(window.innerWidth < 410){
        text[0].innerHTML = `B.S. in Computer Science | UC Irvine`
    }
    else if (window.innerWidth < 860){
        text[0].innerHTML = `B.S in Computer Science and Engineering`;
    }
    else{
        text[0].innerHTML = `B.S in Computer Science and Engineering | University of California, Irvine`
    }
}

resize()
window.onresize =  resize