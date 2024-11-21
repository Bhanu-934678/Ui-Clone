var keywords = ['Chandamama Stories' , 'Akbhar-Birbal Stories', 'Tenali RamaKrishna', 'Batti Vikramarka', 'Beauty and the Beast','Doremon','Ramayanam',
'Mahabharatham' , 'The Little Krishna', 'Lilliput','Panchatantram', 'King kachatathapa','Madhura Meenakshi'];
//  var resultbox = document.querySelector(".resultbox");
//  var inputbox = document.getElementById("inputbox").value;
var display = (event) => {
var result = event.target.value.toLowerCase();
var box = document.querySelector(".resultbox");
box.innerHTML = '';
if(result.trim()==''){
return;
}
var matchingbooks = [];
for( var i = 0; i < keywords.length; i++){
var books = keywords[i];
if(books.toLowerCase().startsWith(result)){
matchingbooks.push(books);
}
}
for(var i = 0; i < matchingbooks.length; i++){
var div = document.createElement("div");
div.innerText = matchingbooks[i];
document.querySelector(".resultbox").append(div);
}
}
//var displaysearch {

//}

