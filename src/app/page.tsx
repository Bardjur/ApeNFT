import About from '@/sections/About';
import Collection from '@/sections/Collection';
import FAQ from '@/sections/FAQ';
import Hero from '@/sections/Hero';
import MMap from '@/sections/MMap';
import Mint from '@/sections/Mint';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <MMap />
      <FAQ />
      <Collection />
      <Mint />
    </main>
  );
}
