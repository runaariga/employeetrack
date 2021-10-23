// Create an array of time blocks
var timeblocks = [9, 10, 11, 12, 13, 14, 15]

//Using moment js decide weather or not the time in the array is the past, present or future
function pastPresentFuture(hour) {
    // past, present, future

    return moment().hour() < hour ? "future" : moment().hour() === hour ? "present" : "past"
}

function saveEvent(event) {
  // Save to local stoarage the event at a certain time.
}

var blocks = $('#timeblocks');
for (var i = 0; i < timeblocks.length; i++) {
  blocks.append(`
  <textarea class="${pastPresentFuture(timeblocks[i])}" />
  `)
}