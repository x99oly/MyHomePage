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
        <div className='d-flex justify-content-center align-items-center' style={{ width:'100%', height:'100%'}}>
          <Image
            src="/eu-bg-black.png"  alt="" 
            width={200}  height={0}
            style={{
              width: '40%',
              height: 'auto',
            }}
            />
        </div>
        <div className='d-flex flex-column justify-content-end align-items-start' style={{width:'100%', height:'100%'}}>
          <h4>DESENVOLVEDOR FULL-STACK</h4>
          <h6>C# | .NET | ASP.NET | MySql | Next.js | Python | Flask | Bootstrap</h6>
          <br></br>
          <p>
            Estudante de programação focado em se especializar em desenvolvimento back-end, com ênfase em .NET. Formado como técnico em administração, valorizo a organização e o planejamento como pilares essenciais na construção de projetos. Por isso, busco me constantemente aprimorar meus conhecimentos em arquitetura de software e na aplicação de princípios SOLID.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, molestiae recusandae enim perspiciatis, quia a, ipsum iusto placeat eaque ullam ratione illum nobis consequatur beatae temporibus nisi. Et, mollitia expedita?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil aperiam iste provident delectus quos corrupti voluptatibus eligendi hic animi rem, facere maiores? Repudiandae, ratione rerum dolor cumque quibusdam suscipit vel.
            <br></br>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet quos quia fugiat alias cupiditate totam fuga odio officia, id nemo, voluptatibus mollitia iure tempore accusantium magni. Excepturi quae labore eius!
          </p>        
        </div>  
      </ContentTwin>
    </div>
  );
}
