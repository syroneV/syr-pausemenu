$('body').hide();

window.addEventListener('message', (event) => {
    if (event.data.type === "ui") {
        if (event.data.status) {
            $('body').fadeIn();
        } else {
            $('body').fadeOut();
        }
    }
});

document.onkeydown = e => {
    if (e.keyCode === 27)
        $.post('http://syr-pausemenu/close', JSON.stringify({}));
}

document.onclick = e => {
    switch (e.target.id) {
        case "four": 
            $.post('http://syr-pausemenu/close', JSON.stringify({}));
            break;
        case "one":
            $.post('http://syr-pausemenu/map', JSON.stringify({}));
            break;
        case "two":
            $.post('http://syr-pausemenu/settings', JSON.stringify({}));
            break;
        case "three":
            $.post('http://syr-pausemenu/quit', JSON.stringify({}));
            break;
    }
}