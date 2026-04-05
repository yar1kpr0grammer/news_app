export const storage = {
  get<T>(key: string): T[] {
    if (typeof window === "undefined") return [];
    return JSON.parse(localStorage.getItem(key) || "[]");
  },

  set(key: string, value: unknown) {
    localStorage.setItem(key, JSON.stringify(value));
  },
};
