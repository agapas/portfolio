const getImageUrl = (imageUrl: string) => {
  return new URL(imageUrl, import.meta.url).href;
};

interface PropTypes {
  url: string;
  alt: string;
}

export const Image = ({ url, alt }: PropTypes) => {
  return <img src={getImageUrl(url)} alt={alt} width="100%" />;
};
