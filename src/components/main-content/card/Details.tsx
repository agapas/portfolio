import { Links } from "App";
import { LinkButtons } from "./LinkButtons";

interface PropTypes {
  description: string;
  links?: Links;
  tags?: Links;
}

export const Details = ({ description, links, tags }: PropTypes) => {
  return (
    <div className="details">
      <div className="description">{description}</div>
      {links && <LinkButtons data={links} />}
      {tags && <LinkButtons className="tags" data={tags} />}
    </div>
  );
};
