import Prism from 'prism-react-renderer/prism';

export default function importLangs() {
  (typeof global !== 'undefined' ? global : window).Prism = Prism;
  import('prismjs/components/prism-php');
  import('prismjs/components/prism-java');
}
