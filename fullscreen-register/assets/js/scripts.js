
jQuery(document).ready(function() {

    /*
        Background slideshow
    */
    $.backstretch([
      "assets/img/backgrounds/1.jpg"
    , "assets/img/backgrounds/2.jpg"
    , "assets/img/backgrounds/3.jpg"
    ], {duration: 2000, fade: 750});

    /*
        Tooltips
    */
    $('.links a.home').tooltip();
    $('.links a.blog').tooltip();

    /*
        Form validation
    */
    $('.register form').submit(function(){
        // $(this).find("label[for='username']").html('Username');
        // $(this).find("label[for='email']").html('Email');
        // $(this).find("label[for='password']").html('Password');
        // ////
        // var username = $(this).find('input#username').val();
        // var email = $(this).find('input#email').val();
        // var password = $(this).find('input#password').val();
        // if(username == '') {
        //     $(this).find("label[for='username']").append("<span style='display:none' class='red'> - Please enter a valid username.</span>");
        //     $(this).find("label[for='username'] span").fadeIn('medium');
        //     return false;
        // }
        // if(email == '') {
        //     $(this).find("label[for='email']").append("<span style='display:none' class='red'> - Please enter a valid email.</span>");
        //     $(this).find("label[for='email'] span").fadeIn('medium');
        //     return false;
        // }
        // if(password == '') {
        //     $(this).find("label[for='password']").append("<span style='display:none' class='red'> - Please enter a valid password.</span>");
        //     $(this).find("label[for='password'] span").fadeIn('medium');
        //     return false;
        // }
        // window.location.href = "login-index.html";
    });


});


