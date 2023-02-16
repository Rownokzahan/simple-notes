document.getElementById('add-note').addEventListener('click', function () {
    const noteText = document.getElementById('note').value;
    const note = document.createElement('div');
    note.classList.add('flex', 'gap-6', 'justify-between', 'bg-white', 'rounded-md', 'p-4');
    note.innerHTML =
        `<p class="text-gray-700">${noteText}</p>
        <button class="remove-icon">
            <svg width="20" height="20" viewBox="0 0 20 20">
                <path d="M17 2h-3.5l-1-1h-5l-1 1H3v2h14zM4 17a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5H4z" />
            </svg>
        </button>`

    document.getElementById('note-list').appendChild(note);
    addListenerToRemoveIcons();
});


function addListenerToRemoveIcons(){
    const removeIcons = document.getElementsByClassName('remove-icon');
    for (const removeIcon of removeIcons) {
        removeIcon.addEventListener('click', function () {
            console.log('hi');
        });
    }
}
addListenerToRemoveIcons();


