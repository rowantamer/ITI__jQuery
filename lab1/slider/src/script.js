let flag =true;
let interval
function slider() {
    $current = $(".container img.active");
    if ($current.length === 0) {
        $(".container img:first-child").addClass("active");
    }
    else {
        $next = $current.removeClass("active").next();
        if ($next.length === 0) {
            $(".container img:first-child").addClass("active");
        } else {
            $next.addClass("active");
        }
    }
} 

function stop() {
    if (flag) {
        clearInterval(interval);
        $(".stop").text("continue");
        flag = false;
    } else {
        interval =setInterval(slider, 1000);
        $(".stop").text("stop");
        flag = true;
    }
}
interval = setInterval(slider, 1000);
$(".stop").on("click", stop)

