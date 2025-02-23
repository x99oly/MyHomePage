// src/app/Home.tsx
import Image from 'next/image';
import Navbar from '@components/navbar'; 
import ContentTwin from '@/components/contenttwin';
import 'bootstrap/dist/css/bootstrap.min.css'; 

export default function Home() {
  return (
    <div className="text-white" style={{ backgroundColor: 'var(--background)' }}>
      <Navbar />      
      <div style={{ height: '8vh', visibility: 'hidden' }}></div> {/* Div fantasma - só quero saltar o espaço*/}
      
      <ContentTwin>
        <div>
          <Image
            src="/whale.jpg"  alt="" 
            width={500}  height={600}
          />
        </div>
        <div>Conteúdo 2</div>  
      </ContentTwin>
    </div>
  );
}
