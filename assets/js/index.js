var templateParams = {
    name: 'James',
    notes: 'Check this out!'
};
 
emailjs.sendForm('service_0od9jlw', 'template_cqytes3', templateParams) //use your Service ID and Template ID
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });

