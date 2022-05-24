var input = document.getElementById("gradeInput");
var subBt = document.getElementById("submitBt");
var displayDiv1 = document.getElementById("higherOr85");

function submit()
{
    switch(true)
    {
        case (input.value >= 85):
            displayDiv1.innerText = "congratulations for your "+input.value+"%";
            break;
        
        default:
            displayDiv1.innerText = "please enter a valid number";

    }

}

subBt.addEventListener('click',submit);