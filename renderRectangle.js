
function renderRectangle(rectangle) {
    return `
        <div id="shape" style="width:${rectangle.width};
                    height:${rectangle.height};
                    background-color:${rectangle.color}">
            
            
        </div>
    `
}

function rectangle() {
    var content = document.getElementById('content');

    var rectangleAbstraction = {
        width: '100px',
        height: '200px',
        color: "#FF00FF"
    }

    content.innerHTML = renderRectangle(rectangleAbstraction);

}

