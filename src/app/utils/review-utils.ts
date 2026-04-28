import { isPlatformBrowser } from "@angular/common";


const getSafeSeed = (platformId: Object): number => {
  // Comprobamos si estamos en el navegador usando el ID oficial
  if (!isPlatformBrowser(platformId)) {
    return 0;
  }

  const STORAGE_KEY = 'guest_avatar_seed';
  const saved = localStorage.getItem(STORAGE_KEY);
  
  if (saved) return parseInt(saved, 10);
  
  const newSeed = Math.floor(Math.random() * 100);
  localStorage.setItem(STORAGE_KEY, newSeed.toString());
  return newSeed;
};

export const getReviewUserPhoto = (data: any, platformId: Object): string => {
  const AVATARS = ['3d_avatar_1.svg', '3d_avatar_12.svg', '3d_avatar_18.svg', '3d_avatar_30.svg', '3d_avatar_8.svg'];

  if (!data) {
    const seed = getSafeSeed(platformId);
    return `assets/avatars/${AVATARS[seed % AVATARS.length]}`;
  }

  const photo = data.userPhoto || data.photoURL;
  if (photo?.trim()) return photo;

  const email = data.userEmail || data.email;
  if (email?.trim()) {
    const hash = email.split('').reduce((p: number, c: string) => (p << 5) - p + c.charCodeAt(0), 0);
    return `assets/avatars/${AVATARS[Math.abs(hash) % AVATARS.length]}`;
  }

  return `assets/avatars/${AVATARS[getSafeSeed(platformId) % AVATARS.length]}`;
};

export const getUserDisplayName = (data: any): string => {
 
  const email = data?.userEmail || data?.email;
    const name = data?.userName || data?.displayName;
  return email || name || 'Usuario';
};



export const getStarColor = (
  rating: number, 
  starIndex: number, 
  colors = { filled: '#A3D0BD', empty: '#ccc' }
): string => {
  return rating >= starIndex ? colors.filled : colors.empty;
};


export const getClassStar = (rating: number, starIndex: number): string => {
  return rating >= starIndex ? 'icon-star_fill' : 'icon-star';
};





