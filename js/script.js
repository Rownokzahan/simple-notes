document.getElementById('add-note').addEventListener('click', function () {
    const noteText = document.getElementById('note').value;
    if (noteText.length < 20) {
        alert('Please enter at least 20 characters');
        return;
    }
    const note = document.createElement('div');
    note.classList.add('flex', 'gap-6', 'justify-between', 'bg-white', 'rounded-md', 'p-4');
    note.innerHTML =
        `<p class="text-gray-700">${noteText}</p>
        <button class="remove-icon bi bi-trash-fill"></button>`

    document.getElementById('note-list').appendChild(note);
});


document.getElementById('note-list').addEventListener('click', function(e){
    console.log(e.target.parentNode);
    if (e.target.classList.contains('remove-icon')) {
        e.target.parentNode.remove(); // remove function does not have parameter
    }
})


