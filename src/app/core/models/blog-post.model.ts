export interface Comment {
  id: number;
  content: string;
  author: string;
  createdAt: string;
  updatedAt: string;
}

export interface BlogPost {
  id: number;
  author: string;
  comments: Comment[];
  contentPreview?: string;
  content: string;
  createdAt: string;
  createdByMe: boolean;
  headerImageUrl: string;
  likedByMe: boolean;
  likes: number;
  title: string;
  updatedAt?: string;
}
