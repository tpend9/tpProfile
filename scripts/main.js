


//this will alow users that have disabled javascript still see the site

if (true) {
    
    document.getElementById('cover_img').style.maxHeight = window.innerHeight - 50 + 'px';
    
    
    
    
    
    
    
    
    console.log(cue_point);
    
    
    $(document).scroll(function() {
        var pos = $(window).scrollTop();
        
        for (var i = 0; i < cue_point.length; i++) {
            
            if (!cue_point[i].active) {
                if (pos >= cue_point[i].cue_point[0] - 30 && pos <= cue_point[i].cue_point[0] + 30) {
                    cue_point[i].animation();
                    cue_point[i].active = true;
                }
            }
        }
        
        
        
        
        
    });
    





    
}