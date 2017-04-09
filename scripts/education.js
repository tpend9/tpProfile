
var education_cards = [
                document.getElementById('education-card-1'),
                document.getElementById('education-card-2'),
                document.getElementById('education-card-3'),
                document.getElementById('education-card-4')
               ];


function education_card_silder() {
    
    
    var count, pos;
    
    if (window.innerWidth < 768) {
        var id = setInterval(frame_mobile, 3);
    } else {
        var id = setInterval(frame_desktop, 3);
    }
    
    
    function frame_desktop() {
        count = 0;
        
        for (var i = 0; i < education_cards.length; i += 2) {
            pos = parseInt(education_cards[i].style.left);
            
            if (pos <= 0) {
                count++;
            } else {
                education_cards[i].style.left = pos - 3 + 'px';
            }
            
            pos = parseInt(education_cards[i + 1].style.right);
            if (pos <= 0) {
                count++;
            } else {
                education_cards[i + 1].style.right = pos - 3 + 'px';
            }
        }
        
        if (count == 4) {
            clearInterval(id);
        }
        
    }
    
    function frame_mobile() {
        count = 0
        
        for (var i = 0; i < education_cards.length; i++) {
            pos = parseInt(education_cards[i].style.left);
            
            if (pos <= 0) {
                count++;
            } else {
                education_cards[i].style.left = pos - 3 + 'px';
            }
        }
    }
    if (count <= 4) {
        clearInterval(id);
    }
    
}