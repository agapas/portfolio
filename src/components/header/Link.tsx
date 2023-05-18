interface PropTypes {
  href: string;
  icon: string;
}

export const Link = ({ href, icon }: PropTypes) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <i className={`fa fa-fw ${icon} fa-lg`} />
  </a>
);
