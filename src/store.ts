import { create } from 'zustand'

interface UseThemeState {
  appTheme: boolean;
  setAppTheme: () => void;
}

type PasswordStrength = 'Weak' | 'Medium' | 'Strong' | 'Very-Strong' | "";

interface PasswordState {
  length: number;
  generatedPassword: string;
  strength: PasswordStrength;
  includeNumbers: boolean;
  includeSymbols: boolean;
  includeUppercase: boolean;
  includeLowercase: boolean;
  setLength: (length: number) => void;
  toggleNumbers: () => void;
  toggleSymbols: () => void;
  toggleUppercase: () => void;
  toggleLowercase: () => void;
  generatePassword: () => void;
  evaluateStrength: (password: string) => PasswordStrength;
}

export const AppTheme = create<UseThemeState>((set) => ({
  appTheme: true,
  setAppTheme: () => set((state) => ({
    appTheme: !state.appTheme
  }))
}))

export const usePasswordStore = create<PasswordState>((set, get) => ({
  length: 12,
  generatedPassword: '',
  strength: '',
  includeNumbers: true,
  includeSymbols: false,
  includeUppercase: false,
  includeLowercase: true,

  setLength: (length) => set({ length }),

  toggleNumbers: () =>
    set((state) => ({ includeNumbers: !state.includeNumbers })),
  toggleSymbols: () =>
    set((state) => ({ includeSymbols: !state.includeSymbols })),
  toggleUppercase: () =>
    set((state) => ({ includeUppercase: !state.includeUppercase })),
  toggleLowercase: () =>
    set((state) => ({ includeLowercase: !state.includeLowercase })),

  evaluateStrength: (password) => {
    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    if (score <= 1) return 'Weak';
    if (score === 2) return 'Medium';
    if (score === 3) return 'Strong';
    return 'Very-Strong';
  },

  generatePassword: () => {
    const {
      length,
      includeLowercase,
      includeUppercase,
      includeNumbers,
      includeSymbols,
      evaluateStrength,
    } = get();

    let charset = '';
    if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeNumbers) charset += '0123456789';
    if (includeSymbols) charset += '!@#$%^&*()_+[]{}|;:,.<>?';

    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }

    const strength = evaluateStrength(password);

    set({ generatedPassword: password, strength });
  },
}));
