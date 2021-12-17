
const techblogform = async (event) => {
    event.preventDefault();
  
    const postnotes = document.querySelector("form-control").value.trim();
    document.getElementById("submit").addEventListener("submit", techblogform);
    
  // post
    if (postnotes ) {
      const response = await fetch("/api/notes", {
        method: "POST",
        body: JSON.stringify({ title, notes }),
        headers: { "Content-Type": "application/json" },
      });
     
  
      if (response.ok) {
        document.location.replace("/dashboard");
       
      } else {
        alert("Failed submit form");
      }
    }
  };
// update
  const updateform = async (event) => {
    event.preventDefault();
  
    const postnotes = document.querySelector("form-control").value.trim();
    document.getElementById("update").addEventListener("submit", updateform);
  
    if (postnotes ) {
      const response = await fetch("/api/notes", {
        method: "PUT",
        body: JSON.stringify({ title, notes }),
        headers: { "Content-Type": "application/json" },
      });
     
  
      if (response.ok) {
        document.location.replace("/dashboard");
      } else {
        alert("Failed submit form");
      }
    }
  };
  

  // delete

  const deleteform = async (event) => {
    event.preventDefault();
  
    const postnotes = document.querySelector("form-control").value.trim();
    document.getElementById("delete").addEventListener("submit", deleteform);
  
    if (postnotes ) {
      const response = await fetch("/api/notes", {
        method: "DELETE",
        body: JSON.stringify({ title, notes }),
        headers: { "Content-Type": "application/json" },
      });
     
  
      if (response.ok) {
        document.location.replace("/dashboard");
      } else {
        alert("Failed submit form");
      }
    }
  };
  
  
  
  
//   document.getElementById("submit")
  
//     .addEventListener("submit", techblogform);
//     console.log(techblogform)

    // document.getElementById("update").addEventListener("submit", updateform);
    

    // document.getElementById("delete").addEventListener("submit", deleteform);
   
//     const submit= document.getElementById("submit")
// const update= document.getElementById("update")
// const erase= document.getElementById("delete")