import 'bootstrap/dist/css/bootstrap.min.css';
import '@components/cards.css'
import { RepositoryClass } from '@/entities/repository';

const Card: React.FC<RepositoryClass> = ({ title, img, link, about}) => {
  return (
    <div className="card border-0" style={{ width: "18rem" }}>
      <img className="card-img-top" src={img} alt={title} />
      <div className="card-body bg-black">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{about}</p>
        <a href={link} className="btn btn-primary">
          Acessar
        </a>
      </div>
    </div>
  );
};

export default Card;
