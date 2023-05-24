document.querySelector('.login-form').addEventListener('submit', function (event) {
    event.preventDefault();
       
    let form = this;    
    let data = {};
      
    if (form.elements.email.value && form.elements.password.value) {
      data.email = form.elements.email.value;
      data.password = form.elements.password.value;
      
      console.log(data);
      form.reset();
    } else {
      alert(' заповніть всі поля!');
    } 
  });
