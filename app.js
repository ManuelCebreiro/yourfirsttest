//const sum = (a,b) => {return a + b}
//console.log(sum(7,3))
//module.exports = { sum };



let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}


function fromEuroToDollar(euro){
return  euro*1.2
}
    console.log(fromEuroToDollar(4))


function fromDollarToYen(dollar){
   return (dollar/1.2)*135.47
}
    console.log(fromDollarToYen(4))

function fromYanToPound(yen){
    return (yen/127.9)*0.8
}
    
    console.log(fromYanToPound(4))


module.exports = { fromEuroToDollar, fromDollarToYen, fromYanToPound };
