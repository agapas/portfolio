interface PropTypes {
  href: string;
  label?: string;
  icon?: string;
}

export const Link = ({ href, label, icon }: PropTypes) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {icon && <i className={`fa fa-fw ${icon} fa-lg`} />}
    {label && <div className="label">{label}</div>}
  </a>
);
