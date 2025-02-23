import React, { ReactNode } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface ContentTwinProps {
  children: ReactNode[]; // Dois filhos para o conteúdo
}

const ContentTwin: React.FC<ContentTwinProps> = ({ children }) => {
  return (
    <div className="row justify-content-center align-items-center"
      style={{ height: '90vh' }} >
        <div className="d-flex h-100 justify-content-center align-items-center"
          style={{  width: '50vw',}}
        >
            <div style={{ width: '80%', height: '80%', overflow:'hidden' }}>
              {children[0]}
            </div>
        </div>
        <div
          className="d-flex h-100 justify-content-center align-items-center"
          style={{ width: '50vw'}}
        >
          <div style={{ width: '80%', height: '80%', overflow:'hidden' }}>
            {children[1]}
          </div>
        </div>
    </div>
  );
};

export default ContentTwin;
