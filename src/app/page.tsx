import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

export default function Home() {
  return (
    <div>
      <Container
        maxWidth="lg"
        sx={{
          backgroundColor: 'salmon',
          minHeight: '100vh',
          px: { xs: 2, sm: 3 }, 
          py:"1%"

        }}
      >
        <h1>Aku adalah singa</h1>
        <p>Singa adalah salah satu hewan karnivora besar yang termasuk dalam keluarga kucing besar (Felidae). Mereka dikenal sebagai "raja hutan" karena kekuatan, keberanian, dan posisi mereka di puncak rantai makanan. Singa hidup berkelompok yang disebut kawanan, yang biasanya terdiri dari satu atau dua jantan dewasa, beberapa betina, dan anak-anak mereka. Singa jantan memiliki surai yang khas, yang menjadi simbol kekuatan dan status mereka.</p>
        <p>Singa biasanya ditemukan di padang rumput dan sabana di Afrika, meskipun ada populasi kecil singa Asia yang hidup di Hutan Gir, India. Mereka adalah pemburu yang sangat terampil, dengan betina yang biasanya bertanggung jawab atas perburuan. Makanan utama mereka adalah hewan besar seperti zebra, rusa, dan kerbau. Singa juga memiliki suara auman yang sangat kuat, yang dapat terdengar hingga jarak 8 kilometer, digunakan untuk menandai wilayah dan berkomunikasi dengan anggota kawanan.</p>

      
      </Container>
    </div>
  );
}