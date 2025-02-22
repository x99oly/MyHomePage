import React, { ReactNode } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface ContentTwinProps {
  children: ReactNode[]; 
}

const ContentTwin: React.FC<ContentTwinProps> = ({ children }) => {
  return (
    <div className="d-flex justify-content-center align-items-center w-100 h-100">
      <div className="d-flex justify-content-center align-items-center col-6">
        {children[0]}
      </div>
      <div className="d-flex justify-content-center align-items-center col-6">
        {children[1]}
      </div>
    </div>
  );
};
export default ContentTwin;