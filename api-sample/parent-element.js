document.addEventListener('click', function(event) {
    // Check if the clicked element is a button
    if (event.target && event.target.matches('.del-action')) {
        // Find the closest div to the clicked button
        let divEle = event.target.closest('div.container');
        let sectionCon = divEle.closest('section.content');

        console.log(divEle);
        console.log(sectionCon);

        sectionCon.removeChild(divEle);

        // if (parentDiv) {
        //     alert(`Button clicked in ${parentDiv.id}`);
        //     // Your code here. You can now use parentDiv to refer to the specific div
        // }
    }
});