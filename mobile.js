window.addEventListener('touchstart', handleTouchStart, false);        
window.addEventListener('touchmove', handleTouchMove, false);
window.addEventListener('touchmove', function(event) {
    event.preventDefault();
}, { passive: false });

let xDown = null;                                                        
let yDown = null;                                                        

function handleTouchStart(evt) {                                         
    const firstTouch = evt.touches[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                

function handleTouchMove(evt) {
    if (!xDown || !yDown) {
        return;
    }

    let xUp = evt.touches[0].clientX;                                    
    let yUp = evt.touches[0].clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 0) {
            snake.changeDirection('Left');
        } else {
            snake.changeDirection('Right');
        }                       
    } else {
        if (yDiff > 0) {
            snake.changeDirection('Up');
        } else { 
            snake.changeDirection('Down');
        }                                                                 
    }
    xDown = null;
    yDown = null;                                             
};
