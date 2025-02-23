import React, { ReactNode } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface ContentTwinProps {
  children: ReactNode[]; // Dois filhos para o conteúdo
}

const ContentTwin: React.FC<ContentTwinProps> = ({ children }) => {
  return (
    <div className="row justify-content-center align-items-center"
      style={{ height: '90vh', border: '2px solid green', }} >
        <div className="d-flex h-100 justify-content-center align-items-center"
          style={{  width: '50vw',  border: '2px solid blue', }}
        >
            <div style={{ width: '80%', height: '80%', border: '1px solid yellow', overflow:'hidden' }}>
              {children[0]}
            </div>
        </div>
        <div
          className="d-flex h-100 justify-content-center align-items-center"
          style={{ width: '50vw', border: '2px solid blue', }}
        >
          <div style={{ width: '80%', height: '80%', border: '1px solid orange', overflow:'hidden' }}>
            {children[1]}
          </div>
        </div>
    </div>
  );
};

export default ContentTwin;
