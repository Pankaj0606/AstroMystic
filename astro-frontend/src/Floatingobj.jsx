import React, { useState, useEffect } from 'react';
import './Floatingobj.css'; // Optional CSS for Review section

const Floatingobj = () => {
    return (
        <div className="moving-objects">
        <div className="object object1"></div>
        <div className="object object2"></div>
        <div className="object object3"></div>
      </div>
    );
  };
  
  export default Floatingobj;
