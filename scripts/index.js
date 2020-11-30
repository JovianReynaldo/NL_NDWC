$('#content-body').load('pages/home.html');   

if( $(window).width() < 500){
    $(".welcome").css("fontSize", "4rem");
    
    setTimeout(() => {
        $(".welcome").css("fontSize", 0);
        setTimeout(() =>{
            $(".welcome").hide(); 
            $('.content').show('slow');
        },1000);
    },2500);

    $(".header").html('\
    <div class="container">\
        <div class="dropdown">\
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\
            Menu\
        </button>\
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">\
            <a class="dropdown-item" id="nav-profile-tab" href="#">Profile</a>\
            <a class="dropdown-item" id="nav-techstack-tab" href="#">Tech Stack</a>\
            <a class="dropdown-item" id="nav-frontend-tab" href="#">Front End</a>\
            <a class="dropdown-item" id="nav-backend-tab" href="#">Back End</a>\
        </div>\
        </div>\
    </div>');
} else {
    $(".welcome").css("fontSize", "10rem");

    setTimeout(() => {
        $(".welcome").css("fontSize", 0);
        setTimeout(() =>{
            $(".welcome").hide(); 
            $('.content').show('slow');
        },1000);
    },2500);
}


$( "#nav-profile-tab" ).click(function() {
    $("#content-body").hide('slow'); 
    setTimeout(() =>{
        $('#content-body').load('pages/home.html');  
        $("#content-body").show('slow');
    },1000);
});

$( "#nav-techstack-tab" ).click(function() {
    $("#content-body").hide('slow'); 
    setTimeout(() =>{
        $('#content-body').load('pages/tech-stack.html');  
        $("#content-body").show('slow');
    },1000); 
});

$( "#nav-frontend-tab" ).click(function() {
    $("#content-body").hide('slow'); 
    setTimeout(() =>{
        $('#content-body').load('pages/frontend.html');  
        $("#content-body").show('slow');
    },1000); 
});

$( "#nav-backend-tab" ).click(function() {
    $("#content-body").hide('slow'); 
    setTimeout(() =>{
        $('#content-body').load('pages/backend.html');  
        $("#content-body").show('slow');
    },1000);  
}); 



var count = 1;
window.setInterval(function(){
    if(count == 1){
        $("#aboutme").html("<a href=\"https://www.instagram.com/jovian_reynaldo/\" target=\"_blank\"><i class='fab fa-instagram fa-2x'> jovian_reynaldo</i></a>");
    } else if (count == 2){
        $("#aboutme").html("<a href=\"https://github.com/JovianReynaldo/\" target=\"_blank\"><i class='fab fa-github fa-2x'> JovianReynaldo</i></a>");
    } else if (count == 3){
        $("#aboutme").html("<a href=\"https://linkedin.com/in/jovianreynaldo/\" target=\"_blank\"><i class='fab fa-linkedin fa-2x'> jovianreynaldo</i></a>");
    }

    count++;
    console.log(count);
    if(count==4) count = 1;
}, 3000);




//width responsive

$(window).resize(function() {
    if( $(window).width() < 500){
        $(".header").html('\
        <div class="container">\
            <div class="dropdown">\
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\
                Menu\
            </button>\
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">\
                <a class="dropdown-item" id="nav-profile-tab" href="#">Profile</a>\
                <a class="dropdown-item" id="nav-techstack-tab" href="#">Tech Stack</a>\
                <a class="dropdown-item" id="nav-frontend-tab" href="#">Front End</a>\
                <a class="dropdown-item" id="nav-backend-tab" href="#">Back End</a>\
            </div>\
            </div>\
        </div>');
    } else { 
        $(".header").html('\
        <div class="container">\
            <div class="nav nav-tabs" id="nav-tab" role="tablist">\
                <a class="nav-item nav-link active" id="nav-profile-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Profile</a>\
                <a class="nav-item nav-link" id="nav-techstack-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Tech Stack</a>\
                <a class="nav-item nav-link" id="nav-frontend-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Front End</a>\
                <a class="nav-item nav-link" id="nav-backend-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Back End</a>\
            </div>\
        </div>');
    }


    $( "#nav-profile-tab" ).click(function() {
        $("#content-body").hide('slow'); 
        setTimeout(() =>{
            $('#content-body').load('pages/home.html');  
            $("#content-body").show('slow');
        },1000);
    });

    $( "#nav-techstack-tab" ).click(function() {
        $("#content-body").hide('slow'); 
        setTimeout(() =>{
            $('#content-body').load('pages/tech-stack.html');  
            $("#content-body").show('slow');
        },1000); 
    });

    $( "#nav-frontend-tab" ).click(function() {
        $("#content-body").hide('slow'); 
        setTimeout(() =>{
            $('#content-body').load('pages/frontend.html');  
            $("#content-body").show('slow');
        },1000); 
    });

    $( "#nav-backend-tab" ).click(function() {
        $("#content-body").hide('slow'); 
        setTimeout(() =>{
            $('#content-body').load('pages/backend.html');  
            $("#content-body").show('slow');
        },1000);  
    }); 
});