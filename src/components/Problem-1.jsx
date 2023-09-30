import React, {useState} from 'react';

const data = [
    { "name": "John", "status": "active" },
    { "name": "Alice", "status": "completed" },
    { "name": "Bob", "status": "active" },
    { "name": "Eva", "status": "completed" },
    { "name": "Michael", "status": "active" },
    { "name": "Sophia", "status": "active" },
    { "name": "David", "status": "completed" },
    { "name": "Olivia", "status": "active" },
    { "name": "Liam", "status": "completed" }
]

const Problem1 = () => {

    const [show, setShow] = useState('all');
    const [error, setError] = useState(null);
    const [task, setTask] = useState(data)

   
    
    const handleClick = (val) =>{
        setShow(val);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!e.target.status?.value || !e.target.name?.value) {
            setError("please provide required input field")
            return
        }

        if(!error){
        const newTask = {
            name: e.target.name?.value,
            status: e.target.status?.value   
         }
         
         setTask([...task, newTask].sort((a, b) => {
            if (a.status === "active" && b.status === "completed")  return -1
             else if (a.status === "completed" && b.status === "active")  return 1;
             else return 0}))
        }

        e.target.reset()
        
    }

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form className="row gy-2 gx-3 align-items-center mb-4" onSubmit={handleSubmit}>
                        <div className="col-auto">
                            <input type="text" className="form-control" placeholder="Name" name='name'/>
                        </div>
                        <div className="col-auto">
                            <input type="text" className="form-control" placeholder="Status" name="status"/>
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                    {error && <p className='text-center text-danger mt-2 mb-2'>Please fill in the required fields on the form</p>}
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='all' && 'active'}`} type="button" onClick={()=>handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show==='active' && 'active'}`} type="button" onClick={()=>handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='completed' && 'active'}`} type="button" onClick={()=>handleClick('completed')}>Completed</button>
                        </li>
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='others' && 'active'}`} type="button" onClick={()=>handleClick('others')}>Others</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Status</th>
                        </tr>
                        </thead>
                        <tbody>
                       {show ==="all" && task.map((val,idx) => <tr key={idx}>
                            <th scope="col">{val.name}</th>
                            <th scope="col">{val.status}</th>
                        </tr>)}
                       {show ==="active" && task.filter(val => val.status === "active").map((val,idx) => <tr key={idx}>
                            <th scope="col">{val.name}</th>
                            <th scope="col">{val.status}</th>
                        </tr>)}
                       {show ==="completed" && task.filter(val => val.status === "completed").map((val,idx) => <tr key={idx}>
                            <th scope="col">{val.name}</th>
                            <th scope="col">{val.status}</th>
                        </tr>)}
                       {show ==="others" && task.filter(val => val.status !== "completed" && val.status !== "active").map((val,idx) => <tr key={idx}>
                            <th scope="col">{val.name}</th>
                            <th scope="col">{val.status}</th>
                        </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;