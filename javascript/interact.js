function mobile_effect(){

    var btn = document.getElementById('area-desktop')

    if(btn.offsetWidth == '110'){
        btn.style.width = '0px'
        
    } else {
        btn.style.width = '110px'

    }

}




function ClosePlus(element){
    var tam;

    switch(element){

        case 0:
            var area0 = document.querySelectorAll('.sub-menu-itens')[0]
            tam = area0.offsetHeight;
            
            if(area0.offsetHeight == 80){
                area0.style.height = '0rem';
            }else {
                area0.style.height = '8rem';
            }

        break;
            
        case 1:
            var area1 = document.querySelectorAll('.sub-menu-itens')[1]
            tam = area1.offsetHeight;

            if(area1.offsetHeight == 60){
                area1.style.height = '0rem';
            }else {
                area1.style.height = '6rem';
            }

        break;
    }

    element.style.background = 'red';
}