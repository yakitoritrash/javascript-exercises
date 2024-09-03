const leapYears = function(year) {
    const isDivisiblebyfour = year % 4 === 0;
    const isDivisiblebyhundred = year % 100 === 0;
    const isYearDivisibleByFourHundred = year % 400 === 0;


    if (isDivisiblebyfour && 
    (!isDivisiblebyhundred || isYearDivisibleByFourHundred)
    )
    {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
