function upDate(eventName, previewPic) {
    console.log(`${eventName} calls upDate on image with alt text: "${previewPic.alt}"`)
    const image = document.getElementById('image')
    image.style.backgroundImage = `url(${previewPic.src})`
    image.innerHTML = previewPic.alt
}

function unDo(eventName, previewPic) {
    console.log(`${eventName} calls unDo on image with alt text: "${previewPic.alt}"`)
    const image = document.getElementById('image');
    image.style.backgroundImage = `url('')`
    image.innerHTML = 'Hover over an image below to display here.'
}

function setupListeners() {
    const images = document.getElementsByClassName("preview");
    for (let image of images) {
        for (let focusEventName of ['mouseover', 'focus']) {
            image.addEventListener(focusEventName, () => upDate(focusEventName, image));
        }
        for (let lostFocusEventName of ['mouseout', 'blur']) {
            image.addEventListener(lostFocusEventName, () => unDo(lostFocusEventName, image));
        }
        image.setAttribute("tabIndex", "2");
    }
    const image = document.getElementById('image');
    image.setAttribute("tabIndex", "1");
}
