
function makeSingleCircle (circle) {
    return `<div class="circle" style="width:${circle.radius};
    height:${circle.radius};
    background:${circle.color};
    border-radius:50%">
</div>`
}

function renderCircles(circles) {
    return circles.map(makeSingleCircle).join('')


    // var i;
    // var htmlString = ""
    // for (i = 0; i < circles.length; i++) { 
    //   htmlString += `<div class="circle" style="width:${circles[i].radius};
    //                                             height:${circles[i].radius};
    //                                             background:${circles[i].color};
    //                                             border-radius:50%">
    //                 </div>`
    // }
    // return htmlString;
}

function circles() {
    var content = document.getElementById('content');    
    var circlesAbstraction = [
        {
            radius: '50px',
            color: "#FF00FF"
        },
        {
            radius: '30px',
            color: "#FF99AA"
        },
        {
            radius: '60px',
            color: "#0000FF"
        },
        {
            radius: '10px',
            color: "#000000"
        },
    ];

    content.innerHTML = renderCircles(circlesAbstraction);

}