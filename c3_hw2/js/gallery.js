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
    for (let index = 0; index < images.length; ++index) {
        const image = images[index];
        for (let focusEventName of ['mouseover', 'focus']) {
            image.addEventListener(focusEventName, () => upDate(focusEventName, image));
        }
        for (let lostFocusEventName of ['mouseout', 'blur']) {
            image.addEventListener(lostFocusEventName, () => unDo(lostFocusEventName, image));
        }
        image.setAttribute("tabindex", "0");
    }
    const imageDiv = document.getElementById('image');
    imageDiv.setAttribute("tabindex", "-1");
}
