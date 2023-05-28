interface PropTypes {
  href: string;
  icon?: string;
  label?: string;
}

export const Link = ({ href, icon, label }: PropTypes) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {icon && <i className={`fa fa-fw ${icon} fa-lg`} />}
    {label && <div>{label}</div>}
  </a>
);
