export function generateTable(profData) {
    const tableBody = document.getElementById('professor_data');
    let profHtml = '';

    for (let p of profData) {
        profHtml += `<tr><td>${p.name}</td><td>
        ${p.rating}</td><td>${p.university}</td><td>${p.course}</td></tr>`;
    }

    console.log(profHtml);
    tableBody.innerHTML = profHtml;
}