function addMoreDivs(count) {
    const container = document.getElementById('layout7');

    for (let i = 1; i <= count; i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('caja');
        
        const colors = ['red', 'green', 'blue', 'violet'];
        const colorIndex = i % colors.length;
        newDiv.classList.add(colors[colorIndex]);

        newDiv.textContent = `Caja nueva ${i}`;

        container.appendChild(newDiv);
    }
}
