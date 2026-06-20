import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="relative text-white bg-[url('/assets/img/wp.png')] bg-cover bg-center bg-no-repeat">

            {/* Overlay */}
            <div className="absolute inset-0 bg-slate-950/70"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">

                <div className="flex flex-col items-center text-center">

                    <img src="/assets/img/k.png" alt="Logo" className="w-[14rem] mb-6" />

                    <p className="max-w-2xl text-slate-400 mb-10">
                        Hire skilled freelancers or find the right projects to grow your career.
                        Connect, collaborate, and get work done efficiently.
                    </p>

                    {/* Newsletter */}
                    <div className="flex flex-col items-center text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">
                            Subscribe to our Newsletter
                        </h2>

                        <p className="text-slate-400 mb-6 max-w-xl">
                            Get the latest updates and opportunities directly in your inbox.
                        </p>

                        <div className="flex w-full max-w-md">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 rounded-l-lg bg-slate-800 text-white outline-none"
                            />
                            <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-r-lg">
                                Subscribe
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6 text-sm mb-6">
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/service">Service</Link>
                        <Link to="/contact">Contact</Link>
                    </div>

                </div>

                <div className="border-t border-slate-800 my-6"></div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
                    <p>© 2026 AMXAI. All Rights Reserved.</p>

                    <div className="flex items-center gap-6">
                        <Link to="/policies">Privacy Policy</Link>
                        <Link to="/terms">Terms of Use</Link>
                        <Link to="/disclaimer">Disclaimer</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;