/*!
 * Author: LJ
 * Date: 30-April-2016
 * Version: 1.0
 * Description: Holds the data for Spell-me-out app
 */

// Set the data for the application. 
(function(globalObj){
    
    var smeData = {
        a: {spell: "Alpha"}, 
        b: {spell: "Bravo"}, 
        c: {spell: "Charlie"},
        d: {spell: "Delta"}, 
        e: {spell: "Echo"}, 
        f: {spell: "Foxtrot"}, 
        g: {spell: "Golf"}, 
        h: {spell: "Hotel"}, 
        i: {spell: "India"},   
        j: {spell: "Juliet"}, 
        k: {spell: "Kilo"}, 
        l: {spell: "Lima"}, 
        m: {spell: "Mike"}, 
        n: {spell: "November"}, 
        o: {spell: "Oscar"}, 
        p: {spell: "Papa"}, 
        q: {spell: "Quebec"}, 
        r: {spell: "Romeo"}, 
        s: {spell: "Sierra"}, 
        t: {spell: "Tango"}, 
        u: {spell: "Uniform"}, 
        v: {spell: "Victor"}, 
        w: {spell: "Whisky"}, 
        x: {spell: "X-ray"}, 
        y: {spell: "Yankee"}, 
        z: {spell: "Zulu"}
    };
    
    // Set the data to the object
    if(globalObj) {
       globalObj.smeData = smeData; 
    }
})(window.ljnotes);