/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

history.pushState("", document.title, window.location.pathname);

$( document ).ready(function() {

    console.log( "ready!" );
            var template=" <div id=\"imageHeader\" class=\"dimScreen\"><div style=\"margin:auto;margin-top:150px;align-content: center;text-align: center;\">"
                    + "<canvas id=\"coinAnimation\" style=\"background-color: #FFFFFF\"></canvas>"
                    +" </div></div>";

            var lastTime = 0;
            var vendors = ['ms', 'moz', 'webkit', 'o'];
            for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
                window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
                window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
                    || window[vendors[x]+'CancelRequestAnimationFrame'];
            }
            if (!window.requestAnimationFrame)
                window.requestAnimationFrame = function(callback, element) {
                    var currTime = new Date().getTime();
                    var timeToCall = Math.max(0,16- (currTime - lastTime));
                    var id = window.setTimeout(function() { callback(currTime + timeToCall); },
                        timeToCall);
                    lastTime = currTime + timeToCall;
                    return id;
                };
            if (!window.cancelAnimationFrame)
                window.cancelAnimationFrame = function(id) {
                    clearTimeout(id);
                };
            var coin,
                coinImage,
                canvas;
            // Get canvas
            $( "#toHide" ).hide();
            $("body").append(template);

            canvas = document.getElementById("coinAnimation");
            canvas.width = 200;
            canvas.height = 200;
            // Create sprite sheet
            coinImage = new Image();
            // Create sprite
            coin = sprite({
                context: canvas.getContext("2d"),
                width: 2000,
                height: 200,
                image: coinImage,
                numberOfFrames: 10,
                ticksPerFrame: 4
            });
            // Load sprite sheet
            coinImage.addEventListener("load", gameLoop);
            coinImage.src = "./img/ll.png";
            function gameLoop () {
                window.requestAnimationFrame(gameLoop);
                coin.update();
                coin.render();
            }
            function sprite (options) {
                var that = {},
                    frameIndex = 0,
                    tickCount = 0,
                    ticksPerFrame = options.ticksPerFrame || 0,
                    numberOfFrames = options.numberOfFrames || 1;
                that.context = options.context;
                that.width = options.width;
                that.height = options.height;
                that.image = options.image;
                that.update = function () {
                    tickCount += 1;
                    if (tickCount > ticksPerFrame) {
                        tickCount = 0;
                        // If the current frame index is in range
                        if (frameIndex < numberOfFrames - 1) {
                            // Go to the next frame
                            frameIndex += 1;
                        } else {
                            frameIndex = 0;
                        }
                    }
                };
                that.render = function () {
                    // Clear the canvas
                    that.context.clearRect(0, 0, that.width, that.height);
                    // Draw the animation
                    that.context.drawImage(
                        that.image,
                        frameIndex * that.width / numberOfFrames,
                        0,
                        that.width / numberOfFrames,
                        that.height,
                        0,
                        0,
                        that.width / numberOfFrames,
                        that.height);
                };
                return that;
            }
            document.getElementById('coinAnimation').onclick = function(event) {
                $("#imageHeader").fadeOut("slow", function() {
                    $(this).remove();
                });
                $("#toHide").fadeIn(5000, function() {
                    $(this).show();
                }).delay(30000);
            };
        setTimeout(function() {
            $("#imageHeader").fadeOut("slow", function() {
                $(this).remove();
            });
            $("#toHide").fadeIn(5000, function() {
                $(this).show();
            }).delay(30000);

        },10000);

});


function send(){
    alert('da implemnetare invio email');
}