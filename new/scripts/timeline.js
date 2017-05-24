
function timeline(elements_id, cue_point) {
    
    this.card_elements = elements_id;
    
    this.cue_point = cue_point;
    
    this.active = false;
    
    this.animation = function() {
        
        
        var count, pos;
        var cards_id = this.card_elements;
        
        if (window.innerWidth < 768) {
            var id = setInterval(frame_mobile, 2);
        } else {
            var id = setInterval(frame_desktop, 2);
        }
        
        
        function frame_desktop() {
            count = 0;
            
            
            for (var i = 0; i < cards_id.length; i += 2) {
                pos = parseInt(cards_id[i].style.left);
                
                if (pos <= 0) {
                    count++;
                } else {
                    cards_id[i].style.left = pos - 3 + 'px';
                }
                
                pos = parseInt(cards_id[i + 1].style.right);
                if (pos <= 0) {
                    count++;
                } else {
                    cards_id[i + 1].style.right = pos - 3 + 'px';
                }
            }
            
            if (count == 4) {
                clearInterval(id);
            }
            
        }
        
        function frame_mobile() {
            count = 0
            
            for (var i = 0; i < cards_id.length; i++) {
                pos = parseInt(cards_id[i].style.left);
                
                if (pos <= 0) {
                    count++;
                } else {
                    cards_id[i].style.left = pos - 3 + 'px';
                }
            }
        }
        if (count <= 4) {
            clearInterval(id);
        }
        
    };
    
    this.reset = function() {
        cards_id = this.card_elements;
        var pos = window.innerWidth / 1.5;
        if (window.innerWidth < 768) {
            for (var i = 0; i < cards_id.length; i++) {
                cards_id[i].style.left = pos + (pos * i / 4) + 'px';
            }
        } else {
            for (var i = 0; i < cards_id.length; i += 2) {
                cards_id[i].style.left = pos + (pos * i / 9) + 'px';
                cards_id[i + 1].style.right = pos + (pos * (i + 1) / 9) + 'px';
            }
        }
    };
};
