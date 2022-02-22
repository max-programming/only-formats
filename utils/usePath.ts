import paths from '@/paths.json';

export default function usePath(name: string): typeof paths[0] {
  const path = paths.find(p => p.id === `/formatter/${name}`)!;
  return path;
}
