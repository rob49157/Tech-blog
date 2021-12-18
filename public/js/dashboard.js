// post
    const postnotes = document.querySelector(".form-control")
    // const title = document.getElementById("blogtitle").value()
    // const notes =document.getElementById("blogcontent").value()





  const techblogform = async (event) => {
   
  // event.preventDefault();
  const title = document.getElementById("exampleFormControlInput1").value
  const notes =document.getElementById("exampleFormControlTextarea1").value
  
    
    console.log(title, notes)
    
    if (postnotes ) {
      const response = await fetch("/api/notes/post", {
        
        method: "POST",
        body: JSON.stringify({ title, notes }),
        headers: { "Content-Type": "application/json" },
      });
      console.log(response)
     
  
      if (response.ok) {
        document.location.replace("/");
       
      } else {
        alert("Failed to post blog");
      }
    }
  };
// update
const updateform = async (event) => {
    // event.preventDefault();
  
    // const postnotes = document.querySelector("form-control").value.trim();
    // document.getElementById("update").addEventListener("submit", updateform);
  
    if (postnotes ) {
      const response = await fetch("/api/notes", {
        method: "PUT",
        body: JSON.stringify({ title, notes }),
        headers: { "Content-Type": "application/json" },
      });
      console.log("response")
     
  
      if (response.ok) {
        document.location.replace("/");
      } else {
        alert("Failed to update blog");
      }
    }
  };
  

  // delete

const deleteform = async (event) => {
    // event.preventDefault();
  
   
  
    if (postnotes ) { console.log('fasfdsadf')
      const response = await fetch("/api/notes", {
        method: "DELETE",
        body: JSON.stringify({ title, notes }),
        headers: { "Content-Type": "application/json" },
      });
      console.log("delete")
     
  
      if (response.ok) {
        document.location.replace("/dashboard");
      } else {
        alert("Failed to delete form");
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