
    class employeeDetails{
        constructor(obj){
            this.name = obj.name;
            this.age = obj.age;
            this.gender = obj.gender;
            this.dept = obj.dept;
            this.basicsalary = parseInt(obj.basicsalary)
        }

        getpfhra() {
            this.pf = parseInt((14 * this.basicsalary) / 100);
            this.hra = parseInt((25 * this.basicsalary) / 100);
            this.gettotal()
        }  

        gettotal(){
            this.total = this.pf + this.hra + this.basicsalary;
        }  

        displayinfo(){
           this.getpfhra();
             // document.querySelector("#d_name").innerText = this.name;
             $("#dname").text(this.name);
             console.log(this.name)
             $("#dage").text(this.age);
             $("#dgender").text(this.gender);
             $("#ddept").text(this.dept);
             $("#dbasic").text(this.basicsalary);
             $("#dpf").text(this.pf);
             $("#dhra").text(this.hra);
             $("#dtotal").text(this.total);
             $(".displayblock").slideDown(2000);
        }
    }

    var employeeDetailslist = [];

    var readInfo = () => {
        var employeedata = {};
        employeedata.name = $("#ename").val();
        employeedata.age = $("#eage").val();
        employeedata.gender = $("#egender").val();
        employeedata.dept = $("#edept").val();
        employeedata.basicsalary = $("#bs").val();

        var e1 = new employeeDetails(employeedata);
        e1.displayinfo();

        employeeDetailslist.push(e1);
        console.log(e1)

    }

    var reset = () => {
        document.querySelector(".displayblock").style.display = 'none';
        $("#ename").val('');
        $("#eage").val('');
        $("#bs").val('');
    }
