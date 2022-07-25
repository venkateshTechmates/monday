import React, { useState } from 'react';

export default function MainSection() {

    const [testcount, setTestCount] = useState(0);
    const [newGroup, setNewGroup] = useState([]);
    function printsome() {
        setTestCount(testcount + 1);
    }
    function GetNewGroup() {
      setNewGroup([...newGroup,{id:testcount,name:'venkatesh'}]);
    }
    return <div className="main">
        <div className="main-heading">
            <div className="main-heading-info-fav">
                <div>
                    <h1 className="heading">BlueScreen Vfx</h1>
                </div>

                <span className="info"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                    fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path
                        d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg></span>
                <span className="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"><svg
                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    className="bi bi-star" viewBox="0 0 16 16">
                    <path
                        d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                </svg></span>
            </div>
        </div>
        <div className="btn-group">
            <button type="button" className="btn btn-primary" onClick={() => { printsome();GetNewGroup(); }}>New Project</button>
            <button type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="sr-only">Toggle Dropdown</span>
            </button>
            <div className="dropdown-menu">
                <a className="dropdown-item" href="#">New Group of Projects</a>
                <a className="dropdown-item" href="#">Import Projects</a>
            </div>
        </div>
        {newGroup.map((s,i) => (
            <div key={i}><h3>{s.id}</h3><h3>{s.name}</h3></div>
            
        ))}
       
    </div>
}