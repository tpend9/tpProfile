


var awards = {
    cue_point: [5370],
    
    active: false,
    
    animation: function() {
        
        $('#awards_img').fadeIn(3000);
        var width = window.innerWidth;
        if (width < 992) {
            var id = setInterval(frame_mobile, 5);
            var pos = 250;
        } else if (width < 1200 && width > 992) {
            var id = setInterval(frame_desktop, 5);
            var pos = 200;
        } else {
            var id = setInterval(frame_lg_desktop, 5);
            var pos = 200;
        }
        
        
        function frame_mobile() {
            if (pos < window.innerWidth * 18 / 100) {
                clearInterval(id);
            }
            document.getElementById('awards_img').style.marginLeft = pos + 'px';
            pos--;
        }
        
        function frame_desktop() {
            if (pos < window.innerWidth * 2 / 100) {
                clearInterval(id);
            }
            document.getElementById('awards_img').style.marginLeft = pos + 'px';
            pos--;
        }
        
        function frame_lg_desktop() {
            if (pos < window.innerWidth * 1 / 100) {
                clearInterval(id);
            }
            document.getElementById('awards_img').style.marginLeft = pos + 'px';
            pos--;
        }
    },
    
    reset: function() {
        $("#awards_img").fadeOut();
    }
};

cue_point.push(awards);
awards.reset();
    