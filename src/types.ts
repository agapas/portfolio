export interface Dictionary {
  [name: string]: string;
}

export interface Details {
  name: string;
  occupation: string;
  contactInfo: Dictionary;
}

export interface Links {
  [name: string]: string | undefined;
}

export interface Project {
  label: string;
  description: string;
  links: Links;
  tags: Links;
  imageName?: string;
}
