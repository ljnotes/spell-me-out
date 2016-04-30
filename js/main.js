/*!
 * Author: LJ
 * Date: 30-April-2016
 * Version: 1.0.0
 * Description: Holds the main JS functions associated with the application. 
 */

/*!
 * Define the global object - ljnotes 
 */
var ljnotes = {
    app: "sme", // spell-me-out
    appName: "LJNotes Spell-me-out!", 
    version: "1.0.0"
};

/*!
 * Do the initializations 
 */
(function(globalObject) {
    
    // Locals.
    var inputLabelText = "Input the text to spell out";
    
    // Description: Trim the white-spaces from the passed in string
    var textTrim = function(text) {
        
        var newText = text;
        if(text) {
            newText = text.replace(/^\s+|\s+$/gm,''); 
        }
        return newText;
    };
    
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
        
        // Get the spell-out text for the letter
        this.spellOutText = ko.computed(function (letter) {
            
            var textObj, 
                text  = null;
            
            // If we have a letter and we have the letter dictionary
            if(letter && textTrim(letter) != '' && globalObject.smeData) {
                textObj = globalObject.smeData[letter];
                if(textObj) { 
                    text = textObj.spell;
                }
            }
            
            return text; 
            
        }, this);
    };
    
    // bind the model to application view
    ko.applyBindings(new smeAppViewModel());

})(ljnotes);