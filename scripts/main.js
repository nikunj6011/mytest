$(document).ready(function () {
    if ($(window).width() < 992) {
        $(".player2").hide();
    }

    $('.liHillary').click(function (evt) {
        $('#divhc').show();
        $('#divWinPollPlayer1').show();
        $('#divMobilewProgressPlayer1').show();
        $('#divDesktopProgressPlayer1').show();
        $('#divPollDesktopPlayer1').show();
        $('#divPollMobPlayer1').show();
        $('#divProgressDesktopPlayer1').show();
        $('#divTweetPlayer1').show();


        $('#divdd').hide();
        $('#divWinPollPlayer2').hide();
        $('#divMobilewProgressPlayer2').hide();
        $('#divDesktopProgressPlayer2').hide();
        $('#divPollDesktopPlayer2').hide();
        $('#divPollMobPlayer2').hide();
        $('#divProgressDesktopPlayer2').hide();
        $('#divTweetPlayer2').hide();

        setoffset();
    });

    $('.liDonald').click(function (evt) {
        $('#divhc').hide();
        $('#divWinPollPlayer1').hide();
        $('#divMobilewProgressPlayer1').hide();
        $('#divDesktopProgressPlayer1').hide();
        $('#divPollDesktopPlayer1').hide();
        $('#divPollMobPlayer1').hide();
        $('#divProgressDesktopPlayer1').hide();
        $('#divTweetPlayer1').hide();



        $('#divdd').show();
        $('#divWinPollPlayer2').show();
        $('#divMobilewProgressPlayer2').show();
        $('#divDesktopProgressPlayer2').show();
        $('#divPollDesktopPlayer2').show();
        $('#divPollMobPlayer2').show();
        $('#divProgressDesktopPlayer2').show();
        $('#divTweetPlayer2').show();
        setoffset();
    });

    setoffset();

    $(".left-Tabs li").click(function () {
        $(".left-Tabs li").removeClass("active")
        $(this).addClass("active");
    })
    $(".right-Tabs li").click(function () {
        $(".right-Tabs li").removeClass("active")
        $(this).addClass("active");
    })
    $(window).resize(function () {
        if ($(window).width() < 992) {
            //$(".player2").hide();
            $('.liHillary').click();
        }
        else {
            $(".player1").show();
            $(".player2").show();
        }
        setoffset();
    })
})
function setoffset() {
    if ($(window).width() < 992) {
        $(".conuters").addClass("col-sm-offset-2");
        $(".name-title").addClass("col-sm-offset-2");
        $(".btn-nametitle").addClass("col-sm-offset-2");
        $(".tweet-tab").addClass("col-sm-offset-2")
        $("#divDD").addClass("col-xs-offset-3");
        $("#divDD").addClass("col-sm-offset-4");
    }
    else {
        $(".conuters").removeClass("col-sm-offset-2")
        $(".name-title").removeClass("col-sm-offset-2");

        $(".btn-nametitle").removeClass("col-sm-offset-2");
        $(".tweet-tab").removeClass("col-sm-offset-2")

        $("#divDD").removeClass("col-xs-offset-3");
        $("#divDD").removeClass("col-sm-offset-4");
    }
}