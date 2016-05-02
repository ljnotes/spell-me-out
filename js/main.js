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
    appName: "Spell-me-out!", 
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
    
    // Get the spell out text data for the passed in text. 
    // @param {String}: Input text
    // @return {Array}: Array holding data for each letter in the text
    var getSpellOutTextData = function(inputText) {
        
        var data = [];
        var smeData = globalObject.smeData;
        
        if(inputText && smeData) {
            
            var letters = inputText.split('');
            var letter = null;
            var letterObj = null;
            
            for(var i=0; i < letters.length; i++) {
                
                letter = letters[i];
                letterObj = null;
                
                // white-space
                if(textTrim(letter) == '') {
                    data.push(letterObj || {spell: "\r\n", letter: " "});
                }
                else { // not white-space
                    letterObj = smeData[letter.toLowerCase()];
                    data.push(letterObj || {spell: letter, letter: letter});
                }
            } 
        }
        
        return data;
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
        
        // The letters
        this.smeLetters = ko.observableArray(getSpellOutTextData(defaultInput));
        
        // Subscribe to the changes in smeInput
        this.smeInput.subscribe(function (newValue) {
            
            // Clear the letters
            this.smeLetters([]);
            
            // Add new letters
            var letterData = getSpellOutTextData(newValue);
            for(var i=0; i < letterData.length; i++) {
                this.smeLetters.push(letterData[i]);
            }
            
        }, this); 
    };
    
    // On document ready
    $(document).ready(function() {
        
        // bind the model to application view
        ko.applyBindings(new smeAppViewModel(""));
    });

})(ljnotes);