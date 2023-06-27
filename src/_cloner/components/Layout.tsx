import { Outlet } from "react-router-dom";
import Nav from "./Nav";

const Layout = () => {

    return (
        <>
            {/* Aside Fix */}
            <div className="fixed bottom-0 right-0 top-0 flex w-24">
                <div className="flex flex-grow flex-col border bg-white shadow">
                    {/* Aside Content */}
                </div>
            </div>
            {/* Aside Toggle */}
            <div className="fixed bottom-0 right-0 top-0 mr-24 flex w-96">
                <div className="flex flex-grow flex-col border bg-white shadow"></div>
            </div>
            <div className="flex flex-col pr-[30rem]">
                {/* Nav */}
                <Nav />
                {/* Content */}
                <main className="pt-10">
                    <div className="container mx-auto">
                        <Outlet />
                    </div>
                </main>
            </div>
        </>
    );
};

export default Layout;
