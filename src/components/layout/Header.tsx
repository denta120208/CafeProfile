import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuthStore } from "../../store/authStore";
import { Menu, X } from "lucide-react";
import { playfair } from "@/pages/_app";
import toast from "react-hot-toast";

const Header: React.FC = () => {
    const { isAuthenticated, logout, checkAuth } = useAuthStore();
    const router = useRouter();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Cek autentikasi setiap kali komponen di-render
    useEffect(() => {
        // Validasi token saat komponen dimuat
        const isValid = checkAuth();
        if (!isValid && isAuthenticated) {
            toast.error("Sesi anda telah berakhir. Silakan login kembali.");
            logout();

            // Redirect ke halaman login jika di halaman yang memerlukan autentikasi
            const authRequiredPaths = ["/profile", "/admin", "/booking/new"];
            const requiresAuth = authRequiredPaths.some((path) =>
                router.pathname.startsWith(path)
            );
            if (requiresAuth) {
                router.push("/auth/login");
            }
        }
    }, [router.pathname, checkAuth, isAuthenticated, logout, router]);

    const handleLogout = () => {
        logout();
        router.push("/");
        toast.success("Logout sukses");
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <header className="bg-amber-900 text-white sticky top-0 z-50 shadow-md">
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <Link
                        href="/"
                        className={`text-2xl font-bold ${playfair.className}`}
                    >
                        Foodpedia
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8 text-sm">
                        <Link
                            href="/"
                            className={`hover:text-amber-200 transition-colors duration-200 ${
                                router.pathname === "/"
                                    ? "text-amber-200 font-medium"
                                    : ""
                            }`}
                        >
                            Beranda
                        </Link>
                        <Link
                            href="/menu"
                            className={`hover:text-amber-200 transition-colors duration-200 ${
                                router.pathname === "/menu"
                                    ? "text-amber-200 font-medium"
                                    : ""
                            }`}
                        >
                            Menu
                        </Link>
                        <Link
                            href="/booking"
                            className={`hover:text-amber-200 transition-colors duration-200 ${
                                router.pathname === "/booking" ||
                                router.pathname.startsWith("/booking/")
                                    ? "text-amber-200 font-medium"
                                    : ""
                            }`}
                        >
                            Reservasi
                        </Link>
                        <Link
                            href="/about"
                            className={`hover:text-amber-200 transition-colors duration-200 ${
                                router.pathname === "/about"
                                    ? "text-amber-200 font-medium"
                                    : ""
                            }`}
                        >
                            Tentang Kami
                        </Link>
                        <Link
                            href="/contact"
                            className={`hover:text-amber-200 transition-colors duration-200 ${
                                router.pathname === "/contact"
                                    ? "text-amber-200 font-medium"
                                    : ""
                            }`}
                        >
                            Kontak
                        </Link>
                    </nav>

                    {/* Desktop WhatsApp Button */}
                    <div className="hidden md:flex items-center space-x-4 text-sm">
                        <a
                            href="https://wa.me/6287790006003"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded transition-colors duration-200 inline-flex items-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                            </svg>
                            WhatsApp
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden focus:outline-none"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? (
                            <X size={24} className="text-white" />
                        ) : (
                            <Menu size={24} className="text-white" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden pt-4 pb-2 border-t border-amber-800 mt-4 animate-fadeIn">
                        <nav className="flex flex-col space-y-3 mb-6">
                            <Link
                                href="/"
                                onClick={closeMobileMenu}
                                className={`hover:text-amber-200 transition-colors duration-200 py-2 ${
                                    router.pathname === "/"
                                        ? "text-amber-200 font-medium"
                                        : ""
                                }`}
                            >
                                Beranda
                            </Link>
                            <Link
                                href="/menu"
                                onClick={closeMobileMenu}
                                className={`hover:text-amber-200 transition-colors duration-200 py-2 ${
                                    router.pathname === "/menu"
                                        ? "text-amber-200 font-medium"
                                        : ""
                                }`}
                            >
                                Menu
                            </Link>
                            <Link
                                href="/booking"
                                onClick={closeMobileMenu}
                                className={`hover:text-amber-200 transition-colors duration-200 py-2 ${
                                    router.pathname === "/booking" ||
                                    router.pathname.startsWith("/booking/")
                                        ? "text-amber-200 font-medium"
                                        : ""
                                }`}
                            >
                                Reservasi
                            </Link>
                            <Link
                                href="/about"
                                onClick={closeMobileMenu}
                                className={`hover:text-amber-200 transition-colors duration-200 py-2 ${
                                    router.pathname === "/about"
                                        ? "text-amber-200 font-medium"
                                        : ""
                                }`}
                            >
                                Tentang Kami
                            </Link>
                            <Link
                                href="/contact"
                                onClick={closeMobileMenu}
                                className={`hover:text-amber-200 transition-colors duration-200 py-2 ${
                                    router.pathname === "/contact"
                                        ? "text-amber-200 font-medium"
                                        : ""
                                }`}
                            >
                                Kontak
                            </Link>
                        </nav>

                        <div className="pt-3 border-t border-amber-800">
                            <a
                                href="https://wa.me/6287790006003"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={closeMobileMenu}
                                className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded transition-colors duration-200 inline-flex items-center gap-2"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                </svg>
                                WhatsApp
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
