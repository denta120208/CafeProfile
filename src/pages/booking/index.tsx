import { NextPage } from "next";
import Head from "next/head";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { playfair } from "../_app";
import { Calendar, Users, Clock, MessageCircle } from "lucide-react";

const BookingPage: NextPage = () => {
    const handleWhatsAppBooking = () => {
        const message = encodeURIComponent(
            "Halo Foodpedia! Saya ingin melakukan reservasi meja."
        );
        window.open(`https://wa.me/6287790006003?text=${message}`, "_blank");
    };

    return (
        <Layout>
            <Head>
                <title>Reservasi - Foodpedia</title>
                <meta
                    name="description"
                    content="Reservasi meja di Foodpedia - Sajian autentik Indonesia via WhatsApp"
                />
            </Head>

            {/* Hero Section */}
            <motion.section
                className="py-20 px-4 bg-gradient-to-br from-amber-50 to-orange-50 min-h-[80vh] flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <h1
                            className={`text-4xl md:text-5xl font-extrabold text-amber-900 mb-6 ${playfair.className}`}
                        >
                            Reservasi Meja
                        </h1>
                        <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-8">
                            Hubungi kami via WhatsApp untuk melakukan reservasi meja.
                            Tim kami akan membantu Anda dengan cepat dan ramah!
                        </p>
                    </motion.div>

                    {/* Info Cards */}
                    <motion.div
                        className="grid md:grid-cols-3 gap-8 mb-16"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        <motion.div
                            className="bg-white p-8 rounded-xl shadow-lg text-center"
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                        >
                            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center text-amber-700 mx-auto mb-4">
                                <Clock className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-semibold text-amber-900 mb-3">
                                Jam Operasional
                            </h3>
                            <p className="text-gray-600">
                                Senin - Jumat: 11:00 - 22:00
                                <br />
                                Sabtu - Minggu: 10:00 - 23:00
                            </p>
                        </motion.div>

                        <motion.div
                            className="bg-white p-8 rounded-xl shadow-lg text-center"
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                        >
                            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center text-amber-700 mx-auto mb-4">
                                <Users className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-semibold text-amber-900 mb-3">
                                Kapasitas
                            </h3>
                            <p className="text-gray-600">
                                Meja untuk 2, 4, 6, dan 8 orang
                                <br />
                                Grup besar? Hubungi kami!
                            </p>
                        </motion.div>

                        <motion.div
                            className="bg-white p-8 rounded-xl shadow-lg text-center"
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                        >
                            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center text-amber-700 mx-auto mb-4">
                                <Calendar className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-semibold text-amber-900 mb-3">
                                Waktu Reservasi
                            </h3>
                            <p className="text-gray-600">
                                Minimal 2 jam sebelumnya
                                <br />
                                Maksimal 30 hari ke depan
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* WhatsApp CTA */}
                    <motion.div
                        className="bg-white p-12 rounded-2xl shadow-2xl text-center max-w-2xl mx-auto"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        <MessageCircle className="h-20 w-20 text-green-600 mx-auto mb-6" />
                        <h2
                            className={`text-3xl font-extrabold text-amber-900 mb-4 ${playfair.className}`}
                        >
                            Reservasi via WhatsApp
                        </h2>
                        <p className="text-gray-700 mb-8 text-lg">
                            Klik tombol di bawah untuk langsung terhubung dengan tim kami.
                            Kami siap membantu reservasi Anda!
                        </p>
                        <motion.button
                            onClick={handleWhatsAppBooking}
                            className="bg-green-600 hover:bg-green-700 text-white px-12 py-4 rounded-full text-lg font-semibold inline-flex items-center gap-3 shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                            </svg>
                            Chat via WhatsApp
                        </motion.button>
                        <p className="text-gray-500 mt-6 text-sm">
                            atau hubungi: <span className="font-semibold text-amber-700">+62 877-9000-6003</span>
                        </p>
                    </motion.div>

                    {/* Additional Info */}
                    <motion.div
                        className="mt-16 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        <div className="bg-amber-100 border-l-4 border-amber-600 p-6 rounded-lg max-w-2xl mx-auto">
                            <p className="text-amber-900 font-medium">
                                💡 <strong>Tips:</strong> Untuk hasil terbaik, reservasi minimal 2 jam sebelum kedatangan.
                                Untuk acara spesial atau grup besar, hubungi kami lebih awal.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </motion.section>
        </Layout>
    );
};

export default BookingPage;
