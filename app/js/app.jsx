import React from 'react';
import ReactDom from 'react-dom';
import TitleBar from './title-bar';
import Converter from './converter';
  


/*
 * Private function for clean localStorage
 * Only used for debugging
 */
function deleteDb() {
    localStorage.removeItem('price');
    localStorage.removeItem('iva');
    localStorage.removeItem('theme');
}



/*
 * Global Vars
 */
var db = localStorage;



/*
 * Main Component 
 */
var ConverterHours = React.createClass({
    loadSettings: function(){
        
        // Default Settings
        var theme = 'moon';
        var iva = 16;
        var price = 250;
        var hours = 0;

        // Check if settings exist in localStorage
        if (!db.getItem('theme')) {
            // Create and save default settings in localStorage 
            db.setItem('theme', theme);
            db.setItem('iva', iva);
            db.setItem('price', price);
        } else {
            // Get settings from localStorage
            theme = db.getItem('theme');
            iva = db.getItem('iva');
            price = db.getItem('price');
        }

        return {theme, iva, price}
    },
    getInitialState: function() {
        // Get Settings using ES6 Destructuring
        var {theme, iva, price} = this.loadSettings();

        return {
            total: '0.00',
            ivaBreak: '0.00',
            totalIva: '0.00',
            hours: '',
            // Set Settings of the App
            theme: theme,
            iva: iva,
            price: price
        };
    },
    getTime: function(time) {
        // Get the value of the input time
        // if the string have the character : this return and array 
        // with 2 elements [0] for hours and [1] for minutes 
        var pattern = /(\d+)|(\d+)/g; 
        var matched = time.match(pattern);

        // Return 0 when the input time is empty
        if (matched === null) {
            return matched = [0];
        } else { 
            var [h,m] = matched;
            return [h,m];
        }
    },
    /*
     * Convert Time in h:m format and convert to minutes
     */
    convertToMinutes: function(time) {
        // Set m=0 when the user only type hours
        var [h,m=0] = this.getTime(time);
        var hour = h * 60;
        var minute = m * 1;
        var totalMinutes;

        totalMinutes = hour + minute;

        return totalMinutes;
    },
    /*
     * Main function to get Time and convert to money
     */
    getPrice: function(time, pricePerHour = this.state.price , iva = this.state.iva) {
        var totalMinutes = this.convertToMinutes(time);
        var granTotal = ((totalMinutes * pricePerHour) / 60).toFixed(2);
        var iva = (iva/100);
        var granTotalIva = (granTotal * (iva + 1)).toFixed(2);
        var ivaBreakDown = (granTotal * iva).toFixed(2)
       
        // Show the result of you working time in money 
        // with react states 
        this.setState({
            hours: time,
            total: granTotal,
            totalIva: granTotalIva,
            ivaBreak: ivaBreakDown
        });
    },
    /*
     * Update settings
     */
    updateSettings: function(e) {
        var pricePerHour, iva;

        // I don't like this solution for update the state of the elements in settings
        switch(e.target.id) {
            case 'theme':
                var currentTheme = this.state.theme === 'moon' ? 'sun' : 'moon';
                this.setState({ theme: currentTheme });
                db.setItem('theme', currentTheme);
                break;
            case 'hourPrice':
                this.setState({ price: e.target.value });
                // By default when we update the a state, this no mutate to
                // the new value, so we use e.target.value 
                // to get the current value of the element
                pricePerHour = e.target.value;
                db.setItem('price', pricePerHour);
                break;
            case 'iva':
                this.setState({ iva: e.target.value });
                // By default when we update the a state, this no mutate to
                // the new value, so we use e.target.value 
                // to get the current value of the element
                iva = e.target.value;
                db.setItem('iva', iva);
                break;
        }
        
        // Update the price of our work
        this.getPrice(this.state.hours, pricePerHour, iva);
    },
    render: function() {
        // Asign a class to change the template
        var theme = this.state.theme === 'moon' ? 'converter' : 'converter converter--sun';
        return (
            <div className={theme} ref="theme">
                <TitleBar 
                    handleSettings={this.updateSettings}
                    theme={this.state.theme} 
                    iva={this.state.iva}
                    price={this.state.price}
                />
                <Converter 
                    total={this.state.total} 
                    totalIva={this.state.totalIva} 
                    ivaBreakDown={this.state.ivaBreak} 
                    onUserInputHours={this.getPrice}
                />
            </div>
        );
    }
});

ReactDom.render( 
    <ConverterHours />,
    document.querySelector('.app')
);