// import React,{Fragment} from 'react';
// import {Link} from 'react-router-dom';
// import { MDBDataTable } from 'mdbreact';
// import Dropdownblog1 from './Dropdownblog1';
// import PageTitle from "../../../layouts/PageTitle";
// import { useState,useEffect } from 'react';
// import axios from 'axios';

// const Customerlist = () => {
	
// 	const [rec,setrec]=useState([]);

// 	useEffect(()=>
// 	{const getdata=async()=>{
// 		const res=await axios.get("api/profiles/");
// 		// console.log(res.data);
// 		var d=res.data;
// 		setrec(d.slice(-5,-1));
// 	}
// 	getdata();
	
// 	})
// 	console.log(rec);

//   const data = {
//     columns: [
// 		{label: 
// 			<div className="sorting_1 p-0 text-center">
// 				<div className="custom-control custom-checkbox ml-2">
// 					{/* <input type="checkbox" className="custom-control-input" id="checkAll" required="" />	
// 					<label className="custom-control-label" htmlFor="checkAll"></label>*/}
// 				</div>
// 			</div>
// 		, },
// 		{label: 'Faculty Name', field: 'customer',	sort: 'asc', 	},
// 		{label: 'Designation', field: 'location', sort: 'asc', 	},
// 		{label: 'Total Papers', field: 'amount', sort: 'asc', 	},
// 		{label: 'Email-id', field: 'status',  sort: 'asc',	},
		
//     ],	
//     rows: [
// 		{	check: 
// 				<div className="sorting_1 p-0 text-center">
// 					{/* <div className="custom-control custom-checkbox ml-2">
// 						<input type="checkbox" className="custom-control-input" id="customCheckBox66" required="" />	
// 						<label className="custom-control-label" htmlFor="customCheckBox66"></label>						
// 					</div> */}
// 				</div>,
// 			id: '#5552311',	date: '26 March 2020 ',	customer:"",	location: 'Professor',	amount: '10',
// 			status: <Link to ={"/ecom-product-detail"} className="btn bgl-light text-black btn-sm"></Link>,
// 			dropdown:<Dropdownblog1 />,
// 		},
// 		{
// 			check: 
// 			<div className="sorting_1 p-0 text-center">
// 				<div className="custom-control custom-checkbox ml-2">
// 					{/* <input type="checkbox" className="custom-control-input" id="customCheckBox67" required="" />	
// 					<label className="custom-control-label" htmlFor="customCheckBox67"></label>						 */}
// 				</div>
// 			</div>,	
// 			id: '#5552322',	date: '27 March 2020',	customer: 'Dr. P. Jayarekha',location: 'Professor & HOD', amount: '7',
// 			status: <Link to ={"/ecom-product-detail"} className="btn bgl-light text-black btn-sm">jayarekha.ise@bmsce.ac.in</Link>,
// 			dropdown: <Dropdownblog1 />,
// 		},
// 		{
// 			check: 
// 			<div className="sorting_1 p-0 text-center">
// 				<div className="custom-control custom-checkbox ml-2">
// 					<input type="checkbox" className="custom-control-input" id="customCheckBox68" required="" />	
// 					<label className="custom-control-label" htmlFor="customCheckBox68"></label>						
// 				</div>
// 			</div>,	
// 			id: '#5552323',	date: '28 March 2020',	customer: 'Dr. SHEELA S V',location: 'Professor',amount: '5',
// 			status: <Link to ={"/ecom-product-detail"} className="btn bgl-light text-black btn-sm">ssv.ise@bmsce.ac.in</Link>,
// 			dropdown: <Dropdownblog1 />,
// 		},
// 		{
// 			check: 
// 			<div className="sorting_1 p-0 text-center">
// 				<div className="custom-control custom-checkbox ml-2">
// 					{/* <input type="checkbox" className="custom-control-input" id="customCheckBox69" required="" />	
// 					<label className="custom-control-label" htmlFor="customCheckBox69"></label>						 */}
// 				</div>
// 			</div>,		
// 			id: '#5552349',	date: '21 March 2020',	customer: 'GURURAJA H S',location: 'Assistant Professor',amount: '7',
// 			status: <Link to ={"/ecom-product-detail"} className="btn bgl-light text-black btn-sm">gururajhs.ise@bmsce.ac.in</Link>,
// 			dropdown: <Dropdownblog1 />,
// 		},
// 		{
// 			check: 
// 			<div className="sorting_1 p-0 text-center">
// 				<div className="custom-control custom-checkbox ml-2">
// 					{/* <input type="checkbox" className="custom-control-input" id="customCheckBox70" required="" />	
// 					<label className="custom-control-label" htmlFor="customCheckBox70"></label>						 */}
// 				</div>
// 			</div>,		
// 			id: '#5552356',	date: '12 March 2020',	customer: 'PALLAVI B',location: 'Assistant Professor',	amount: '5',
// 			status: <Link to ={"/ecom-product-detail"} className="btn bgl-light text-black btn-sm">pallavib.ise@bmsce.ac.in</Link>,
// 			dropdown: <Dropdownblog1 />,
// 		},
// 		{
// 			check: 
// 			<div className="sorting_1 p-0 text-center">
// 				<div className="custom-control custom-checkbox ml-2">
// 					{/* <input type="checkbox" className="custom-control-input" id="customCheckBox71" required="" />	
// 					<label className="custom-control-label" htmlFor="customCheckBox71"></label>						 */}
// 				</div>
// 			</div>,		
// 			id: '#5552358',	date: '15 March 2020',	customer: 'RASHMI R',location: 'Assistant Professor',	amount: '2',
// 			status: <Link to ={"/ecom-product-detail"} className="btn bgl-light text-black btn-sm">rashmir.ise@bmsce.ac.in</Link>,
// 			dropdown: <Dropdownblog1 />,
// 		},
		
		
// 	],
	
	
// };
// 	const options = {
// 		filterType: 'checkbox',
// 	};
// 	return (
// 		<Fragment>
// 			<PageTitle activeMenu="Faculty List" motherMenu="Dashboard" />

// 			<div className="row">
// 				<div className="col-xl-12">
// 					<div className="table-responsive">
// 						<div  className="display mb-4 dataTablesCard customer-list-table">		
// 							<MDBDataTable data={data} options={options} />	
// 						</div>
// 					</div>
// 				</div>	
// 			</div>
// 		</Fragment>		
		
// 	);
// }
// export default Customerlist;
import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';
import { MDBDataTable } from 'mdbreact';
import Dropdownblog1 from './Dropdownblog1';
import PageTitle from "../../../layouts/PageTitle";
import { useState,useEffect } from 'react';
import axios from 'axios';
import {useAuth0} from "@auth0/auth0-react";

const Customerlist = () => {
	
	
	const {user,isAuthenticated}=useAuth0();
	const [info,setinfo]=useState([]);
		// console.log(isAuthenticated && rec[36].email);

		useEffect(()=>{

			const fetchData = async () => {
			  try {
				const res=await axios.get(`/api/profiles/`);
				console.log(res.data);
				setinfo(res.data);
				
			
			  } catch (error) {
				 console.log(error);
			  }
			  };
			// console.log(isLoading);
			     fetchData();
			},[])
const data = {
     columns: [
		{label: 
			<div className="sorting_1 p-0 text-center">
				<div className="custom-control custom-checkbox ml-2">
					{/* <input type="checkbox" className="custom-control-input" id="checkAll" required="" />	
					<label className="custom-control-label" htmlFor="checkAll"></label>*/}
				</div>
			</div>
		, },
		{label: 'Faculty Name', field: 'customer',	sort: 'asc', 	},
		{label: 'Email-id', field: 'status',  sort: 'asc',	},
    ],	
	
   rows:
        [...info.map((member,key)=>(
			{
			customer:<div >{isAuthenticated && member.workl}</div>,
			status: <Link className="btn bgl-light text-black btn-sm">{isAuthenticated && member.email}</Link>,
			dropdown: <Dropdownblog1 />,
		    }
			
		   )),
		   
		
		]	
};
	const options = {
		filterType: 'checkbox',
	};
	return (
		<Fragment>
			<PageTitle activeMenu="Faculty List" motherMenu="Dashboard" />

			<div className="row">
				<div className="col-xl-12">
					<div className="table-responsive">
						<div  className="display mb-4 dataTablesCard customer-list-table">		
							<MDBDataTable data={data} />	
						</div>
					</div>
				</div>	
			</div>
		</Fragment>		
		
	);
}
export default Customerlist;