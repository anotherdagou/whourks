import React from 'react';

// Converter Component
var Converter = React.createClass({
    handleInput: function(e) {
        this.props.onUserInputHours(e.target.value);
    },
    render: function() {
        return (
            <div>
                <div className="converter__item">
                    <label htmlFor="time">Tiempo trabajado</label>
                    <div>
                        <input type="text" id="time" placeholder="HH:MM" onChange={this.handleInput}/> 
                    </div>
                </div>
                <div className="converter__item total-wrapper">
                    <label>Total</label>
                    <div id="total">${this.props.total}</div>
                </div>
                 <div className="converter__item total-wrapper">
                    <label>Total + Iva <span id="ivaBreakDown">(${this.props.ivaBreakDown})</span></label>
                    <div id="totalIva">${this.props.totalIva}</div> 
                </div>
            </div>
        );
    }
});

module.exports = Converter;