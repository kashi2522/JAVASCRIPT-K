// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS(IIFE)

(function ram(){
    console.log("DB Connected");
})();

(function rom(){
    console.log("DB Connected");
})();

( (name) =>{     // in this code aaplya manavar aahe function dyach ka nahi,tas pn chalat
    console.log(`my name is ${name}`);  // ethe bracket made (``) ya symbol cha use kartat
})("KASHI");