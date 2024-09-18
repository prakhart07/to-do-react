import { useState } from "react";
import axios from 'axios';
import jsonData from './Data.json';
// import fs from "fs";
 

function ModalForm(){

    const [data,setData]=useState({startdate:"",task:"",progress:"",enddate:""});
    

    function onChange(e){
        console.log(e.target.name,e.target.value,typeof(e.target.value));
        setData({...data,[e.target.name]:e.target.value});
    }
    async function save(e){
        e.preventDefault();
        console.log("save data:",data);
        const obj=(data);
        console.log("parse data obj:",obj);
        const savedata= await axios.post("http://localhost:4000/task/save",obj);
        console.log("response after savedata:",savedata);
        setData({startdate:"",task:"",progress:"",enddate:""});
    }
    

    return(
        <div className="container">
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Enter Task
                </button>
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">To-Do</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                    <form>
                <div className="form-group">
                    <label for="exampleFormControlInput1">Date</label>
                    <input type="date" className="form-control" id="exampleFormControlInput1" name="startdate" placeholder="" value={data?.startdate} onChange={onChange}/>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlSelect1">Progress</label>
                    <select className="form-control" id="exampleFormControlSelect1" name="progress" onChange={onChange}>
                    <option value="In Progress" defaultValue={true}>In Progress</option>
                    <option value="Completed">Completed</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Task</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="task" value={data?.task} onChange={onChange}></textarea>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlInput1">End Date</label>
                    <input type="date" className="form-control" id="exampleFormControlInput1" name="enddate" placeholder="" value={data?.enddate} onChange={onChange}/>
                </div>
                </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={save} >Save changes</button>
                    </div>
                    </div>
                </div>
                </div>    
        </div>
    )
}

export default ModalForm;