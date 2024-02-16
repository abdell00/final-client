import axios, { Axios } from 'axios';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware'
export const useAuth = create(
  persist(
    (set) => ({
      auth: {
        isAuth: false,
        token: null,
        user: null
      },
      

      connexion: (token, user) => set({ auth: { isAuth: true, token: token, user: user } }),
      logout: () => set({ auth: { isAuth: false, token: null, user: null } }),
    
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
