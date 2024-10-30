export interface BlogPost {
  id: number;
  author?: string;
  comments?: number;
  contentPreview?: string;
  createdAt?: string;
  createdByMe?: boolean;
  headerImageUrl?: string;
  likedByMe?: boolean;
  likes?: number;
  title: string;
  updatedAt?: string;
}
