import { create } from 'zustand';

export const useStore = create((set) => ({
  telemetryMetrics: 100,
  accelerateMetrics: () => set((state) => ({ telemetryMetrics: state.telemetryMetrics + 50 })),
  resetMetrics: () => set({ telemetryMetrics: 0 })
}));
