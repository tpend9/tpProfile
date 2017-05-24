
document.getElementById('contact_form_button').disabled = true;


function val_input(input_type, input_id) {
    
    var element = document.getElementById(input_id);
    var value = element.value;
    var input_good = true;
    
    //this will checck is there is something in the input 
    if (value.length <= 2) {
        input_good = false;
    } else {
        input_good = true;
    }
    
    
    //this will check is email inputs are emails
    if (input_type == 'email') {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))  {  
          input_good = true;
        } else {
          input_good = false;
        }
    }
    
    
    //this will check the user math
    if (input_type == 'math') {
        if (value == 10) {
            input_good = true;
            document.getElementById('contact_form_button').disabled = false;
        } else {
            input_good = false;
        }
    }
    
    
    
    //this will alert the user that an error has happened
    if (input_good) {
        element.style.border = '1px solid #ccc';
        return;
    } else {
        element.style.border = '2px solid red';
        return;
    }
    
    
}