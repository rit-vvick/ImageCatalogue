var rowElementJSON = [
    {
        "previewImage": "https://images.unsplash.com/photo-1561948955-570b270e7c36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        "title": "cat.jpeg"
    },
    {
        "previewImage": "https://images.unsplash.com/photo-1606787620819-8bdf0c44c293?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        "title": "a man and a woman trying to cook a meal together in a modern kitchen.jpg"
    },
    {
        "previewImage": "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        "title": "bali-kelingking-beach-plastic-removal-drive.key"
    },
    {
        "previewImage": "https://images.unsplash.com/photo-1623206837956-07dab21608f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        "title": "NextByk Investor Pitch 2022.ppt"
    },
    {
        "previewImage": "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        "title": "interns-performance-report-may-2022.key"
    }
];

var selectedIndex = 0;

const rowContainer = document.querySelector('.row-container');

const imageContainer = document.querySelector('.image-container');

const imageLabel = document.querySelector('.image-label');

var handleStateChange = (index) => {
    const prevIndex = selectedIndex;
    selectedIndex = index;
    imageContainer.style.backgroundImage = `url(${rowElementJSON[selectedIndex].previewImage})`;
    imageLabel.value = rowElementJSON[selectedIndex].title;
    rowElements[prevIndex].classList.remove('selected');
    rowElements[selectedIndex].classList.add('selected');
}


var hanldeElementClick = event => {
    const index = parseInt(event.currentTarget.dataset.index);
    handleStateChange(index);
}

var handleNameChange = (event) => {

}

var constructRow = rowDetails => {
    return `
        <div style="background-image: url(${rowDetails.previewImage});" class="row-image"></div>
        <div class="row-title">${rowDetails.title}</div>
    `;
}

var rowElements = rowElementJSON.map((row, index) => {
    const rowElement = document.createElement('div');
    rowElement.classList.add('row');
    rowElement.dataset.index = index;
    rowElement.innerHTML = constructRow(row);
    rowElement.onclick = hanldeElementClick;
    return rowElement;
});


rowElements.forEach(element => rowContainer.appendChild(element));

document.addEventListener('keydown', event => {
    switch (event.keyCode) {
        case 38:
            console.log("Up key is pressed");
            handleStateChange((selectedIndex+4)%5);
            break;
        case 40:
            console.log("Down key is pressed");
            handleStateChange((selectedIndex+1)%5);
            break;
        }
})

imageLabel.addEventListener('change', event => {
    rowElements[selectedIndex].innerText = event.target.value;
})

handleStateChange(0);


