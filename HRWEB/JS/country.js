const country_URL="https://potential-pancake-69wq65477wjr3rg5-6006.app.github.dev/country";

fetch(country_URL).then(response=>{
    if(!response.ok)
        throw new console.error("failed to fetch country data");
        return response.json();

}).then (data=>{
  const tbody=document.querySelection("#countrytable tbody");
  data.forEach(country=>{
   const row=document.createElement("tr");
   row.innerHTML=`
   <td>${country.country_id}</td>
   <td>${country.country_name}</td>
   <td>$county.region_id</td>
   `
   
   ;
   tbody.appendChild(row);});
  }).catch (err=>{
    console.log(err.message);

  })































































  
   
   

 