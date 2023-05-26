import { Links } from "App";
import { Link } from "../../common/Link";

interface PropTypes {
  data: Links;
  className?: string;
}

export const LinkButtons = (props: PropTypes) => {
  const { className = "links", data } = props;
  return (
    <div className={className}>
      {Object.entries(data).map(([key, val]) => (
        <Link key={key} label={key} href={val || ""} />
      ))}
    </div>
  );
};
