
import React  from "react";
import Head from "next/head";
import Link from 'next/link';
import Login from "./Login";
import Script from 'next/Script';
import Image from 'next/image'


function Welcome({href}) {
    return (
      <>
        <Head>
       
       
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        
        <link rel="stylesheet" href=
        "https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"/>
    
        </Head>
        
        <Script src=
        "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"/>
           
           
            <Script src=
        "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"/>
            
            
            <Script src=
        "https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"/>
            

<section>
        <div>
    <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="#">
            <Image src="https://www.livetechskills.com/Encyc/2021/2/15/2_02_54_21_About-Us_1_H@@IGHT_251_W@@IDTH_770.png" style={{width:120 ,height:42,marginLeft:"-5%"}}className="d-inline-block align-top" alt=""/>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Courses</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Webinars</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Resources</a>
            </li>
            <form className="form-inline my-2 my-lg-0">
                
                
            <Link href="/Signup"><button type="button" className="btn btn-outline-danger">Login/Signup</button></Link>
              </form>
              <li className="nav-item">
                <a className="nav-link" href="#">TollFree:1800******</a>
              </li>
              <a className="Imagenav" href="#">
                <Image src="https://www.vectorkhazana.com/assets/images/products/Google_Mail_ico.jpg" style={{width:20,height:20}} alt=""/>
              </a>
            
            
          </ul>
        </div>
      </nav>
      </div>

      <div className="banner text-left">
          <h1>Be a Certified Ethical Hacker</h1>
   
          
          <div className="insider">  
          <p>Begineer/Intermediate/Courses by Livewire</p>
          <Link href="/Signup"><button type="button" className="btn btn-outline-light">Sign-up Today</button></Link>
  
        </div>  

      </div>

    </section>
    <div className="explore-courses text-center">
        
        <input type="text" className="form-control" placeholder="What do you want to learn..." />
        &nbsp; &nbsp;
        <button type="button" className="btn btn-danger">Explore Courses</button>

    </div>
    
        

 
 




    <div className="popular text-center">
          <div>
          <h5>OUR POPULAR COURSES</h5>
        </div>
        </div>
        <div className="underl text-center">
        <p style={{fontSize:30,color:"red"}}>___</p>
          
        </div>
        <div className="row">


        <div className="col-12 col-md-6 col-lg-3">
          <div className="team-member">
          <Image src="https://g.foolcdn.com/image/?url=https%3A//g.foolcdn.com/editorial/images/557573/gettyimages-1145589623.jpg&w=2000&op=resize" alt="new"/>
              <div className="inside">

              <h4>Business Analytics</h4>
              <h6>During 2 weeks</h6>
              <button type="button" className="btn btn-outline-danger">Join Now</button>
            </div>
              
              
          </div>
      </div>

      
      <div className="col-sm-12 col-md-6 col-lg-3">
        <div className="team-member">
            <Image src="https://g.foolcdn.com/image/?url=https%3A//g.foolcdn.com/editorial/images/557573/gettyimages-1145589623.jpg&w=2000&op=resize" alt="new"/>
            <div className="inside">

              <h4>Business Analytics</h4>
              <h6>During 2 weeks</h6>
              <button type="button" className="btn btn-outline-danger">Join Now</button>
            </div>
            
            
        </div>
    </div>

      
        <div className="col-12 col-md-6 col-lg-3">
          <div className="team-member">
          <Image src="https://g.foolcdn.com/image/?url=https%3A//g.foolcdn.com/editorial/images/557573/gettyimages-1145589623.jpg&w=2000&op=resize" alt="new"/>

              <div className="inside">

                <h4>Business Analytics</h4>
                <h6>During 2 weeks</h6>
                <button type="button" className="btn btn-outline-danger">Join Now</button>
              </div>
              
              
          </div>
      </div>

     
        <div className="col-12 col-md-6 col-lg-3">
          <div className="team-member">
            
            
          <Image src="https://g.foolcdn.com/image/?url=https%3A//g.foolcdn.com/editorial/images/557573/gettyimages-1145589623.jpg&w=2000&op=resize" alt="new"/>
           
              
              <div className="inside">

                <h4>Business Analytics</h4>
                <h6>During 2 weeks</h6>
                <button type="button" className="btn btn-outline-danger">Join Now</button>
              </div>
              
              
          </div>
      </div>
        </div>


        <div className="row">


          <div className="col-12 col-md-6 col-lg-3">
            <div className="team-member">
            <Image src="https://g.foolcdn.com/image/?url=https%3A//g.foolcdn.com/editorial/images/557573/gettyimages-1145589623.jpg&w=2000&op=resize" alt="new"/>
                <div className="inside">

                  <h4>Business Analytics</h4>
                  <h6>During 2 weeks</h6>
                  <button type="button" className="btn btn-outline-danger">Join Now</button>
                </div>
                
                
            </div>
        </div>
  
        
        <div className="col-sm-12 col-md-6 col-lg-3">
          <div className="team-member">
          <Image src="https://g.foolcdn.com/image/?url=https%3A//g.foolcdn.com/editorial/images/557573/gettyimages-1145589623.jpg&w=2000&op=resize" alt="new"/>
              <div className="inside">

                <h4>Business Analytics</h4>
                <h6>During 2 weeks</h6>
                <button type="button" className="btn btn-outline-danger">Join Now</button>
              </div>
              
              
          </div>
          
      </div>
      
  
        
          <div className="col-18 col-md-6 col-lg-3">
            <div className="team-member">
            <Image src="https://g.foolcdn.com/image/?url=https%3A//g.foolcdn.com/editorial/images/557573/gettyimages-1145589623.jpg&w=2000&op=resize" alt="new"/>
                <div className="inside">

                  <h4>Business Analytics</h4>
                  <h6>During 2 weeks</h6>
                  <button type="button" className="btn btn-outline-danger">Join Now</button>
                </div>
                
                
            </div>
        </div>
  
       
          <div className="col-12 col-md-6 col-lg-3">
            <div className="team-member">
              <figure className="blog-post-thumbnail position-relative m-0">
              <Image src="https://g.foolcdn.com/image/?url=https%3A//g.foolcdn.com/editorial/images/557573/gettyimages-1145589623.jpg&w=2000&op=resize" alt="new"/>
              </figure>
              <div className="inside">

                <h4>Business Analytics</h4>
                <h6>During 2 weeks</h6>
                <button type="button" className="btn btn-outline-danger">Join Now</button>
              </div>
                
            </div>
        </div>
  
          </div>
          <div className="new text-center">
            <div>
            <p>View All Courses</p>
            </div>
          </div>
          
<nav className="navbarr" style={{backgroundColor:"#352879"}}>
  
</nav>
    
</>
    )
  
}
export default Welcome;