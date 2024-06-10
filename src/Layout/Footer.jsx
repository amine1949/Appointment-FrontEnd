import { FaInstagram, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
    return (
        <>
            {/* <footer className="p-6 md:py-12 w-full dark:bg-gray-800">
                <div className="container max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
                    <a href="#" className="flex items-center gap-2" prefetch={false}>
                        <span className="font-medium">Acme Inc</span>
                    </a>
                    <nav className="flex gap-4 sm:gap-6">
                        <a href="#" className="hover:underline underline-offset-4" prefetch={false}>
                            Home
                        </a>
                        <a href="#" className="hover:underline underline-offset-4" prefetch={false}>
                            About
                        </a>
                        <a href="#" className="hover:underline underline-offset-4" prefetch={false}>
                            Services
                        </a>
                        <a href="#" className="hover:underline underline-offset-4" prefetch={false}>
                            Contact
                        </a>
                        <a href="#" className="hover:underline underline-offset-4" prefetch={false}>
                            Privacy Policy
                        </a>
                    </nav>
                    <p className="text-gray-500 dark:text-gray-400">&copy; 2024 Acme Inc. All rights reserved.</p>
                </div>
            </footer> */}

            <footer className="bg-[#cfe1ff] py-12 md:py-16">
                <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                        <div className="space-y-2">
                            <h4 className="text-lg font-semibold">Company</h4>
                            <ul className="space-y-1">
                                <li>
                                    <a href="#" className="hover:text-gray-400 transition-colors" prefetch={false}>
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-400 transition-colors" prefetch={false}>
                                        Careers
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-400 transition-colors" prefetch={false}>
                                        Blog
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-2">
                            <h4 className="text-lg font-semibold">Products</h4>
                            <ul className="space-y-1">
                                <li>
                                    <a href="#" className="hover:text-gray-400 transition-colors" prefetch={false}>
                                        Features
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-400 transition-colors" prefetch={false}>
                                        Pricing
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-400 transition-colors" prefetch={false}>
                                        Integrations
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-2">
                            <h4 className="text-lg font-semibold">Support</h4>
                            <ul className="space-y-1">
                                <li>
                                    <a href="#" className="hover:text-gray-400 transition-colors" prefetch={false}>
                                        Documentation
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-400 transition-colors" prefetch={false}>
                                        Help Center
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-400 transition-colors" prefetch={false}>
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col md:items-end space-y-4">
                        <p className="text-sm text-gray-400">&copy; 2024 Your Company. All rights reserved.</p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-[#0471A6] hover:text-gray-300 transition-colors" prefetch={false}>
                                <FaXTwitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </a>
                            <a href="#" className="text-[#0471A6] hover:text-gray-300 transition-colors" prefetch={false}>
                                <FaInstagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </a>
                            <a href="#" className="text-[#0471A6] hover:text-gray-300 transition-colors" prefetch={false}>
                                <FaLinkedinIn className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer