$(document).ready(function(){

    $('#students').click(function(e) {
        e.preventDefault();

    // Create functio to Into Data
    function studentsData (data){
        let students= data.students;
        console.log(students);

        for (i=0; i < students.length; i++){
            
            let nameStudent= students[i].name;
            console.log(nameStudent);
            let photoStudent= students[i].photo;
            console.log(photoStudent);
            
            $('#box-students').append(template(photoStudent, nameStudent));
        
             // Create chips
            $('.chips-placeholder').chips({
                 placeholder: 'Add your skill',
                secondaryPlaceholder: 'skills',
            }); 
        }
    }
    studentsData(data);

    //Create function to create template
    function template (photo, name){

        // Create template for each Student
        let template=   '<div class="box-data-student row">' +
                            '<img class="col s12 m5 l5" src="'+photo+'" alt="photo-student">' +
                            '<div class="col s12 m7 l7 offset">' +
                                '<p class="name">'+name+'</p>' +
                            '<div class="chips chips-placeholder"></div></div>' +
                        '</div>'

        return template;
    }

        });
  });