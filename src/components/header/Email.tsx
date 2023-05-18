interface PropTypes {
  email: string;
  icon: string;
}

export const Email = ({ email, icon }: PropTypes) => (
  <a href={`mailto:${email}`}>
    <i className={`fa fa-fw ${icon} fa-lg`} />
  </a>
);
