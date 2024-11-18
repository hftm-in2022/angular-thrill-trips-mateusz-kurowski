export interface BlogPost {
  id: number;
  author?: string;
  comments?: number;
  contentPreview?: string;
  content?: string;
  createdAt?: string;
  createdByMe?: boolean;
  headerImageUrl?: string;
  likedByMe?: boolean;
  likes?: number;
  title: string;
  updatedAt?: string;
}
