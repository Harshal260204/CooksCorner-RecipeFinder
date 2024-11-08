import React from "react";
import { Link } from "react-router-dom";
import '../Styles/CategoryCard.css';

export default function CategoryCard(props) {
  return (
    <div className="col-2" > {/* This can be adjusted depending on how many cards you want in a row */}

      <Link to={props.link} className="card text-center"> {/*props.link refers to the link prop that you pass to CategoryCard from Homepage. */}
        <img src={props.img} className="card-img-top" alt={props.title} />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
        </div>
      </Link>
    </div>
  );
}
