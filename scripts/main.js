


//this will alow users that have disabled javascript still see the site

if (true) {
    
    document.getElementById('cover_img').style.maxHeight = window.innerHeight - 50 + 'px';
    
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
            education_cards[i].style.left = pos + (pos * i / 9) + 'px';
            education_cards[i + 1].style.right = pos + (pos * (i + 1) / 9) + 'px';
        }
    }
    
    
    
    //////////////////////
    //
    //     awards
    //
    //////////////////////
    
    $("#awards_img").fadeOut();
    
    
    //////////////////////
    //
    //     skills
    //
    //////////////////////
    
    for (var i = 1; i < skills_levels.length + 1; i++) {
        for (var j = 1; j <= 3; j++) {
            document.getElementById('skills_ele_' + i + '_' + j).style.width = '0%';
        }
    }
    
}