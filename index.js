var winnings = [[0,1,2],
                [0,4,8],
                [0,3,6],
                [1,4,7],
                [2,5,8],
                [2,4,6],
                [3,4,5],
                [6,7,8]];

var counter = true;

function checkforwin(){
    for(i of winnings){
        var first = $(".box")[i[0]].innerHTML;
        var second = $(".box")[i[1]].innerHTML;
        var third = $(".box")[i[2]].innerHTML;
        if(first === second && second === third && first !== ""){
            return first;
        }
    }
}

var count = 0;

var btn = document.querySelectorAll("button.box");

function checkfortie(){
    if(count === 9){
        return true;
    }
}
function workk(){
    var haha = this.innerHTML;
    if(haha === "X" || haha === "O"){
        return;
    }
    if(counter === true){
        this.innerHTML = "X";
        count++;
        counter = false;
    }else{
        this.innerHTML = "O";
        count++;
        counter = true;
    }
    var a = checkforwin();
    var b = checkfortie();
    if(a === "X" || a === "O"){
        var winr = a + " wins !";
        $("h1").html(winr);
        for(i of btn){
            i.disabled = true;
        }
        b = false;
    }
    if(b === true){
        $("h1").html("Tie !");
        for(i of btn){
            i.disabled = true;
        }
    }
}
$("button.box").click(workk);

function startAgain(){
    for(i of btn){
        $("h1").html("Tic Tac Toe")
        i.disabled = false;
        i.innerHTML="";
        count = 0;
        counter = true;
    }
}

$("button#reset").click(startAgain);
