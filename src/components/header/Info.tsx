interface PropTypes {
  name: string;
  occupation: string;
}

export const Info = ({ name, occupation }: PropTypes) => (
  <div className="info">
    <div className="name">{name}</div>
    <div className="occupation">{occupation?.toUpperCase()}</div>
  </div>
);
