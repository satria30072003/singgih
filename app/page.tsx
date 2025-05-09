"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow z-50 px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-green-700">PT Haya Energi Surya</h1>
        <div className="flex space-x-4 text-sm font-medium">
          <a href="#tentang" className="hover:text-green-600">Tentang</a>
          <a href="#layanan" className="hover:text-green-600">Layanan</a>
          <a href="#proyek" className="hover:text-green-600">Proyek</a>
          <a href="#kontak" className="hover:text-green-600">Kontak</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6 pt-20">
        <h2 className="text-4xl font-bold text-green-800 mb-4">Selamat Datang di PT Haya Energi Surya</h2>
        <p className="text-lg max-w-2xl text-gray-600">
          Solusi terbaik untuk kebutuhan energi bersih Anda melalui teknologi panel surya yang handal dan efisien.
        </p>
      </section>

      {/* Tentang */}
      <section id="tentang" className="py-16 px-6 bg-gray-50">
        <h3 className="text-3xl font-semibold text-green-700 mb-6">Tentang Kami</h3>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <Image src="/profile1.png" alt="Profil PT Haya" width={400} height={300} className="rounded-xl shadow" />
          <p className="text-lg max-w-2xl">
            PT Haya Energi Surya adalah perusahaan yang bergerak di bidang penyediaan dan instalasi panel surya.
            Kami berdedikasi untuk menghadirkan solusi energi terbarukan bagi rumah, bisnis, dan industri di Indonesia.
          </p>
        </div>
      </section>

      {/* Layanan */}
      <section id="layanan" className="py-16 px-6">
        <h3 className="text-3xl font-semibold text-green-700 mb-6">Layanan Kami</h3>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <ul className="list-disc pl-6 space-y-4 text-lg">
            <li><strong>Penjualan Panel Surya:</strong> Monocrystalline, Polycrystalline, Flexible.</li>
            <li><strong>Paket Energi:</strong> On-Grid, Off-Grid, Hybrid.</li>
            <li><strong>Instalasi Profesional:</strong> Untuk rumah, kantor, dan pabrik.</li>
            <li><strong>Konsultasi & Survey:</strong> Perencanaan sistem sesuai kebutuhan.</li>
            <li><strong>Perawatan Berkala:</strong> Menjaga performa panel tetap optimal.</li>
          </ul>
          <Image src="/layanan.png" alt="Layanan Panel Surya" width={500} height={350} className="rounded-xl shadow" />
        </div>
      </section>

      {/* Proyek */}
      <section id="proyek" className="py-16 px-6 bg-gray-50">
        <h3 className="text-3xl font-semibold text-green-700 mb-6">Proyek Kami</h3>
        <div className="grid md:grid-cols-3 gap-6 text-lg">
          <div>
            <Image src="/proyek.png" alt="Proyek 1" width={300} height={200} className="rounded-xl mb-2" />
            <h4 className="font-bold">Perumahan Green Eco</h4>
            <p>10 kWp untuk rumah hemat energi - Bandung</p>
          </div>
          <div>
            <Image src="/proyek 2.png" alt="Proyek 2" width={300} height={200} className="rounded-xl mb-2" />
            <h4 className="font-bold">PT Surya Mandiri</h4>
            <p>50 kWp Hybrid system untuk gudang - Bekasi</p>
          </div>
          <div>
            <Image src="/proyek 3.png" alt="Proyek 3" width={300} height={200} className="rounded-xl mb-2" />
            <h4 className="font-bold">Program Desa Terang</h4>
            <p>Off-grid 5 kWp untuk wilayah terpencil - NTB</p>
          </div>
        </div>
      </section>

      {/* Kontak */}
      <section id="kontak" className="py-16 px-6">
        <h3 className="text-3xl font-semibold text-green-700 mb-4">Kontak Kami</h3>
        <p className="text-lg mb-4">Hubungi kami untuk informasi lebih lanjut:</p>
        <ul className="space-y-2 text-lg">
          <li><strong>Alamat:</strong> Jl. Energi Hijau No. 10, Jakarta Selatan</li>
          <li><strong>Telepon:</strong> (021) 123-4567</li>
          <li><strong>Email:</strong> info@pt-haya.com</li>
          <li><strong>Instagram:</strong> @pthaya</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="py-4 text-center bg-green-100 text-green-800">
        © {new Date().getFullYear()} PT Haya Energi Surya. All rights reserved.
      </footer>
    </div>
  );
}