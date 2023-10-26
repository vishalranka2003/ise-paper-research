
import React, { Fragment, useEffect, useState } from "react";
import { Button, Dropdown, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { SRLWrapper } from "simple-react-lightbox";
//** Import Image */
import profile01 from "../../../../images/profile/1.jpg";
import profile02 from "../../../../images/profile/2.jpg";
import profile03 from "../../../../images/profile/3.jpg";
import profile04 from "../../../../images/profile/4.jpg";
import profile05 from "../../../../images/profile/5.jpg";
import profile06 from "../../../../images/profile/6.jpg";
import profile07 from "../../../../images/profile/7.jpg";
import profile08 from "../../../../images/profile/8.jpg";
import profile09 from "../../../../images/profile/9.jpg";
import profile from "../../../../images/profile/profile.png";
import PageTitle from "../../../layouts/PageTitle";
import {useAuth0} from "@auth0/auth0-react";

const AppProfile = () => {


	const {user,isAuthenticated,isLoading}=useAuth0();
  const [activeToggle, setActiveToggle] = useState("posts");
  const [sendMessage, setSendMessage] = useState(false);
  const [postModal, setPostModal] = useState(false);
  const [cameraModal, setCameraModal] = useState(false);
  const [linkModal, setLinkModal] = useState(false);
  
  const [replayModal, setReplayModal] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [aboutme, setaboutme] = useState("");
  const [researchInt, setresearchInt] = useState("");
  const [desgination, setdesignation] = useState("");
  const [experience, setexperience] = useState("");
  const [username,setusername]=useState("");
  const [userData , setuserData] = useState("");
  const history = useHistory();
  const [info,setinfo]=useState("");
 // const [filE, setFile] = useState();
 const [file,setfile]=useState(null);
  const [filename, setFileName] = useState("");

console.log("profile here"+isAuthenticated);
// console.log(user.email);

      const saveFile = (e) => {
		  console.log("Inisde save");
        setfile(e.target.files[0]);
        setFileName(e.target.files[0].name);
      };
      const uploadFile = async (e) => {
        const formData = new FormData();
        formData.append("data", file);
        formData.append("name", filename);
		console.log("HERE @");
		console.log(filename);
		console.log(file);
		console.log(isAuthenticated && user.email);
		console.log(formData);
        try {
			
			await axios.post(`/api/profiles/${isAuthenticated && user.email}`,formData);
			console.log("Done");
			
        } catch (ex) {
          console.log(ex);
		  console.log("Error: "+ex );
        }
      };


  async function onSave(e){
    e.preventDefault();
   
	try {
		const res = await axios.post("/api/profiles/profile", {
		  email,
		  password,
		  aboutme,
      researchInt,
		  desgination,
		  experience,
		  username 
		});
		if(file){
			// const data=new FormData();
			// console.log(data);
			const data=Date.now()+file.name;
            data.append("file",file);
			data.append("name",data);
			console.log("HERE @");
				console.log(data);
			try{
                 console.log("INSIDE #");
                await axios.post(`/api/profiles/${isAuthenticated && user.email}`,data);
                console.log("Done");
        
            }
			catch(err){
             console.log(err);
            }
		}
		console.log(res.data);
		window.location.replace("http://localhost:3000/faculty");
	  }
	   catch (err) {
		console.log(err);
	  }

  }
 
  useEffect(()=>{

	const fetchData = async () => {
		try {
			const res=await axios.get(`/api/profiles/${isAuthenticated && user.email}`);
			console.log(res.data);
		    setinfo(res.data);
			
	
		} catch (error) {
		   console.log(error);
		}
	  };
	
	console.log(info);
	   
	
	
	   fetchData();
  },[]);




  return (
    <Fragment>
      <PageTitle  activeMenu="Profile" motherMenu="App" />

      <div className="row">
        <div className="col-lg-12">
          <div className="profile card card-body px-3 pt-3 pb-0">
            <div className="profile-head">
              {/* <div className="photo-content">
                {/* <div className="cover-photo"></div> 
				            <img src="https://www.easytourz.com/uploads/Businesslogo/1565164968.jpg"></img>
               </div> */}
               <div className="profile-info">
                <div className="profile-photo">
                  <img
                    src={isAuthenticated && info.pic}
                    className="img-fluid rounded-circle"
                    alt="profile"
                  /><div className="form-group">
				  {/* <label>Update Profile</label>
				  <input type="file" placeholder=" " 
				  // value={v}
				  id="fileInput"
				  onChange={(e)=>setfile(e.target.files[0])}
				  className="form-control"/>
				  <button type="submit" className="btn btn-primary" onClick={uploadFile}>Save</button> */}
				   <input type="file" onChange={saveFile} name="data" />
                 <button onClick={uploadFile}>Upload</button>
			  </div>
                </div>
                <div className="profile-details">
                  <div className="profile-name px-3 pt-2">
                    <h4 className="text-primary mb-0">{isAuthenticated && info.username}</h4>
                    <p>{isAuthenticated && info.desgination}</p>
                  </div>
                  <div className="profile-email px-2 pt-2">
                    <h4 className="text-muted mb-0">{isAuthenticated && info.email}</h4>
                    <p>Email</p>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>
         <div className="row">
                  <div className="col-xl-4">
			  <div className="row"> 
				
			</div>	
		   </div>
        <div className="col-xl-12">
          <div className="card">
            <div className="card-body">
              <div className="profile-tab">
                <div className="custom-tab-1">
						<ul className="nav nav-tabs">
							
							<li className="nav-item" onClick={() => setActiveToggle("aboutMe")}>
								<Link to="#about-me"  data-toggle="tab" className={`nav-link ${ activeToggle === "aboutMe" ? "active show" : ""}`}>About Me</Link>
							</li>
							<li className="nav-item">
								<Link to="#profile-settings" data-toggle="tab" onClick={() => setActiveToggle("setting")} className={`nav-link ${ activeToggle === "setting" ? "active show" : ""}`}>Setting</Link>
							</li>
						</ul>
					     <div className="tab-content">
					     
						 <div id="about-me" className={`tab-pane fade ${ activeToggle === "aboutMe" ? "active show" : ""}`}>
							<div className="profile-about-me">
								<div className="pt-4 border-bottom-1 pb-3">
									<h4 className="text-primary">About Me</h4>
									<p className="mb-2">
										{isAuthenticated && info.aboutme}
									</p>
									
								</div>
							</div>
							{/* <div className="profile-skills mb-5">
								<h4 className="text-primary mb-2">Skills</h4>
								<Link to="/app-profile" className="btn btn-primary light btn-xs mb-1 mr-1"> Admin</Link>
								<Link to="/app-profile" className="btn btn-primary light btn-xs mb-1 mr-1" > Dashboard</Link>
								<Link to="/app-profile" className="btn btn-primary light btn-xs mb-1 mr-1">Photoshop</Link>
								<Link to="/app-profile" className="btn btn-primary light btn-xs mb-1 mr-1">Bootstrap</Link>
								<Link to="/app-profile" className="btn btn-primary light btn-xs mb-1 mr-1">Responsive</Link>
								<Link to="/app-profile" className="btn btn-primary light btn-xs mb-1 mr-1">Crypto</Link>
							</div> */}
							<div className="profile-lang  mb-5">
								<h4 className="text-primary mb-2">Research Interest</h4>
								<Link to="/app-profile" className="text-muted pr-3 f-s-16">
									<i className="flag-icon flag-icon-us" />{isAuthenticated && info.researchInt}
								</Link>
								{/* <Link to="/app-profile" className="text-muted pr-3 f-s-16">
									<i className="flag-icon flag-icon-fr" />Python
								</Link>
								<Link to="/app-profile" className="text-muted pr-3 f-s-16">
									<i className="flag-icon flag-icon-bd" />Networking
								</Link> */}
							</div>
							<div className="profile-personal-info">
								<h4 className="text-primary mb-4">
									Personal Information
								</h4>
								<div className="row mb-2">
									<div className="col-3">
										<h5 className="f-w-500"> Name<span className="pull-right">:</span></h5>
									</div>
									<div className="col-9">
										<span>{isAuthenticated && info.username}</span>
									</div>
								</div>
								<div className="row mb-2">
									<div className="col-3">
										<h5 className="f-w-500">Email<span className="pull-right">:</span></h5>
									</div>
									<div className="col-9">
										<span>{isAuthenticated && info.email}</span>
									</div>
								</div>
								<div className="row mb-2">
									<div className="col-3">
										<h5 className="f-w-500">Designation<span className="pull-right">:</span></h5>
									</div>
									<div className="col-9">
										<span>{isAuthenticated && info.desgination}</span>
									</div>
								</div>

								<div className="row mb-2">
									<div className="col-3">
										<h5 className="f-w-500">Number of publications<span className="pull-right">:</span></h5>
									</div>
									<div className="col-9">
										<span>10</span>
									</div>
								</div>
								<div className="row mb-2">
									<div className="col-3">
										<h5 className="f-w-500">Year Experience<span className="pull-right">:</span></h5>
									</div>
									<div className="col-9">
										<span>{isAuthenticated && info.experience} Year Experiences</span>
									</div>
								</div>
							</div>
						</div>
						<div id="profile-settings" className={`tab-pane fade ${ activeToggle === "setting" ? "active show" : ""}`}>
							<div className="pt-3">
								<div className="settings-form">
									<h4 className="text-primary">Account Setting</h4>
									<form onSubmit={onSave } >
									
										<div className="form-row">
											<div className="form-group col-md-6">
												<label>Email</label>
												<input type="email" placeholder="Official Email id" 
												value={email}
												onChange={(e)=>setemail(e.target.value)}
												className="form-control"/>
											</div>
											<div className="form-group col-md-6">
												<label>Name</label>
												<input type="text" placeholder="Name" 
												value={username}
												onChange={(e)=>setusername(e.target.value)}
												className="form-control"/>
											</div>
										</div>
										<div className="form-group">
											<label>About Me</label>
											<input type="text" placeholder="" 
											value={aboutme}
											onChange={(e) => setaboutme(e.target.value)}
											className="form-control"/>
										</div>
										<div className="form-group">
											<label>Research Intersets</label>
											<input type="text" placeholder=" " 
											value={researchInt}
											onChange={(e) => setresearchInt(e.target.value)}
											className="form-control"/>
										</div>
									
										<div className="form-group">
											<label>Designation</label>
											<input type="text" placeholder=" " 
											value={desgination}
											onChange={(e) => setdesignation(e.target.value)}
											className="form-control"/>
										</div>
										<div className="form-group">
											<label>Years of Experience</label>
											<input type="text" placeholder=" " 
											value={experience}
											onChange={(e) => setexperience(e.target.value)}
											className="form-control"/>
										</div>
										<div className="form-group">
											<div className="custom-control custom-checkbox">
												<input
												  type="checkbox"
												  className="custom-control-input"
												  id="gridCheck"
												/>
												
											</div>
										</div>
										<button className="btn btn-primary" type="submit">save</button>
									</form>
								</div>
							</div>
						</div>
					</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
	
    </Fragment>
  );
};

export default AppProfile;
