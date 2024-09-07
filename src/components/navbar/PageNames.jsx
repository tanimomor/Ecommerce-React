import { useNavigate, useLocation } from "react-router-dom";

export default function PageNames() {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-[11px] text-lg leading-[normal] text-neutral-800">
            <div className="flex items-center justify-center gap-x-7">
                <div className="font-medium cursor-pointer">Home</div>
                <div
                    className={`${
                        (location.pathname === "/products" || location.pathname === "/")
                            ? "rounded-md bg-neutral-50 px-5 py-2 text-center font-semibold"
                            : "font-medium cursor-pointer"
                    } cursor-pointer`} // cursor-pointer class ensures the cursor changes to a pointer
                    onClick={() => navigate("/")}
                >
                    Products
                </div>
                <div className="font-medium cursor-pointer">Categories</div>
                <div className="font-medium cursor-pointer">Custom</div>
                <div className="font-medium cursor-pointer">Blog</div>
            </div>
        </div>
    );
}
