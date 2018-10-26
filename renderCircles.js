
function renderCircles(circles) {
    // HINT: You probably need to write a for loop!
    //       Or, if you're feeling fancy, use .map() 
    return `
        <div class="text-center mt-5">
            <code>${JSON.stringify(circles)}</code>
        </div>
    `
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