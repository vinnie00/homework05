    $('.save').on('click', function(){
        var timeEvent = $(this).parent().parent().children("input").attr("id")
        var inputValue = $("#"+timeEvent).val()
        localStorage.setItem(timeEvent, inputValue)
        
    })
    $(document).ready(function(){
        var localValue = localStorage.getItem('8am')
        $('#8am').val(localStorage.getItem('8am'))
        $('#9am').val(localStorage.getItem('9am'))
        $('#10am').val(localStorage.getItem('10am'))
        $('#11am').val(localStorage.getItem('11am'))
        $('#12am').val(localStorage.getItem('12am'))
        $('#1pm').val(localStorage.getItem('1pm'))
        $('#2pm').val(localStorage.getItem('2pm'))
        $('#3pm').val(localStorage.getItem('3pm'))
        $('#4pm').val(localStorage.getItem('4pm'))
        $('#5pm').val(localStorage.getItem('5pm'))
        timeUpdate()
    })
    function timeUpdate(){
        var currentTime = moment().hours()
        let currentTimeString = currentTime.toString()
        if(currentTime > 12){
            currentTime -= 12
            currentTimeString = currentTime.toString()
            currentTimeString += "pm"
        } else {
            currentTimeString += "am"
        }
        $('input').each(function(){
            let currentID = $(this).attr('id')
            if(currentTimeString === currentID){
                $(this).addClass('present')
            }
            else if (moment(currentTimeString, "hh a").format("HH") > (moment(currentID, "hh a").format("HH"))){
                $(this).addClass('past')
            }
            else {
                $(this).addClass('future')
            }
        })

    }


//}
