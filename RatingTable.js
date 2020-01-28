let sortDirect = false;
let profData = [
    { name: 'Abdul', rating: '2.7', university: 'RIT', course: 'Yeet' },
    { name: 'Desell', rating: '3.4', university: 'RIT', course: 'Yeet' },
    { name: 'Martinez', rating: '4.0', university: 'RIT', course: 'Yeet' },
    { name: 'Travis', rating: '4.5', university: 'RIT', course: 'Yeet' },
    { name: 'Keith', rating: '2.7', university: 'RIT', course: 'Yeet' }
];

window.onload = () => {
    generateTable(profData);
}

function generateTable(profData) {
    const tableBody = document.getElementById('professor_data');
    let profHtml = '';

    for (let p of profData) {
        profHtml += `<tr><td>${p.name}</td><td>
        ${p.rating}</td><td>${p.university}</td><td>${p.course}</td></tr>`;
    }

    console.log(profHtml);
    tableBody.innerHTML = profHtml;
}