import React, { ReactNode } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface ContentTwinProps {
  children: ReactNode[];
}

const ContentTwin: React.FC<ContentTwinProps> = ({ children }) => {
  return (
    <div
      className="d-flex justify-content-between align-items-center flex-wrap"
      style={{
        height: '80vh',
        maxWidth: '80%',
        margin: '0 auto',
      }}
    >
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          height: '80%',
          width: '45%',
        }}
      >
        {children[0]}
      </div>

      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          height: '80%',
          width: '45%',
        }}
      >
        {children[1]}
      </div>
    </div>
  );
};

export default ContentTwin;
