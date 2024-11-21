var Edetails = {
    imgurl:"https://i.pinimg.com/564x/6a/dc/57/6adc57720ea9541176086d16a4da5d61.jpg",
    name : "siri",
    Gender : "female",
    Department : "IT",
    Basicsalary : 40000,
    PF : 14,
    HRA : 25,
   
}

var addEmployeeDetails = (Edetails) => {
    var mainLiTag = document.createElement("li");
    mainLiTag.setAttribute("class" , "employeeDetails");

    var ulTag = document.createElement("ul");

    var imageli = document.createElement("li");
    var imagetag = document.createElement("img");
    imagetag.setAttribute("src" , Edetails.imageurl);
    imageli.append(imagetag);
    ulTag.append(imageli);

    var li1 = document.createElement("li1");
    li1.innerText = `Employee Name: ${Edetails.name}`;
    ulTag.append(li1);

    var li2 = document.createElement("li2");
    li2.innerText = `Gender: ${Edetails.Gender}`;
    ulTag.append(li2);

    var li3 = document.createElement("li3");
    li3.innerText = `Department: ${Edetails.Department}`;
    ulTag.append(li3);

    var li4 = document.createElement("li4");
    li4.innerText =parseInt(Edetails.Basicsalary);
    ulTag.append(li4);

    var span1 = document.createElement("span1");
    span1.innerText = parseInt((Edetails.Basicsalary * 14) / 100);
    span1.setAttribute("class" , "PF");
    li4.append(span1);
    
    var span2 = document.createElement("span2");
    span2.innerText = parseInt((Edetails.Basicsalary * 25) / 100);
    span2.setAttribute("class" , "HRA");
   
    li4.append(span1);
    li4.append(span2);

    var span3 = document.createElement("span3");
    span3.innerText = Edetails.Basicsalary + Edetails.PF + Edetails.HRA ;
    span3.setAttribute("classs" , "Total");
    li4.append(span3);
    
    ulTag.append(li4);

    mainLiTag.append(ulTag);
    console.log(mainLiTag);

    document.querySelector(".Edetails").append(mainLiTag);

}

addEmployeeDetails(Edetails);
