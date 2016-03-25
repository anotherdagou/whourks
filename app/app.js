var hoursConverter = (function() {
    var s, _root;
    var db = localStorage;


    // Private Function
    function getTime(time) {
        // Get the value of the input time
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

    // Private function only used in development  
    function deleteDb() {
        db.removeItem('Iva');
        db.removeItem('pricePerHour');
        db.removeItem('lightTheme');
    }

    // Public Functions and objects
    return {
        settings: {
            pricePerHour: document.getElementById('hourPrice'),
            ivaPercent: document.getElementById('iva'),
            ivaBreakDown: document.getElementById('ivaBreakDown'),
            parent: document.querySelector('.converter'),
            total: document.getElementById('total'),
            totalIva: document.getElementById('totalIva'),
            time: document.getElementById('time'),
            theme: document.querySelector('.theme'),
            lightTheme: document.getElementById('lightTheme'),
            settingsIcon: document.querySelector('.geomicon'),
            settingOptions: document.querySelector('.settings__options'),
            myDocument: document.documentElement
        },
        init: function() {
            _root = this;
             s = _root.settings;

             _root.loadSettings();
            _root.activeSettings();
            _root.forceCloseSettings();
            _root.changeTheme();
            _root.updateSettings();
            _root.getPrice();
        },
        getPrice: function() {
            s.parent.addEventListener('input', function(e){
                if (e.target !== e.currentTarget) {
                    var totalMinutes = _root.convertToMinutes(s.time.value);
                    var granTotal = (totalMinutes * s.pricePerHour.value) / 60;
                    var iva = (s.ivaPercent.value/100);
                    var granTotalIva = granTotal * (iva + 1);

                    // Update Values
                    s.total.innerHTML = "$" + granTotal.toFixed(2);
                    s.ivaBreakDown.innerHTML = "($" + granTotal * iva + ")";
                    s.totalIva.innerHTML = "$" + granTotalIva.toFixed(2);
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
        activeSettings: function() {
            s.settingsIcon.addEventListener('click', function(e) {
                s.settingOptions.classList.toggle('settings__options--active');
            });
        },
        forceCloseSettings: function() {
            s.myDocument.addEventListener('click', function(e) {
                if (!e.target.classList.contains('geomicon') && !e.target.offsetParent.classList.contains('settings__options')) {
                    s.settingOptions.classList.remove('settings__options--active');
                }
            });
        },
        changeTheme: function() {
            s.theme.addEventListener('click', function() {
              this.classList.toggle('sun');
              s.parent.classList.toggle('converter--sun');

              if (s.parent.classList.length > 1) {
                s.lightTheme.checked = true;
                _root.updateSettings();
              } else {
                s.lightTheme.checked = false;
                _root.updateSettings();
              }
            });
        },
        loadSettings: function() {
            var getPricePerHour = db.getItem('pricePerHour');
            var getIva = db.getItem('Iva');
            var getTheme = db.getItem('lightTheme');

            // Set the default settings of the app
            // used when the user open the app for the first time
            if (getTheme === null) {
                var defaultPricePerHour = db.setItem('pricePerHour', '250');
                var defaultIva = db.setItem('Iva', '16');
                var defaultTheme = db.setItem('lightTheme', 'false');
                s.lightTheme.checked = db.getItem('lightTheme'); 
                s.pricePerHour.value = db.getItem('pricePerHour');
                s.ivaPercent.value = db.getItem('Iva'); 
            } else {
                if (getTheme === 'true') {
                    s.parent.classList.add('converter--sun');
                    s.theme.classList.add('sun');
                    s.lightTheme.checked = true;
                }
                s.pricePerHour.value = getPricePerHour;
                s.ivaPercent.value = getIva;
            }
        },
        updateSettings: function() {
            s.settingOptions.addEventListener('input', function(e) {
                if (e.target !== e.currentTarget) {
                    db.setItem('pricePerHour', s.pricePerHour.value);
                    db.setItem('Iva', s.ivaPercent.value);
                }
            });

            // Update the checked value of the theme
            db.setItem('lightTheme', s.lightTheme.checked);
        }

    };
}());

window.addEventListener('DOMContentLoaded', function() {
    hoursConverter.init();
});