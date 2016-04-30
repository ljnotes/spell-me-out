/*!
 * Author: LJ
 * Date: 30-April-2016
 * Version: 1.0
 * Description: Holds the main JS functions associated with the application. 
 */

/*!
 * Define the global object - ljnotes 
 */
var ljnotes = {
    app: "sme", // spell-me-out
    version: 1, 
    appName: "LJNotes Spell-me-out!"
};

/*!
 * Do the initializations 
 */
(function(globalObject) {
    
    // Locals.
    var inputLabelText = "Input the text to spell out"
    
    // Set the spell-me-out context view-model
    var smeAppViewModel = function(defaultInput) {
        
        var self = this;
        
        // Set the application name
        this.appName = globalObject.appName;
        
        // Input label text
        this.smeInputLabelText = inputLabelText;
        
        // Input data
        this.smeInput = ko.observable(defaultInput || "");
        
        // Input data length 
        this.smeInputLength = ko.computed(function () {
            return this.smeInput().length; 
        }, this);
    };
    
    // on document ready
    $(document).ready(function(){
        
        // bind the model to the sme UI context
        ko.applyBindings(new smeAppViewModel(""));
        
    });
    
})(ljnotes);