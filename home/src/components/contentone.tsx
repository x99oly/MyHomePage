import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '@/components/cards'; // Certifique-se de que o caminho do seu Card está correto
import { RepositoryClass } from '@/entities/repository';

const Portfolio: React.FC = () => {
  return (
    <div
      id="portifolio"
      className="d-flex justify-content-center align-content-center"
      style={{ width: '100vw', minHeight: '450px' }}
    >
      <div className="card-container">
        <Card {...new RepositoryClass('none', '/images/nasa.jpg', 'none', 'none and none')} />
        <Card {...new RepositoryClass('none', '/images/nasa.jpg', 'none', 'none and none')} />
        <Card {...new RepositoryClass('none', '/images/nasa.jpg', 'none', 'none and none')} />
        <Card {...new RepositoryClass('none', '/images/nasa.jpg', 'none', 'none and none')} />
      </div>
    </div>
  );
};

export default Portfolio;
