/**
 * @file
 * Adds 15 minute increment buttons to the default time field in Drupal 7's Date module.
 *
 */
 
window.onload = function () {
  var controls = '<div class="time-up"><i class="fa fa-caret-up" aria-hidden="true"></i></div><div class="time-down"><i class="fa fa-caret-down" aria-hidden="true"></i></div>';
  jQuery('[id*="-timepicker-"]').after(controls);

  jQuery('.time-up').click(function (){
  	var input = jQuery(this).prev('input');
  	var current_time = input.val();
    var d = addMinutes(createDate(current_time), 15);
    input.val(createDisplayTime(d));
  });

  jQuery('.time-down').click(function (){
  	var input = jQuery(this).prev('.time-up').prev('input');
  	var current_time = input.val();
    var d = addMinutes(createDate(current_time), -15);
    input.val(createDisplayTime(d));
  });
}

function createDate(current_time){
  var split_time = current_time.split(':');
  var hours = parseInt(split_time[0]);
  if(split_time[1].substring(2) == 'PM' && hours < 12){
  	hours += 12;
	} else if(split_time[1].substring(2) == 'AM' && hours == 12){
		hours = 0;
  }
  var minutes = parseInt(split_time[1].replace('[A-Za-z]', ''));

  return new Date('1970', '01', '01', hours, minutes, 0, 0);
}

function addMinutes(date, minutes) {
	return new Date(date.getTime() + minutes*60000);
}

function createDisplayTime(date){
	var display_h = 0;
  var display_m = "";
  var ampm = "";
  if(date.getHours() > 12){
  	display_h = date.getHours() - 12;
    ampm = "PM";
  } else if(date.getHours() == 12){
  	display_h = date.getHours();
    ampm = "PM";
	} else if(date.getHours() == 0){
  	display_h = 12;
    ampm = "AM";
	} else{
  	display_h = date.getHours();
    ampm = "AM";
  }
  if(date.getMinutes() == 0){
  	display_m = '00';
	} else {
  	display_m = ''+date.getMinutes();
  }
  return display_h+":"+display_m+ampm;
}
