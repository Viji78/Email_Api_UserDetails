 import React,{useState,useEffect} from 'react'


function EmailApiTable(){

    let [details,setDeatails]=useState([])
    
    useEffect(()=>{
        let getDetails=async()=>{
            let UserDetails=await fetch("https://reqres.in/api/users?page=2")
            UserDetails=await UserDetails.json();
            UserDetails=UserDetails.data

            setDeatails(UserDetails)
        }
        getDetails();
    },[])


    return(
        <div>
            <h1 align='center'>UserDetails</h1>
        <table border={""} cellPadding="5px"align='center'>
          <thead>
            <tr>
            <th>Profile</th>
            <th>Email</th>
            <th>First_name</th>
            <th>Last_name</th>
            
            </tr>
          </thead>
          {details.map(({avatar,email,first_name,last_name},id)=>{
            return (
            <tbody key={id}>
            <tr>
            <td><img src={avatar} alt="" /></td>
            <td> {email} </td>
            <td> {first_name}</td>
            <td> {last_name} </td>
            </tr>
          </tbody>

          )
          })}
        </table>
      
    </div>
    )
}
export default  EmailApiTable