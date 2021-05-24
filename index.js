function sendSelection(selection) {
    console.log(selection)
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:3213/miro-webhook", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.setRequestHeader("Accept", "application/json");
    xhttp.send(JSON.stringify(selection));
}

miro.onReady(() => {
    miro.addListener('SELECTION_UPDATED', (e) => {
        sendSelection(e.data)
    })
    miro.board.selection.get()
      .then(sendSelection)
})
