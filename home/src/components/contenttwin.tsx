import React, { ReactNode } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface ContentTwinProps {
  children: ReactNode[]; // Dois filhos para o conteúdo
}

const ContentTwin: React.FC<ContentTwinProps> = ({ children }) => {
  return (
    <div className="content-twin d-flex"
    style={{ height: '90vh', overflow: 'hidden', border:'1px solid white' }}>

        <div className="d-flex justify-content-center align-items-end" style={{ width: '50%', maxWidth: '100%', border:'1px solid yellow' }}>
            {children[0]}
        </div>

        <div className="d-flex justify-content-center align-items-end" style={{ width: '50%', maxWidth: '100%', border:'1px solid green' }}>
            {children[1]}
        </div>

    </div>
  );
};

export default ContentTwin;
