var employeeData = {
    image:"https://www.researchgate.net/profile/Vincenzo-Maselli/publication/346763582/figure/fig2/AS:981835307827200@1611099187283/Heidi-Girl-of-the-Alps-1974-Episode-No-34-Still-Frame-Source-C-Zuiyo-Nippon.jpg",
    name : "siri",
    age : "22",
    gender : "female",
    basicsalary : "30000",
    pf : "14%",
    hra : "25%"
};
    var empdetails = (employeeData) =>{
    var maintag = document.createElement("div");
    maintag.setAttribute("class", "main");

    var div1 = document.createElement("div1");
    var imagetag = document.createElement(imagetag);
    imagetag.setAttribute("src", employeeData.image);
    div1.append(imagetag);
    maintag.append(div1);

    var div2 = document.createElement("div");
    div2.setAttribute("class", "name");
    div2.innerText = `Employee Name : ${employeeData.name}`;
    maintag.append(div2);

    var div3 = document.createElement("div");
    div3.setAttribute("class", "age");
    div3.innerText = `Age : ${employeeData.age}`;
    maintag.append(div3);

    var div4 = document.createElement("div");
    div4.setAttribute("class", "gender");
    div4.innerText = `Gender : ${employeeData.gender}`;
    maintag.append(div4);

    var div5 = document.createElement("div");
    div5.setAttribute("class", "basicSalary");
    var basicSalary = parseFloat(employeeData.basicSalary);
    div5.innerText = `Basic Salary : ${employeeData.basicSalary} `;
    maintag.append(div5);

    var div6 = document.createElement("div");
    div6.setAttribute("class", "pf");
    var pfAmount = parseFloat(employeeData.pf);
    var pfAmount = employeeData.basicSalary * 14 / 100;
    div6.innerText = `PF Amount : ${pfAmount} `;
    maintag.append(div6); 

    var div7 = document.createElement("div");
    div7.setAttribute("class", "hra");
    var hraAmount = parseFloat(employeeData.hra);
    var hraAmount = employeeData.basicSalary * 25 / 100;
    div7.innerText = `HRA Amount : ${hraAmount} `;
    maintag.append(div7);

    maintag.append(div7)
    console.log(maintag);
    document.querySelector(".employeeData").append(maintag);
}

empdetails(employeeData);