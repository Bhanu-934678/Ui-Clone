 var keywords = ['Chandamama Stories' , 'Akbhar-Birbal Stories', 'Tenali RamaKrishna', 'Batti Vikramarka', 'Beauty and the Beast','Doremon','Ramayanam',
                    'Mahabharatham' , 'The Little Krishna', 'Lilliput','Panchatantram', 'King kachatathapa','Madhura Meenakshi'];

 var resultbox = document.querySelector(".resultbox");
 var inputbox = document.getElementById("inputbox");

 var display = () => {
    var result = [];
    var input = inputbox.value ;
    if(input.length){
        result = keywords.filter((availablekeyword) =>{
           return availablekeyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);
 }
 
 var display = (result) =>{
   /* var content = result.map((list) => {
        return  "<li>" +list+ "</li>";
    });
    resultbox.innerHTML = "<ul>" +content + "</ul>" ;  */

    var div = document.createElement("div");
    div.innerText = result[i];
    document.querySelector(".resultbox").append(div);
 }