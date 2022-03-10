// ROCK PAPER SCISSORS


// ELEMENTS FOR INPUTS AND OUTPUTS
let img = document.getElementById("rps")
let rpsans = document.getElementById("rpsans")
let wl = document.getElementById("winlose")
let msg = document.getElementById("msg")

// EVENT LISTENER
document.getElementById("roll").addEventListener("click", rungame)

// FUNCTION
function rungame(){
    let input = document.getElementById("input").value.toLowerCase();


    if (input === "rock"){
        let math = Math.random()
    
        if (math <= (1/3)){
            img.src = "rock.png"
            rpsans.innerHTML = "ROCK"
            wl.innerHTML = "TIE"
            msg.innerHTML = "PLEASE TRY AGAIN"

        } else if (math <= (2/3)){
            img.src = "paper.png"
            rpsans.innerHTML = "PAPER"
            wl.innerHTML = "YOU LOSE"
            msg.innerHTML = "UNLUCKY. YOU'LL GET IT NEXT TIME"
        } else {
            img.src = "scissors.png"
            rpsans.innerHTML = "SCISSORS"
            wl.innerHTML = "YOU WIN"
            msg.innerHTML = "NICE JOB! YOU WON!"
    }
    } else if (input === "paper"){
        let math = Math.random()
    
        if (math <= (1/3)){
            img.src = "rock.png"
            rpsans.innerHTML = "ROCK"
            wl.innerHTML = "YOU WIN"
            msg.innerHTML = "NICE JOB! YOU WON!"

        } else if (math <= (2/3)){
            img.src = "paper.png"
            rpsans.innerHTML = "PAPER"
            wl.innerHTML = "TIE"
            msg.innerHTML = "PLEASE TRY AGAIN"
        } else {
            img.src = "scissors.png"
            rpsans.innerHTML = "SCISSORS"
            wl.innerHTML = "YOU LOSE"
            msg.innerHTML = "UNLUCKY. YOU'LL GET IT NEXT TIME"
            
    }
} else if (input === "scissors"){
    let math = Math.random()

    if (math <= (1/3)){
        img.src = "rock.png"
        rpsans.innerHTML = "ROCK"
        wl.innerHTML = "YOU LOSE"
        msg.innerHTML = "UNLUCKY. YOU'LL GET IT NEXT TIME"

    } else if (math <= (2/3)){
        img.src = "paper.png"
        rpsans.innerHTML = "PAPER"
        wl.innerHTML = "YOU WIN"
        msg.innerHTML = "NICE JOB! YOU WON!"
    } else {
        img.src = "scissors.png"
        rpsans.innerHTML = "SCISSORS"
        wl.innerHTML = "TIE"
        msg.innerHTML = "PLEASE TRY AGAIN"
        
}
} else {
    img.src = "start.png"
    rpsans.innerHTML = "NO INPUT"
    wl.innerHTML = "NOTHING HAPPENED"
    msg.innerHTML = "PLEASE INPUT EITHER ROCK, PAPER, OR SCISSORS"
}   
}