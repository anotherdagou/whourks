import React from 'react';
  

// Settings Component
var Settings = React.createClass({
    showSettings: function() {
        this.refs.settingsOptions.classList.toggle('settings__options--active');
    },
    updateSettings: function(e) {
        this.props.handleSettings(e);
    },
    render: function() {
        var theme = this.props.theme === 'moon' ? 'theme': 'theme sun';
        return (
            <div className="settings">
                <div className="geomicon" onClick={this.showSettings}>
                    <svg className="js-geomicon geomicon" data-icon="cog" viewBox="0 0 32 32" style={{fill:this.props.color}}><title>cog icon</title><path d="M14 0 H18 L19 6 L20.707 6.707 L26 3.293 L28.707 6 L25.293 11.293 L26 13 L32 14 V18 L26 19 L25.293 20.707 L28.707 26 L26 28.707 L20.707 25.293 L19 26 L18 32 L14 32 L13 26 L11.293 25.293 L6 28.707 L3.293 26 L6.707 20.707 L6 19 L0 18 L0 14 L6 13 L6.707 11.293 L3.293 6 L6 3.293 L11.293 6.707 L13 6 L14 0 z M16 10 A6 6 0 0 0 16 22 A6 6 0 0 0 16 10"></path></svg>
                </div>
                <div className="settings__options" ref="settingsOptions">
                    <div className="option">
                        <span className="option__label">Template</span>
                        <span id="theme" className={theme} onClick={this.updateSettings}></span>
                    </div>
                    <div className="option">
                        <span className="option__label">Precio x hora</span>
                        <input id="hourPrice" className="option__input" type="number" value={this.props.price} onChange={this.updateSettings}/>
                    </div>
                    <div className="option">
                        <span className="option__label">Iva (%)</span>
                        <input id="iva" className="option__input" type="number" value={this.props.iva} onChange={this.updateSettings}/>
                    </div>
                </div>
            </div>
        );
    }
});

// Title Bar Component
var TitleBar = React.createClass({
    render: function() {
        return (
            <div className="app-title-bar">
                <span className="title"> Whourks</span>
                <Settings 
                    color="currentcolor" 
                    handleSettings={this.props.handleSettings}
                    theme={this.props.theme}
                    iva={this.props.iva}
                    price={this.props.price}
                />
            </div>
        );
    }
});

module.exports = TitleBar;
