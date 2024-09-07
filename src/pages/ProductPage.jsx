import Navbar from "../components/products/Navbar.jsx";
import SideFilter from "../components/products/SideFilter.jsx";
import Products from "../components/products/Products.jsx";
import PageNav from "../components/products/PageNav.jsx";
import Footer from "../components/products/Footer.jsx";

export default function ProductPage() {
    return (
        <div id="firejet-html-app">
            <div className="flex w-full items-start rounded-3xl">
                <div
                    className="font-barlow flex h-full w-full flex-shrink-0 flex-col gap-y-16 overflow-clip rounded-3xl bg-white leading-[normal] tracking-[0px]">
                    <Navbar />
                    <div
                        className="flex flex-wrap items-start justify-center gap-x-8 gap-y-8 pt-4 min-[1430px]:flex-nowrap">
                        <SideFilter />
                        <Products />
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}