var chocolateBars = ["snickers", "hundred grand","kitkat", "skittles"];
function addElementToBeginningOfArray(array, element){return [element,...array];
}
function destructivelyAddElementToBeginningOfArray(array, element)
{array.unshift(element);return array}

function addElementToEndOfArray(array, element){aaray.push(element);
return array}