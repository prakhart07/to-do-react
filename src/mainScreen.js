import { useEffect, useState } from 'react';
import Calendar from "react-calendar";
import DataTable from 'react-data-table-component';
import ModalForm from './modalForm';
import axios from 'axios';
// import fs from "fs";
import jsonData from './Data.json';




function MainScreen(){

    const Valuepiece=Date();
const value=Valuepiece;
console.log(value);
const [text,setText]=useState('');
const [taskData,setTaskData]=useState();
const [currentDate,setCurrentDate]=useState(value);

useEffect(()=>{
  fecthData();
},[])
async function fecthData(){
    try {
        console.log("axios api hit");
        const res= await axios.get('http://localhost:4000/task/all');
        console.log("res:",res.data);
        setTaskData(res.data);
    } catch (err) {
        console.log("err from axios:",err);

    }
    // console.log("json data:",jsonData);
    // fs.readFile('./Data.json',(err,data)=>{
    //     console.log("data from json file:",data);
    // })
}
function onChange(e){
  console.log("date:",e);
  setCurrentDate(e);
}
function handleOnChange(e){
  console.log(e.target.value);
  setText(e.target.name);
}
function edit(e){
    console.log("from edit fn:",e);
}
function deleteTask(e){
    console.log("from delete fn:",e);
}
const columns = [
	{
		name: 'Start Date',
		selector: row => row.startdate,
	},
    {
		name: 'Task',
		selector: row => row.task,
	},
    {
		name: 'Status',
		selector: row => row.progress,
	},
  {
		name: 'End Date',
		selector: row => row.enddate,
	},
    {
      name: 'Complete',
      cell: row => <button className='btn btn-success' onClick={() => edit(row.task)}>Done</button>
    },
    {
        name: 'Transfer',
        cell: row => <button className='btn btn-warning' onClick={() => edit(row.task)}>Transfer</button>
      },
      {
        name: 'Action delete',
        cell: row => {
          return <button className='btn btn-danger'  onClick={() => deleteTask(row.task)}>Delete</button>
        }
      },
];

    return(
        <div className="container text-center">
            <div className="row">
                <div className="col float-start">
                <Calendar onChange={onChange} value={currentDate} />
                </div>
                    <div className="col">
                    <div className="p-5 mx-5">
                        <ModalForm />
                    </div>
                 </div>
    </div>
    <div className='row'>
      <DataTable
      columns={columns}
      data={taskData}/>
    </div>
        </div>
    )
}

export default MainScreen;