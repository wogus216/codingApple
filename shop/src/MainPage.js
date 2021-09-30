import Card from './jumbotron';
import { Button } from 'react-bootstrap';
import shoes from './data';
export default function Main() {
  return (
    <>
      <div className="jumbotron">
        <h1 className="display-4">50% 시즌 오픈</h1>
        <p className="lead">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>{' '}
        </p>
      </div>

      <div className="container">
        <div className="row">
          {shoes.map((a, i) => {
            return <Card shoes={shoes[i]} i={i} key={i} />;
          })}
        </div>
      </div>
    </>
  );
}
