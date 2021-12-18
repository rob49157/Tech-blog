 async function display() {
    let notes = []
    await fetch("/api/notes/")
        .then(response => response.json())
        .then(data => notes =data);
    console.log(notes)
}
document.getElementById("mybody").onload = function() {display()};

