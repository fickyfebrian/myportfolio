import React, { useState, useEffect } from 'react';
import ContactForm from '../../components/Home/Contact';
import { useNavigate } from 'react-router-dom';
import Music from './Music';

const Mora = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Buka modal saat halaman dimuat
  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  // Menutup modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleWhatsapp = () => {
    window.location.href = 'https://wa.me/+6285794431259';
  };

  return (
    <div>
      <div className="flex justify-center items-center h-24 pt-24 bg-mora-lightPink">
        <div className="flex flex-col items-center">
          <p className="text-2xl font-bold">Volume nya kecilin aja 😊</p>
        </div>
      </div>
      <div className="min-h-screen bg-mora-lightPink flex items-center justify-center">
        {/* Modal */}
        {isModalOpen && (
          <div
            className="fixed inset-0 bg-mora-lightPink bg-opacity-100 flex items-center justify-center z-50"
            aria-hidden={!isModalOpen}
          >
            <div className="bg-mora-veryLightPink p-8 rounded-lg shadow-lg w-11/12 max-w-md text-center transform transition-all duration-300 scale-100">
              <h2 className="text-2xl font-poppins font-semibold mb-4 text-mora-pink">
                My Apologies ❤️
              </h2>
              <p className="mb-6 text-mora-navy">
                Thanks for clicking this link.
                <br />I know I've let you down, and I want to make it right. I
                hope you'll give me a chance to fix this.
              </p>
              <button
                onClick={closeModal}
                className="bg-mora-lightBlue text-white px-6 py-2 rounded-full hover:bg-mora-pink transition duration-300"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Konten utama halaman */}

        <div className="grid grid-cols-4 grid-rows-2 gap-4 px-12 py-12">
          <div className="row-span-3 bg-mora-veryLightPink p-4 rounded-lg shadow-lg">
            <h2 className="text-2xl font-poppins font-semibold">
              "Maybe words are not enough..."
            </h2>
            <p className="mt-4 text-lg font-roboto text-justify">
              Aku tau aku udah bikin kamu kecewa. <br />
              Tapi aku masih pengen nunjukin kesungguhan aku ke kamu melalui
              tindakan, bukan hanya ucapan. Tapi makasih juga loh kamu udah
              ngasih kesempatan aku buat ngomong terus <br />
              Makasih juga kamu udah bisa same sini, udah mau klik link ini
              😊😊. Ohhiyah jangan lupa sambil dengerin lagu nya juga yah, ini
              web mungkin animasi nya cuman bisa sedikit aku bikin nya sambil
              gemeteran soalnya eheheheheh. aku lagi suka lirik nya aja, apalagi
              yang bagian ini :
              <br />
              <br />
              <br />
            </p>
            <div className="font-semibold">
              Kau datang tak ku duga <br />
              Beri aku tawa
              <br />
              Bahagia hariku,
              <br />
              kau buat sempurna
              <br />
              Mungkin kita bisa berjalan bersama
              <br />
              Tunggu sejenak ini belum saat nya
              <br />
              <br />
              Serasa kuingin katakan pada dunia
              <br />
              Seberapa ku inginkanmu,
              <br />
              temani hidupku yang dulu kelam
              <br />
              Kau jadikan penuh makna
              <br />
              Tunggu sejenak ini belum saat nya
              <br />
              <br />
              Banyak harapku untukmu
              <br />
              Di dalam tidurku dan bangunku
              <br />
              <div className="pl-4">
                <span className="font-bold text-xl text-center">
                  -- Nyoman Paul --
                </span>
              </div>
            </div>
          </div>

          <div className="col-span-2 row-span-1 bg-mora-veryLightPink p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-poppins font-semibold mb-4">
              <div className="w-full max-w-md px-4 items-center justify-center">
                <Music />
              </div>
              My Apologies
            </h3>
            <p className="text-lg font-roboto text-justify">
              Sayang, aku pengen minta maaf dari lubuk hati aku yang terdalam.
              Aku tahu aku udah ngecewain kamu, dan aku benar-benar nyesel seng.
              Aku berjanji untuk lebih perhatian, menghargai momen bersama kita,
              dan tidak mengulangi kesalahan yang sama. Terima kasih karena
              sudah memberiku kesempatan untuk memperbaiki diri dan hubungan
              ini. Aku ingin meminta maaf secara tulus atas semua hal yang telah
              aku lakukan yang mungkin menyakitimu. Aku ingin lebih menghargai
              dan menunjukkan kesungguhan dalam tindakan daripada sekadar
              kata-kata. Aku pengen buktiin kalo aku bisa menjadi pasangan yang
              lebih baik dan membuat kita bahagia bersama. Dan aku juga yakin ko
              aku bisa berubah dan kamu bisa menerima aku, karna yakin keadaan
              kamu sekarang ini karna kamu sayang sama aku, bukan karna pengen
              putus nya, kamu hanya kecewa sama aku karna aku tidak sesuai
              dengan keinginan kamu, tapi ini masih bisa diperbaiki ko seng,
              beneran akumah, aku lebih pilih perbaiki kesalahan aku sama kamu
              daripada aku harus lepas sama kamu. Aku masih pengen sama kamu
              seng. Aku masih pengen sama kamu seng, aku masih pengen ditemenin
              sama kamu seng, aku masih butuh kamu seng <br />
              <span className="italic">
                I don't have any other romantic way like what you want, I can
                only write code like this, I hope you like this way and start
                opening your heart again to this poor man 😊
              </span>
            </p>
          </div>
          {/* Janji untuk Tidak Mengulangi Kesalahan */}
          <div className="col-span-2 row-span-2 bg-mora-veryLightPink p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-poppins font-semibold mb-4">
              My Promise
            </h3>
            <p className="text-lg font-roboto text-justify">
              Aku janji seng gakan ngulangin kesalahan yang sama. <br />
              Aku bakal berusaha jadi lebih perhatian lagi seng, dan selalu
              berusaha ngasih yang terbaik untuk kamu, untuk aku sendiri dan
              untuk kita seng. <br />
              Kamu orang yang sangat berarti buat aku seng, dan aku gamau
              kehilangan kamu seng. <br />
              Aku janji juga seng bakal seimbang antara hobby aku, rutinitas
              aku, kerjaan aku, serta kewajiban lainnya, dan yang utama nya
              seimbang antara semua itu dan kamu. Seimbang juga antara aku dan
              kamu biar lebih sering ketemu dan ngobrol. <br />
              Jalan kita bakal sepanjang niat kita seng, simpan tegar dalam
              hati. Masih banyak yang harus kamu dan aku cari seng ❤️❤️❤️😊😊
              <br />
              Kamu juga masih bisa ko melakukan hal hal yang kamu suka kalo
              masih sama aku, Kamu juga masih bisa melakukan hal apa yang kamu
              cinta seng, Kamu juga masih bisa berkembang ko, dan aku juga masih
              bisa berkembang kalo masih bareng bareng sama kamu seng.
              <br />
              Semua yang kamu minta aku usahain di iyahin sengg, dan udah
              beberapa juga yang kejadian kan kamu pengen melakukan apa yang
              kamu harus lakukan tapi terhalang sama aku, dan saat kamu bilang
              mau melakukan ini itu aku izinkan dan aku iyahin serta aku
              bolehin.
              <br />
              Jadi tenang aja sayang 😊❤️❤️
            </p>
          </div>
          <div className="row-span-3 col-start-4 row-start-1 bg-mora-veryLightPink p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-poppins font-semibold mb-4">
              Real Action
            </h3>
            <p className="text-lg font-roboto text-justify">
              Aku ingin mulai dengan memberikanmu sebuah janji, bukan cuma janji
              biasa, tapi janji yang datang dari hati yang tulus. Aku berjanji
              untuk selalu berusaha menjadi pribadi yang lebih baik, bukan cuman
              buat kamu, tapi juga buat aku sendiri.
              <br />
              Aku sadar bahwa hubungan yang baik dimulai dari diri kita
              masing-masing. Aku penmngen menjadi versi terbaik dari diri aku,
              seseorang yang mampu ngasih yang terbaik buat kamu dan buat diri
              kita berdua.
              <br />
              Aku pengen lebih sering dengerink kamu, bukan cuma saat kita
              ngomong, tapi juga pas ada keheningan yang terjalin antara kita.
              Aku pengen lebih memahami perasaanmu, pikiranmu, dan semua yang
              ada di dalam hatimu.
              <br />
              Aku tahu, kadang komunikasi bisa sulit, tapi aku berjanji untuk
              selalu ngasih kamu ruang bagi kita untuk ngobrol, untuk saling
              berbagi, dan untuk saling mendukung.
              <br />
              Setiap momen yang kita miliki sangat berarti buat aku. Aku pengen
              lebih menghargai setiap detik yang kita lewati bersama, baik dalam
              tawa maupun dalam kesedihan.
              <br />
              Aku berjanji untuk lebih menghargai segala hal kecil yang mungkin
              sering terlewatkan, karena aku tahu itu adalah bagian dari
              perjalanan kita. Aku ingin kita terus tumbuh bersama, bukan hanya
              sebagai pasangan, tetapi juga sebagai individu yang saling
              menginspirasi.
              <br />
              Aku tahu kita tidak sempurna, tetapi kita bisa saling memperbaiki
              dan belajar satu sama lain. Aku bakal terus berusaha untuk menjadi
              lebih sabar, lebih pengertian, dan lebih menghargaimu dalam setiap
              tindakan dan kata-kata aku.
              <br />
              Aku ingin kita terus berjalan bersama, menghadapi segala tantangan
              yang ada dengan kekuatan cinta yang kita miliki.
              <br />
              Makasih yah udah jadi bagian dari hidup aku, dan aku berjanji
              bakal terus berusaha buaat kamu merasa dicintai dan dihargai,
              setiap hari.❤️❤️❤️
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center py-12 bg-mora-lightPink">
        <h1 className="text-center text-2xl md:text-3xl font-poppins font-semibold text-mora-navy mb-8">
          Atau kalo kamu males bales lewat contact form, kamu bisa WhatsApp
          <br />
          lewat nomor ini, kamu bisa pencet tombol dibawah ini aja sengg ❤️❤️
          <br />
          Tapi Mending Lewat Wa aja ga sih ?
          <br />
          Tapi sama aja ko, Masih bisa diliat sama aku
        </h1>

        <div className="flex flex-col justify-center items-center space-y-6">
          <button
            className="rounded-lg px-6 py-3 bg-mora-pink text-white font-semibold text-lg transition duration-300 transform hover:scale-105 hover:bg-mora-veryLightPink"
            onClick={handleWhatsapp}
          >
            Wa cowo ganteng❤️
          </button>
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default Mora;
