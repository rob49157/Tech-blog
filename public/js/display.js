

 async function display() {
    let notes = []
    await fetch("/api/notes/")
        .then(response => response.json())
        .then(data => notes =data);

    createform(notes)
 }

    function createform(notes){
    const formbody= document.createElement('table')
    for( var i =0; i< notes.length; i++){
        if (notes[i].title != null){
            var fh= document.createElement("tr")
            var fc= document.createElement("td")
            var fheader1= document.createTextNode(notes[i].title)
            var fh1= document.createElement("td")
            var fcontent1 = document.createTextNode(notes[i].notes)
            var fc1=document.createElement("td")

            fh1.appendChild(fheader1)
            fc1.appendChild(fcontent1)

            fh.appendChild(fh1)
            fh.appendChild(fc1)
            
            formbody.appendChild(fh)

            document.getElementById("mybody").appendChild(formbody)
        }
    }

    }

    

document.getElementById("mybody").onload = function() {display()};

