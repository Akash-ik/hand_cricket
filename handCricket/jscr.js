const one_div = document.getElementById("one");
const two_div = document.getElementById("two");
const three_div = document.getElementById("three");
const four_div = document.getElementById("four");
const five_div = document.getElementById("five");
const six_div = document.getElementById("six");
const us_p = document.getElementById("us");
const cs_p = document.getElementById("cs");
const popp_p = document.getElementById("popp")
const stat_p = document.getElementById("status")

var us = 0;
var cs = 0;
var innings = 1;
var chance;
var flag = 0;
chance = "batting"
function getcomputer_choice(){
    return Math.floor(Math.random()*6 + 1)
}

function result(){
    if(us>cs){
        popp_p.innerHTML = "You Won";
    }
    else if(us<cs){
        popp_p.innerHTML = "Computer Won";
    }
    else{
        popp_p.innerHTML = "The match was a draw";
    }
}

function play(user_choice){
    computer_choice = getcomputer_choice();
    console.log("computer choice:"+computer_choice)
    console.log("User Choice:"+user_choice)
    console.log("User Score:"+us_p);
    stat_p.innerHTML = "You are "+chance;


    if(chance === "batting"){
        if(user_choice != computer_choice){
            popp_p.innerHTML=" ";
            us = us + user_choice;
            us_p.innerHTML= us;
            if (innings == 2 && us>cs){
                result();
            }
        }
        else{
            popp_p.innerHTML="You are Out!";
            flag = 1;
            chance = "bowling";
            innings++;
            if(innings>2){
                result()
            }
        }
    }
    else{
        if(user_choice != computer_choice){
            popp_p.innerHTML=" ";
            cs = cs + computer_choice;
            cs_p.innerHTML= cs;
            if (innings == 2 && cs>us){
                result();
            }
        }
        else{
            popp_p.innerHTML="Computer is Out!";
            chance = "batting";
            flag = 1;
            innings++;
            if(innings>2){
                result();
            }
        }

    }
    
}

function main(){
stat_p.innerHTML = "You are "+chance;
one_div.addEventListener('click',function(){
    play(1);
})
two_div.addEventListener('click',function(){
    play(2);
})
three_div.addEventListener('click',function(){
    play(3);
})
four_div.addEventListener('click',function(){
    play(4);
})
five_div.addEventListener('click',function(){
    play(5);
})
six_div.addEventListener('click',function(){
    play(6);
})


}
main();
