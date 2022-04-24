

document.getElementById("bolod-items").style.display= "none";
document.getElementById("kobold-item-option").style.display= "none";
function item(){
    
    if(document.getElementById('kobold').click){
        document.getElementById("kobold-item-option").style.display="block";
        
    }
}


function vacumm(){
    if(document.getElementById('vacum-cleaner').click){
        document.getElementById("bolod-items").style.display="block";
        document.getElementById('repair').style.display="none";
        
    }
   
    
}

$(document).on('click', '#menu li', function(){
    $(this).addClass('active').siblings().removeClass('active')
});