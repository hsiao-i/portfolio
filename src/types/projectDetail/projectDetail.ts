export interface ProjectDetailContent {
  subtitle: string;
  description: string;
  imageFileName: string;
  image: string;
  video: string;
}

export interface ProjectDetail extends ProjectDetailContent {
  id: string;
  title: string;
  content: ProjectDetailContent[];
}

export interface TechNote {
  id: string;
  title: string;
  description: string;
  url: string;
}
