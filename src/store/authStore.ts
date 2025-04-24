import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User, AuthError } from '../types';

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  error: AuthError | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  clearError: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,
      error: null,
      loading: false,
      login: async (email: string, password: string) => {
        try {
          set({ loading: true, error: null });
          
          if (!email || !password) {
            throw new Error('Email e senha são obrigatórios');
          }

          // Simulate API call
          await new Promise((resolve) => setTimeout(resolve, 1000));

          // Validate email format
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(email)) {
            throw new Error('Email inválido');
          }

          set({
            isAuthenticated: true,
            user: {
              id: '1',
              email,
              name: email.split('@')[0],
              plan: null,
            },
            loading: false,
          });
        } catch (error) {
          set({ 
            error: { 
              message: error instanceof Error ? error.message : 'Erro ao fazer login'
            },
            loading: false 
          });
          throw error;
        }
      },
      register: async (name: string, email: string, password: string) => {
        try {
          set({ loading: true, error: null });

          if (!name || !email || !password) {
            throw new Error('Todos os campos são obrigatórios');
          }

          // Validate email format
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(email)) {
            throw new Error('Email inválido');
          }

          // Validate password strength
          if (password.length < 8) {
            throw new Error('A senha deve ter pelo menos 8 caracteres');
          }

          // Simulate API call
          await new Promise((resolve) => setTimeout(resolve, 1000));

          set({
            isAuthenticated: true,
            user: {
              id: '1',
              email,
              name,
              plan: null,
            },
            loading: false,
          });
        } catch (error) {
          set({ 
            error: { 
              message: error instanceof Error ? error.message : 'Erro ao criar conta'
            },
            loading: false 
          });
          throw error;
        }
      },
      logout: () => {
        set({ isAuthenticated: false, user: null, error: null });
      },
      clearError: () => {
        set({ error: null });
      },
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({ 
        isAuthenticated: state.isAuthenticated,
        user: state.user 
      }),
    }
  )
);