sendHeader();
sendFooter();



window.addEventListener('DOMContentLoaded', (event) => {
    // alert('DOM fully loaded and parsed');
   setTimeout(()=> {
    document.getElementById("loader-").style.display="none";
   }, 1000) 
});


function sendHeader() {
document.getElementById("getHeader").innerHTML=`<header class="header-footer">
<img src="assests/images/logo.png" class="logo" id="logo-image" alt="logo"/>
<button type="button" id="login" class="btn btn-light btn-sm" data-toggle="modal" data-backdrop="false" data-target="#login-modal">LOGIN</button>

<div class="modal fade" id="login-modal" tabindex="-1" role="dialog" aria-labelledby="login-modal-label" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="login-modal-label">Please Login</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form id="login-form">
                    <div class="login-field">
                        <label for="username">Username: </label>
                        <input type="text" id="username" value="" name="username" placeholder="Enter Username" required />
                    </div>
                    <div class="login-field">
                        <label for="password">Password: </label>
                        <input type="password" value="" id="password" name="password" placeholder="Enter Password" required />
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button id="login-button" type="button" class="btn btn-primary" data-dismiss="modal">Login</button>
            </div>
        </div>
    </div>
</div>
</header>`;
}

function sendFooter() {
    document.getElementById("getFooter").innerHTML=` <footer class="header-footer">
    <div id="contact">
        <button type="button" class="btn btn-info btn-sm" data-toggle="modal" data-backdrop="false" data-target="#contact-modal">Contact Us</button>

        <div class="modal fade" id="contact-modal" tabindex="-1" role="dialog" aria-labelledby="contact-modal-label" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="contact-modal-label">Get in touch</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <p>
                                Thank you for reaching out!!! <br>
                                Please enter you email and we will get back to you.
                            </p>
                            <label for="email">Email: </label>
                            <input type="text" id="email" name="email" placeholder="Enter your email id" required>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-dismiss="modal">Sumbit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="copyright-text">
        © 2020 ROOM SEARCH PVT. LTD.
    </div>
    <div id="social-media-images">
        <a href="https://www.facebook.com" target="_blank">
            <img src="assests/images/facebook.png" class="social-media-image">
        </a>
        <a href="https://www.instagram.com" target="_blank">
            <img src="assests/images/instagram.png" class="social-media-image">
        </a>
        <a href="https://twitter.com" target="_blank">
            <img src="assests/images/twitter.png" class="social-media-image">
        </a>
    </div>
</footer>`;
}

var checker1 = "admin";
var checker2 = "admin";
var modalLoginBtn = document.getElementById("login-button");
var loginBtn = document.getElementById("login");
var getUname = document.getElementById("username");
var getPass = document.getElementById("password");

function loginToggle() {



    loginBtn.addEventListener('click', ()=> {

        if(loginBtn.innerText="LOGIN") {
            document.getElementById("login-modal").style.display="block";
            modalLoginBtn.addEventListener('click', ()=> {

                if(getUname.value==checker1 && getPass.value==checker2) {
                  alert("Sucessfully LoggedIn!");
                  loginBtn.innerText="LOGOUT";
                  document.querySelector("body").classList.add("loggedIn");
                }
                else {
                    alert("Invalid User");
                }

                });
        }
        else if(loginBtn.innerText="LOGOUT") {
            alert("else");
            document.getElementById("login-modal").style.display="none"; 
            getUname = "";
            getPass = "";
            loginBtn.innerText="LOGIN";
            
        }
        });

       

}


loginToggle();

