var video = document.getElementById("video");
video.playbackRate = 1.5;

var videoBox = document.getElementsByClassName("videoBox")[0];
var start = document.getElementById("start");
var body = document.getElementsByTagName("body")[0];
start.onclick = function(){
    body.style["overflow"] = "scroll";
}
body.onclick = function(){
    body.style["overflow"] = "scroll";
}
var rollBox = document.getElementsByClassName("rollBox")[0];
var left = document.getElementById("left");
var right = document.getElementById("right");
var flag = true;
var index = 0;

left.onclick = function(){
    if(flag == false){
        return;
    }
    flag = false;
    if(index == 4){
        rollBox.style["left"] = "0px";
        index = -4;
    }
    index += 1;
    animate(rollBox,{left:-980 - index*245},
        function(){
            if(index == 4){
                rollBox.style["left"] = "0px";
                index = -4;
            }
            flag = true;
        }
    )
}
right.onclick = function(){
    if(flag == false){
        return;
    }
    flag = false;
    if(index == -4){
        rollBox.style["left"] = "-1960px";
        index = 4;
    }
    index -= 1;
    animate(rollBox,{left:-980 - index*245},
        function(){
            if(index == -4){
                rollBox.style["left"] = "-1960px";
                index = 4;
            }
            flag = true;
        }
    )
}

var liList = document.getElementsByClassName("tittle")[0].children[0].children;
var roll = document.getElementsByClassName("roll")[0];
var flag = true;
for(var i = 0;i < liList.length;i++){
    liList[i].onclick = function(){
        if(flag != true){
            return;
        }
        flag = false;
        var tempIndex = this.getAttribute("number");
        rollBackgroundColor(tempIndex);
        rollFrame(tempIndex);
    }
}

function rollBackgroundColor(tempIndex){
    for(var j = 0;j < liList.length;j++){
        liList[j].setAttribute("class","");
    }
    liList[tempIndex].setAttribute("class","backgroundColor");
}

function rollFrame(tempIndex){
    animate(roll,{top:-400 * tempIndex},function(){
        flag = true;
    })
}