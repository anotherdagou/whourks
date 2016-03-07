var hoursConverter = (function() {
    var s, _root;

    // Private Function
    function getTime(time) {
        // Write the value of the input time
        // if the string have the character : this return and array 
        // with 2 elements [0] for hours and [1] for minutes 
        var pattern = /(\d+)|(\d+)/g; 
        var matched = time.match(pattern);
        var hoursMinutes = [] ;

        // Return 0 when the input time is empty
        if (matched === null) {
            return hoursMinutes.concat([0]);
        } else {
            matched.forEach( function(element) {
                hoursMinutes.push(element);
            }); 

            return hoursMinutes;
        }
    }

    // Public Functions and objects
    return {
        settings: {
            pricePerHour: document.getElementById('hourPrice'),
            parent: document.querySelector('.converter'),
            total: document.querySelector('.total'),
            time: document.getElementById('time'),
            moon: document.querySelector('.moon')
        },
        init: function() {
            _root = this;
             s = _root.settings;

            _root.getPrice();
            _root.changeTheme();
        },
        getPrice: function() {
            s.parent.addEventListener('input', function(e){
                if (e.target !== e.currentTarget) {
                    var totalMinutes = _root.convertToMinutes(s.time.value);
                    var granTotal = (totalMinutes * s.pricePerHour.value) / 60;
                    s.total.innerHTML = "$" + granTotal.toFixed(2);
                }           
            });
        },
        convertToMinutes: function(time) {
            var workedTime = getTime(time);
            var hour = workedTime[0] * 60;
            var minute = workedTime[1] * 1;
            var totalMinutes;

            (workedTime.length === 1) ? (totalMinutes = hour) : (totalMinutes = hour + minute);

            return totalMinutes;
        },
        changeTheme: function() {
            s.moon.addEventListener('click', function() {
              this.classList.toggle('moon');
              s.parent.classList.toggle('converter--sun')
            });
        }
    };
}());

window.addEventListener('DOMContentLoaded', function() {
    hoursConverter.init();
});