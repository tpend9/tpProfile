
//this will alow users that have disabled javascript still see the site

if (true) {
    
    //////////////////////
    //
    //     education
    //
    //////////////////////
    
    var pos = window.innerWidth / 1.5;
    if (window.innerWidth < 768) {
        for (var i = 0; i < education_cards.length; i++) {
            education_cards[i].style.left = pos + (pos * i / 4) + 'px';
        }
    } else {
        for (var i = 0; i < education_cards.length; i += 2) {
            education_cards[i].style.left = pos + (pos * i / 6) + 'px';
            education_cards[i + 1].style.right = pos + (pos * (i + 1) / 6) + 'px';
        }
    }
    
    
    
    
    
    
    
    
    
    
}