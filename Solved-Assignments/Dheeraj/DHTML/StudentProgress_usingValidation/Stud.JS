var Sdetails = {

     Studentdetails  () {
        Sdetails.name = document.querySelector('#studname').value;
        Sdetails.age = document.querySelector('#studage').value;
        Sdetails.gender = document.querySelector('input[name=gender]:checked').value;
        Sdetails.class = document.querySelector('#studclass').value;
    },

    giveTotalandAverage  () {
        Sdetails.marks = [];
        for (var p = 1; p <= 6; p++){
            var id = '#m' + p;
            var val = parseInt(document.querySelector(id).value);
            Sdetails.marks.push(val);
    }
        Sdetails.total = 0;
        for (var p = 0; p < Sdetails.marks.length; p++) {
            Sdetails.total = Sdetails.total + Sdetails.marks[p];
    }
        Sdetails.Average = Sdetails.total / Sdetails.marks.length;
       Sdetails.Studentdetails();  
    },
    

    ShowStudentDetails () {

        document.querySelector('#show').style.display = 'block';
        document.querySelector('#sname').innerText = Sdetails.name;
        document.querySelector('#sage').innerText = Sdetails.age;
        document.querySelector('#sclass').innerText = Sdetails.class;
        document.querySelector('#sgender').innerText = Sdetails.gender;
        document.querySelector('#stotal').innerText = Sdetails.total;
        document.querySelector('#savg').innerText = Sdetails.avg;
        
    }        
}

var generateProgressCard = () => {
    Sdetails.ShowStudentDetails();
}

var resetFields = () => {
    document.querySelector('#studname').value = '';
    document.querySelector('#studage').value = '';
}

var getValidation = (event) => {
    var Sname = document.querySelector('#studname').value;
    if (event.KeyCode >= 65 && event.KeyCode <= 90){
        document.querySelector('#errA').style.display = 'block';
        return true;
    } else if (event.KeyCode >= 97 && event.KeyCode <= 122){
        return true;
    }else{
        return false;
    }

    var getvalidationnumber = (event) => {
        var number = document.querySelector("#studage").value;
        if(event.keyCode >= 48 && event.keyCode <= 57){
            return true;
        }else{
            return false;
        }
    }
}