
var skills = {

    cue_point: [820],
    
    active: false,
    
    //html css js php myquery
    //50 30 20
    skills_levels: [
        [50, 30, 6],
        [50, 10, 0],
        [50, 15, 0],
        [50, 30, 1],
        [50, 1, 0]
    ],
    
    animation: function() {
        
        for (var i = 1; i < this.skills_levels.length + 1; i++) {
                for (var j = 1; j <= 3; j++) {
                    document.getElementById('skills_ele_' + i + '_' + j).style.width = this.skills_levels[i - 1][j - 1] + '%';
                }
        }
        
    },
    
    reset: function() {
        for (var i = 1; i < this.skills_levels.length + 1; i++) {
            for (var j = 1; j <= 3; j++) {
                document.getElementById('skills_ele_' + i + '_' + j).style.width = '0%';
            }
        }
    }
};

cue_point.push(skills);
skills.reset();