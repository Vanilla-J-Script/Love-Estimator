const yourName = document.getElementById("yname");
const loverName = document.getElementById("lname");
const compute = document.getElementById("compute");
const output = document.getElementById("result");
const reloadPage = document.getElementById("reload");




// Onclick Function handling different love score and statement display.
compute.onclick = () => {

    var loveScore = Math.floor((Math.random() * 100) + 1); //Generating a random number and saving it in a variable
   
    if (loveScore >= 80) 
    { return output.value = `Congratulations ${yourName.value} your love score with ${loverName.value} is ${loveScore}%. Your bond is strong.`;
    
    } else if (loveScore >= 60 ) 
    {return output.value = `Hey ${yourName.value}, your love score with ${loverName.value} is ${loveScore}. It is good, but you could make it even better.`;
    
    } else if (loveScore >= 50 )
    {return output.value = `Hi ${yourName.value}, your love score with ${loverName.value} is ${loveScore}. It is mid, needs to be worked on.`;
    
    }else 
    {return output.value = `Too bad ${yourName.value}, your Love score with ${loverName.value} is ${loveScore}%. Guess you both aren't meant to be.`}
}

//Refreshing the page
reloadPage.onclick = function () {
    location.reload();
}



//Love Estimator is a simple web page that demonstrates the use of javascript to generate random numbers which would be seen as love scores. And the use of if and else if statements to attach different statements to these love score ranges.