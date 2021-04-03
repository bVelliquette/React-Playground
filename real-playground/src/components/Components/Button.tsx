import React from "react";
import { Link } from "react-router-dom";

interface Props {
  route: string;
  label: string;
  className?: string;
}

const Button: React.FC<Props> = ({ route, label, className }) => {
  return (
    <div className={`button-container ${className}`}>
      <Link to={route}>
        <button className="button-content">
          <p className="button-text">{label}</p>
        </button>
      </Link>
    </div>
  );
};

export default Button;
