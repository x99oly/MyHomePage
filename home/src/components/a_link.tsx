import 'bootstrap/dist/css/bootstrap.min.css';

interface AlinkProps {
    title: string;
    link: string;
}

const Alink: React.FC<AlinkProps> = ({ title, link}) => {
    return (
        <a className="nav-link active" style={{ width: '150px' }} href={link}>
            {title}
        </a>
    );
};

export default Alink;