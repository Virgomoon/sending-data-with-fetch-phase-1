// Add your code here

function submitData(userName, userEmail) {
    return fetch("http://localhost:3000/users",{
        method: "POST",
        headers: {
            "Content-type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            name: `${userName}`,
            email: `${userEmail}`,
        })
    })
    .then(function (response) {
        return response.json();
     })
     .then(function(object){
         const p = document.createElement('p')
         document.querySelector('body').appendChild(p)
         p.innerHTML = object.id
     })
     .catch(function(error){
        const p = document.createElement('p')
        document.querySelector('body').appendChild(p)
         p.innerHTML = error.message
     })
}

// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle",
//   };
  
//   const configurationObject = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//     body: JSON.stringify(formData),
//   };
  
//   fetch("http://localhost:3000/dogs", configurationObject)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (object) {
//       console.log(object);
//     })
//     .catch(function (error) {
//         alert("Bad things! Ragnarők!");
//         console.log(error.message);
//       });
  