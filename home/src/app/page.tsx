// src/app/page.tsx ou src/app/Home.tsx (dependendo de como nomeou)
import Navbar from '@components/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div className="bg-dark">
      <Navbar/>
      {/* Outros conteúdos da página */}
    </div>
  );
}
