export function useSet<T>() {
  const set = new Set<T>();
  const tapAdd = (v: T) => {
    set.add(v);
    return v;
  };
  return [set, tapAdd] as const;
}
