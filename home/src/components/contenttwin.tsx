import React, { ReactNode } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/components/contenttwin.css';

interface ContentTwinProps {
  children: ReactNode[];
}
const pos = ["center", "end"]
const ContentTwin: React.FC<ContentTwinProps> = ({ children }) => {
  return (
    <div className="content-twin d-flex h-auto justify-content-center align-content-center">
       {children.map( (element, index) => (
                <div key={index} className={`content-twin-children d-flex justify-content-center align-items-${pos[index]}`}>
                  <div style={{ width:"80%" }}>
                    {element}
                  </div>
              </div>
       ))}
       
    </div>
  );
};

export default ContentTwin;
