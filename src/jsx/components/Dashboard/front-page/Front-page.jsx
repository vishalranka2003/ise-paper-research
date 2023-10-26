import "./frontpage.css";

const Frontpage=()=>{
    return(
        <>
        <section id="banner">
           <img class="logo" src="" alt="logo" />
           <div class="banner-text">
               <h1>BMSCE</h1>
                <p>Information Science Department</p>
           </div>

        </section>
        <section id="event">
    <div class="title-text">
   <p>ISE Department</p>
   <h1>Online Research Paper Submission portal</h1>
    </div>
    <div class="event-box">
        <div class="events">
            <h1>Sign In / Sign UP</h1>
            <div class="events-desc">
                <div class="event-icon">
                    <i class="fas fa-laptop-code"></i>
                    {/* <i class="fas fa-arrow-right-to-arc"></i> */}
                </div>
                <div class="event-text">
                <p>Login With the official bmsce mailid to submit the research Paper through the portal</p>
                <div class="banner-btn">
                 <a href="/page-login"><span></span>Sign In / Sign Up</a>

             </div>
                </div>

            </div>
            
        </div>
        <div class="events-img">
            <img src="https://webcampus.bmsce.in/assets/img/img15.png" alt="hackthon" />
        </div>

    </div>
    <div class="event-box">
       
        <div class="events-img">
            <img src="https://files.jotform.com/jotformapps/d214c530881c224975ae274a32741d4c.png" alt="summer" />
        </div>

        <div class="events">
            <h1>How the portal works?</h1>
            <div class="events-desc">
                <div class="event-icon">
                    <i class="fas fa-globe-americas"></i>
                </div>
                <div class="event-text">
                <p>After the logging in sucessfully first set up the profile.
                    once the profile setup is done one can start publishing the paper.
                    once click on the finish button the Pdf of the paper submitted will be sent to the official mail id through which logged in.
                </p>
                </div>

            </div>
            
        </div>
        

    </div>
</section>

        </>
    );
}

export default Frontpage;