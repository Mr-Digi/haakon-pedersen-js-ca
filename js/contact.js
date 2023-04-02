function validateForm() {
    event.preventDefault();
    var nameInput = document.forms["contact"]["fname"].value;
    var subjectInput = document.forms["contact"]["subject"].value;
    var emailInput = document.forms["contact"]["email"].value;
    var addressInput = document.forms["contact"]["address"].value;

    var nameError = document.getElementById('nameError');
    var subjectError = document.getElementById('subjectError');
    var emailError = document.getElementById('emailError');
    var addressError = document.getElementById('addressError');

    var success = document.getElementById('validationSuccess');
    
    if (nameInput == "") {
        nameError.style.display = 'block';
        return false;
    } else {
        nameError.style.display = 'none';
    }

    if (subjectInput.length < 10) {
        subjectError.style.display = 'block';
        return false;
    } else {
        subjectError.style.display = 'none';
    }
    
    if (emailInput.length <= 0) {
        if (emailInput.indexOf("@") == -1) {
            emailError.style.display = 'block';
            return false;
        } else {
            emailError.style.display = 'none';
        }
    } else {
        emailError.style.display = 'none';
    }
    
    if (addressInput.length < 25) {
        addressError.style.display = 'block';
        return false;
    } else {
        addressError.style.display = 'none';
    }
    
    success.style.display = 'block';
    
    return true;
  }