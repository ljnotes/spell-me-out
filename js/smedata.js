/*!
 * Author: LJ
 * Date: 30-April-2016
 * Version: 1.0
 * Description: Holds the data for Spell-me-out app
 */

// Set the data for the application. 
(function(globalObj){
    
    var smeData = {
        a: {spell: "Alpha", letter: 'a'}, 
        b: {spell: "Bravo", letter: 'b'}, 
        c: {spell: "Charlie", letter: 'c'},
        d: {spell: "Delta", letter: 'd'}, 
        e: {spell: "Echo", letter: 'e'}, 
        f: {spell: "Foxtrot", letter: 'f'}, 
        g: {spell: "Golf", letter: 'g'}, 
        h: {spell: "Hotel", letter: 'h'}, 
        i: {spell: "India", letter: 'i'},   
        j: {spell: "Juliet", letter: 'j'}, 
        k: {spell: "Kilo", letter: 'k'}, 
        l: {spell: "Lima", letter: 'l'}, 
        m: {spell: "Mike", letter: 'm'}, 
        n: {spell: "November", letter: 'n'}, 
        o: {spell: "Oscar", letter: 'o'}, 
        p: {spell: "Papa", letter: 'p'}, 
        q: {spell: "Quebec", letter: 'q'}, 
        r: {spell: "Romeo", letter: 'r'}, 
        s: {spell: "Sierra", letter: 's'}, 
        t: {spell: "Tango", letter: 't'}, 
        u: {spell: "Uniform", letter: 'u'}, 
        v: {spell: "Victor", letter: 'v'}, 
        w: {spell: "Whisky", letter: 'w'}, 
        x: {spell: "X-ray", letter: 'x'}, 
        y: {spell: "Yankee", letter: 'y'}, 
        z: {spell: "Zulu", letter: 'z'}
    };
    
    // Set the data to the object
    if(globalObj) {
       globalObj.smeData = smeData; 
    }
})(window.ljnotes);