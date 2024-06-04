 // Obtener el campo de fecha
 var dateInput = document.getElementById('date');

 // Obtener la fecha actual en formato YYYY-MM-DD
 var today = new Date();
 var dd = String(today.getDate()).padStart(2, '0');
 var mm = String(today.getMonth() + 1).padStart(2, '0'); // Enero es 0!
 var yyyy = today.getFullYear();
 var currentDate = yyyy + '-' + mm + '-' + dd;

 // Establecer el valor mínimo para el campo de fecha
 dateInput.setAttribute('min', currentDate);


 //VAlidacion de la hora 

 var timeInput = document.getElementById('time');

 timeInput.setAttribute('min', '10:00');
 timeInput.setAttribute('max', '22:00');

 timeInput.setAttribute('step', '900');

 timeInput.addEventListener('input', function() {
     var value = this.value;
     if (value < '10:00' || value > '22:00') {
         this.setCustomValidity('La hora debe estar entre las 10:00 AM y las 10:00 PM.');
     } else if (value.slice(-2) % 15 !== 0) {
         this.setCustomValidity('La hora debe estar en intervalos de 15 minutos.');
     } else {
         this.setCustomValidity('');
     }
 });

 timeInput.addEventListener('invalid', function(event) {
     var value = this.value;
     if (value < '10:00' || value > '22:00') {
         event.target.setCustomValidity('La hora debe estar entre las 10:00 AM y las 10:00 PM.');
     } else {
         event.target.setCustomValidity('Por favor ingrese un valor válido. Los dos valores válidos más cercanos son ' + nearestValidTimes(value) + '.');
     }
 });

 function nearestValidTimes(time) {
     var minutes = parseInt(time.slice(-2)); 
     var nearestMinutes = Math.round(minutes / 15) * 15; 
     if (nearestMinutes === 60) {
         nearestMinutes = '00';
     }
     var nearestTime1 = time.slice(0, -2) + '' + nearestMinutes;
     var nearestTime2 = time.slice(0, -2) + '' + (nearestMinutes + 15);
     return nearestTime1 + ' y ' + nearestTime2;
 }