// src/app/Home.tsx
import Navbar from '@components/navbar'; 
import ContentTwin from '@/components/contenttwin'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 

export default function Home() {
  return (
    <div className="text-white" style={{backgroundColor: 'var(--background)' }}>
      <Navbar />
      
      <div style={{ height: '80px', visibility: 'hidden' }}></div> {/* Div fantasma */}
      
      <ContentTwin>
        <div
          className="d-flex justify-content-end align-items-end"
          style={{
            height: '100%',
            width: '50vw',
          }}
        >
          <div
            style={{
              borderTop: '2px solid white',
              width: '50vw',
              margin: '20px auto',
            }}
          ></div>
        </div>

        <div
          className="d-flex justify-content-start align-items-end w-100"
          style={{
            height: '100%',
            backgroundColor: 'transparent',
          }}
        >
            <div className="d-flex flex-column justify-content-start" style={{ width: '100%' }}>
              <h3>DESENVOLVEDOR FULL-STACK</h3>
              <h5>C# | .NET | ASP.NET | MySql | Next.js | Python | Flask | Bootstrap</h5>
              <p>
                Estudante de programação focado em se especializar em desenvolvimento back-end, com ênfase em .NET. Formado como técnico em administração, valorizo a organização e o planejamento como pilares essenciais na construção de projetos. Por isso, busco me constantemente aprimorar meus conhecimentos em arquitetura de software e na aplicação de princípios SOLID.
              </p>
            </div>
        </div>
      </ContentTwin>
    </div>
  );
}
