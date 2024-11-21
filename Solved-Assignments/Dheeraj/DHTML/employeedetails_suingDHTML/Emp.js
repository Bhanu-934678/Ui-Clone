var Edetails = {
    name : "SaiDheeraj",
    Age : "24",
    Gender: "Male",
    Dep : "IT",
    basicSal : "60000",
    pfpercentage : "10",
    hraparecentage : "13",
    imageUrl : "https://img.freepik.com/premium-photo/business-man-handsome-3d-game-character_897093-1384.jpg" 
};

var EmpData = (Edetails) => {
    var originTag = document.createElement("div");
    originTag.setAttribute("class", "origin");
    originTag.style.border = "1px solid";
    originTag.style.width = "500px";
    originTag.style.height = "auto";
    originTag.style.margin = "30px auto";
    originTag.style.backgroundColor = "Blue"

    var div1 = document.createElement("div");
    var imgTag = document.createElement("img");
    imgTag.setAttribute("src", Edetails.imageUrl);
    div1.append(imgTag);
    originTag.append(div1);

    var div2 = document.createElement("div");
    div2.innerText = `Employee Name: ${Edetails.name}`;
    div2.setAttribute("class" , "name");
    originTag.append(div2);

    var div3 = document.createElement("div");
    div3.innerText = `Gender: ${Edetails.Gender}`;
    div3.setAttribute("class" , "Gender");
    originTag.append(div3);

    var div4 = document.createElement("div");
    div4.innerText = `Department: ${Edetails.Dep}`;
    div4.setAttribute("class" , "Dep");
    originTag.append(div4);


    var div5 = document.createElement("div");
    div5.innerText = `Age: ${Edetails.Age}`;
    div5.setAttribute("class" ,"Age");
    originTag.append(div5);


    var div6 = document.createElement("div");
    div6.innerText = `BasicSal: ${Edetails.basicSal}`;
    div6.setAttribute("class", "basicSal");
    var basicSal = parseInt(employeeData.basicSal);
    originTag.append(div6);

    var div7 = document.createElement("div");
    var pfpercent = Edetails.basicSal * 10 / 100;
    div7.setAttribute("class" , "pf");
    var pfpercent = parseInt(Edetails.pfpercentage);
    div7.innerText = `Employee pf: ${Edetails.pfpercentage}`;
    originTag.append(div7)

    var div8 = document.createElement("div");
    var hraparecent = Edetails.basicSal * 13 / 100;
    div8.setAttribute("class" , "hra");
    var hraparecent = parseInt(Edetails.hraparecentage);
    div8.innerText = `Employee Hra: ${Edetails.hraparecentage}`;
    originTag.append(div8);


    var div9 = document.createElement("div");
    var Totalamount = basicSal + pfpercent + hraparecent;
    var Totalamount = parseInt(Totalamount);
    div9.setAttribute("class", "Total");
    div9.innerText = `Total Salary: ${Totalamount}`;
    originTag.append(div9);


    var div10 = document.createElement("p");
    div10.setAttribute("class", "copy");
    div10.style.textAlign = "center"
    div10.style.fontWeight = "500"
    div10.style.textDecoration = "underline"
    div10.innerText = `Copyright @SAIDheeraj2024`;
    originTag.append(div10);

    document.querySelector(".Edetails").append(originTag);

};

getEmpData(Edetails);
