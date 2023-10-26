
import React, { useState } from "react";
import { Modal, Nav, Tab } from "react-bootstrap";
import { Link,useLocation } from "react-router-dom";

import {
	Row,
	Col,
	Card,
	Table,
	Badge,
	Dropdown,
	ProgressBar,
  } from "react-bootstrap";
import PageTitle from "../../../../layouts/PageTitle";
import {useAuth0} from "@auth0/auth0-react";
import axios from "axios";
import { useEffect } from "react";
var sub;
const ProductDetail = () => {
  const location=useLocation();
  const path= location.pathname.split("/")[2];
  console.log(path);
  const {user,isAuthenticated,isLoading}=useAuth0();
  const [info,setinfo]=useState({});
  const [reviewToggle, setReviewToggle] = useState(false);
  const [activeTab, setActiveTab] = useState('0');
  useEffect(()=>{

    const fetchData = async () => {
      try {
        const res=await axios.get(`/api/profiles/${isAuthenticated && path}`);
        console.log(res.data);
        setinfo(res.data);
        
    
      } catch (error) {
         console.log(error);
      }
      };
    console.log("Here####@@@");
  //  console.log(info);
    console.log(info);
       sub = info.work; 
    console.log("After%%");
    console.log(sub);
    console.log("Finsied**");
       fetchData();
    })
	
	console.log(info);
    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
  return (
    <>
      <PageTitle motherMenu="Profile" activeMenu={isAuthenticated && info.username} />
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <div className="row">
					<div className="col-xl-3 col-lg-6  col-md-6 col-xxl-5 ">
					 
						<Tab.Container defaultActiveKey="first">
							
							<div className="tab-slide-content new-arrival-product mb-4 mb-xl-0">
							  {/* Nav tabs */}
								<Nav as="ul" className="nav slide-item-list mt-3" role="tablist">
									 
									<Nav.Item as="li">
										<Nav.Link as="a" eventKey="second" to="#second">
											<img className="img-fluid" src={isAuthenticated && info.pic} alt="" width={50}/>
										</Nav.Link>
									</Nav.Item>
								
								</Nav>
							</div>
						</Tab.Container>
					</div>
              

                <div className="col-xl-9 col-lg-6  col-md-6 col-xxl-7 col-sm-12">
                  <div className="product-detail-content">
               
                    <div className="new-arrival-content pr">
                      <h4>{isAuthenticated && info.username}</h4>
						<div className="comment-review star-rating">
							<ul>
								<li className="star" title="Poor" data-value={1}>
									<i className="fa fa-star fa-fw" />
								</li>
								<li className="star" title="Fair" data-value={2}>
									<i className="fa fa-star fa-fw" />
								</li>
								<li className="star" title="Good" data-value={3}>
									<i className="fa fa-star fa-fw" />
								</li>
								<li className="star" title="Excellent" data-value={4}>
									<i className="fa fa-star fa-fw" />
								</li>
								<li className="star" title="WOW!!!" data-value={5}>
									<i className="fa fa-star fa-fw" />
								</li>
							</ul>
							<span className="review-text">({info.experience } years of experience)  </span>
						</div>
						{/* <div className="d-table mb-2">
							<p className="price float-left d-block">$325.00</p>
						</div> */}
						<p>Email id:{" "}<span className="item"> {" "}{isAuthenticated && info.email} </span></p>
						<p>Designation: <span className="item"></span>{isAuthenticated && info.desgination}</p>
						<p>
							Research Interests:&nbsp;&nbsp;
							<span className="badge badge-success light mr-1">{isAuthenticated && info.researchInt}</span>
							<span className="badge badge-success light mr-1">{isAuthenticated && info.researchInt}</span>
							<span className="badge badge-success light mr-1">{isAuthenticated && info.researchInt}</span>
						</p>
						<p className="text-content">
						{isAuthenticated && info.aboutme}
						</p> 
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
	
		<Col lg={12}>
          <Card>
            <Card.Header>
              <Card.Title>Submissions</Card.Title>
            </Card.Header>
            <Card.Body>
              <Table responsive hover className="header-border verticle-middle">
                <thead>
                  <tr>
                    <th scope="col">Link for the Publication</th>
                
                  </tr>
                </thead>
                <tbody>
                 
               {sub?.map((member,key)=>(
                 <tr>
                    <td>
                      <a href={isAuthenticated && member}>{isAuthenticated && member}</a>
                    </td>   
                 </tr>
               ))}
				           
              
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
    </>
  );
};

export default ProductDetail;
