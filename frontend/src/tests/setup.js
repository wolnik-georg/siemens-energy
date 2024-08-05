import { vi } from 'vitest';

globalThis.fetch = vi.fn(); // Mock global fetch if used
