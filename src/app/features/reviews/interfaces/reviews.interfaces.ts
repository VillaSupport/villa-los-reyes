export interface Review {
  id: string;
  userId: string;
  userName: string;
  userEmail?: string;
  userPhoto: string;
  rating: number;
  comment: string;
  usefulCount: number;
  usefulBy: string[];
  createdAt: Date | null;
}