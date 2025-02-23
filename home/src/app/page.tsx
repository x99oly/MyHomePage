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
        <div className='d-grid place-items-centers' style={{ width:'100%', height:'100%'}}>
          <Image
            src="/X.jpg"  alt="" 
            width={500}  height={0}
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <div>
          <h4>TÍTULO</h4>
          <h6>SUBTÍTULO</h6>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae dolores ab architecto saepe asperiores perferendis tempora fuga, maxime sit voluptatum beatae placeat dolorem esse magnam assumenda aut possimus autem quidem! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet quibusdam recusandae necessitatibus eum culpa accusamus eveniet expedita quaerat. Quo molestias reprehenderit tempora eum vitae repudiandae sapiente deleniti quia repellat commodi.</p>        
        </div>  
      </ContentTwin>
    </div>
  );
}
