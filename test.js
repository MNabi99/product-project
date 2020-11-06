! function (f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () {
        n.callMethod ?
            n.callMethod.apply(n, arguments) : n.queue.push(arguments)
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s)
}(window, document, 'script',
    'https://connect.facebook.net');
fbq('init', '566527203906169');
fbq('track', 'PageView');



//  BELOW javAsCRIPT FOR lOG SITE

window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());

gtag('config', 'UA-117910445-2');

var tlJsHost = ((window.location.protocol == "https:") ? "https://secure.comodo.com/" : "http://www.trustlogo.com/");
document.write(unescape("%3Cscript src='" + tlJsHost + "trustlogo/javascript/trustlogo.js' type='text/javascript'%3E%3C/script%3E"));



var Tawk_API = Tawk_API || {},
    Tawk_LoadStart = new Date();
(function () {
    var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/5b17a53310b99c7b36d4ac5f/default';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
})();;
1




// FOURTH FROM END
function subfeedback() {
    //alert(subfeedback);
    var name = document.getElementById("name").value;
    var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
    var emailids = document.getElementById("emailids").value;

    var message = document.getElementById("message").value;

    if (name == '') {
        $("#Subscribeform").html('<p style="color:red;">Please Enter your Name .</p>');

    } else if (emailids == '') {
        $("#Subscribeform").html('<p style="color:red;">Please Enter Emailid .</p>');
    } else if (!re.test(emailids)) {
        $("#Subscribeform").html('<p style="color:red;">Please enter a valid email id.</p>');
    } else if (message == '') {
        $("#Subscribeform").html('<p style="color:red;">Please Enter Message .</p>');
    } else {



        document.getElementById("newsletter").submit();
        document.getElementById("newsletter").reset();
        $("#Subscribeform").html('<p style="color:green;">Submit Successfully.</p>');



    }

}

//  fourth from end

function loginuser() {

    //alert(loginuser);	


    var emailid = document.getElementById("emailid").value;
    var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
    var password = document.getElementById("password").value;

    if (emailid == '') {
        $("#messagefeedback2").html('<p style="color:red;" class="makeiterror">Please Enter  Email Id</p>');
    } else if (!re.test(emailid)) {
        $("#messagefeedback2").html('<p style="color:red;" class="makeiterror">Please Enter a Valid Email Id</p>');
    } else if (password == '') {
        $("#messagefeedback2").html('<p style="color:red;" class="makeiterror">Please Enter Password </p>');
    } else {

        document.getElementById("preloader").style.display = "block";
        document.getElementById("preloadoverlay").style.display = "block";

        $.post("https://projecttunnel.com/ajax.php",

            {

                "action": "submitlogin",

                emailid: emailid,
                password: password,

            },
            function (data) {
                //alert(data);

                document.getElementById("preloader").style.display = "none";
                document.getElementById("preloadoverlay").style.display = "none";


                if (data == 1) {

                    $("#messagefeedback2").html('<p style="color:red;" class="makeiterror">Please Enter Valid Email Id.</p>');
                } else if (data == 2) {
                    $("#messagefeedback2").html('<p style="color:red;" class="makeiterror">Please Enter Valid Password .</p>');
                } else if (data == 3) {
                    $("#messagefeedback2").html('<p style="color:red;" class="makeiterror">Invalid password.</p>');
                } else if (data == 4) {
                    $("#messagefeedback2").html('<p style="color:red;" class="makeiterror">This Invalid Email id .</p>');
                } else {

                    window.location.href = 'https://projecttunnel.com/updateprofile.php';


                }


            });

    }

}



// from Last third
function submitreg() {
    //alert(submitreg);



    if ($('input[name="usertype"]:checked').length != 0) {
        var usertype = document.querySelector('input[name="usertype"]:checked').value;
    } else {
        var usertype = '';
    }

    var fullname = document.getElementById("fullname").value;
    var emailid = document.getElementById("emailid_reg").value;
    var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
    var password = document.getElementById("current_password").value;
    var confirm_password = document.getElementById("confirm_password").value;

    if (fullname == '') {
        $("#messagefeedback12").html('<p style="color:red;"  class="makeiterror">Please Enter Fullname.</p>');
    } else if (emailid == '') {
        $("#messagefeedback12").html('<p style="color:red;"  class="makeiterror">Please Enter Email Id.</p>');
    } else if (!re.test(emailid)) {
        $("#messagefeedback12").html('<p style="color:red;" class="makeiterror">Please Enter  valid Email Id.</p>');
    } else if (password == '') {
        $("#messagefeedback12").html('<p style="color:red;"  class="makeiterror">Please Enter Password .</p>');
    } else if (confirm_password == '') {
        $("#messagefeedback12").html('<p style="color:red;"  class="makeiterror">Please Enter Confirm Password .</p>');
    } else if (password != confirm_password) {
        $("#messagefeedback12").html('<p style="color:red;"  class="makeiterror">Renew password do not match.</p>');
    } else {

        $.post("https://projecttunnel.com/ajax.php",

            {

                "action": "action_submit",

                usertype: usertype,
                fullname: fullname,
                emailid: emailid,
                password: password,


            },
            function (data) {
                //	alert(data);

                if (data == 1) {

                    $("#messagefeedback12").html('<p style="color:red;"  class="makeiterror">This Email Id Already Exist .</p>');

                } else {


                    window.location.href = 'https://projecttunnel.com/updateprofile.php';
                }

            });
    }
}

// second last

function forgotpassword() {

    var emailid = document.getElementById("email_id").value;
    var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;



    if (emailid == '') {
        $("#messagefeedbackpass").html('<p style="color:red;" class="makeiterror">Please Enter Email Id.</p>');
    } else if (!re.test(emailid)) {
        $("#messagefeedbackpass").html('<p style="color:red;" class="makeiterror">Please Enter  valid Email Id.</p>');
    } else {
        $.post("https://projecttunnel.com/ajax.php",

            {
                "action": "action_forgotpass",

                emailid: emailid,



            },
            function (data) {

                if (data == 1) {

                    $("#messagefeedbackpass").html('<p style="color:red;" class="makeiterror">This Email Id Does not Exist .</p>');
                } else {
                    document.getElementById("myForm_forgot").reset();
                    $("#messagefeedbackpass").html('<p style="color:green;" class="makeitsuccess"> Your password sent to your email</p>');
                }
            });
    }
}

function getclose() {

    document.getElementById("myForm_forgots").reset();
    document.getElementById("myForm_forgot").reset();
    document.getElementById("myForm_forgotl").reset();


}

function getshow() {
    document.getElementById("login").style.display = "none";

}