window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40)
    {
        document.getElementById ("navi").style.backgroundColor = "gray";
    }
    
    else {
        document.getElementById ("navi").style.backgroundColor = "lightgray";
    }
}