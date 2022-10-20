function spinRight() {
    let activeItem = document.getElementsByClassName('portfolio__img active')[0];
    let nextActiveItem = activeItem.nextElementSibling;

    if (nextActiveItem === null) {
        nextActiveItem = document.getElementsByClassName('portfolio__img')[0]
    }

    activeItem.className = 'portfolio__img';
    nextActiveItem.className = 'portfolio__img active';
}

function spinLeft() {
    let activeItem = document.getElementsByClassName('portfolio__img active')[0];
    let nextActiveItem = activeItem.previousElementSibling;

    if (nextActiveItem === null) {
        nextActiveItem = document.getElementsByClassName('portfolio__img')[document.getElementsByClassName('portfolio__img').length - 1]
    }

    activeItem.className = 'portfolio__img';
    nextActiveItem.className = 'portfolio__img active';
}