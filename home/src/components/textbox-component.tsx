import 'bootstrap/dist/css/bootstrap.min.css';
import { TextboxInterface } from '@/interfaces/textbox-interface';

const TextboxComponent: React.FC<TextboxInterface> = ({ title, stacks, paragraphs }) => {
  return (
    <div className="d-flex flex-column justify-content-end align-items-start">
      <h4>{title.toUpperCase()}</h4>
      <h6>{stacks.toUpperCase()}</h6>
      <br />
      {paragraphs.map((p, index) => (
        <p key={index}>{p}</p>
      ))}
      <br/>
    </div>
  );
};

export default TextboxComponent;
