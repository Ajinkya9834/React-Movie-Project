function Footer() {
    return (
        <footer className="bg-[#032541] text-gray-400 px-6 py-12">

            {/* Logo + Description */}
            <div className="md:hidden mb-10">
                <h2 className="text-[#1cb8d7] text-2xl font-bold mb-4">
                    CINEMAX
                </h2>
                <p className="text-sm leading-relaxed">
                    Your destination for the best movies and shows,
                    curated just for you.
                </p>
            </div>


            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-10">

                {/* Logo + Description */}
                <div className="hidden md:block">
                    <h2 className="text-[#1cb8d7] text-2xl font-bold mb-4">
                        CINEMAX
                    </h2>
                    <p className="text-sm leading-relaxed">
                        Your destination for the best movies and shows,
                        curated just for you.
                    </p>
                </div>

                {/* Company */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Company</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-white cursor-pointer">About Us</li>
                        <li className="hover:text-white cursor-pointer">Careers</li>
                        <li className="hover:text-white cursor-pointer">Press</li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Support</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-white cursor-pointer">Help Center</li>
                        <li className="hover:text-white cursor-pointer">Contact</li>
                        <li className="hover:text-white cursor-pointer">FAQ</li>
                    </ul>
                </div>

                {/* Legal */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Legal</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-white cursor-pointer">Terms</li>
                        <li className="hover:text-white cursor-pointer">Privacy</li>
                        <li className="hover:text-white cursor-pointer">Cookies</li>
                    </ul>
                </div>

                {/* Social */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Social</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-white cursor-pointer">Twitter</li>
                        <li className="hover:text-white cursor-pointer">Instagram</li>
                        <li className="hover:text-white cursor-pointer">YouTube</li>
                    </ul>
                </div>

            </div>

            {/* Bottom Line */}
            <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
                © 2026 Cinemax. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;