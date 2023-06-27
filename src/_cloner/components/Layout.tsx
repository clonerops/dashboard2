import { KTSVG } from "./KTSVG";

const Layout = () => {
    return (
        <>
            {/* Aside Fix */}
            <div className="fixed bottom-0 right-0 top-0 flex w-24">
                <div className="flex flex-grow flex-col bg-white shadow border">
                    {/* Aside Content */}
                </div>
            </div>
            {/* Aside Toggle */}
            <div className="fixed bottom-0 right-0 top-0 mr-24 flex w-96">
                <div className="flex flex-grow flex-col bg-white shadow border"></div>
            </div>
            {/* Nav */}
            <div className="flex flex-col pr-[30rem]">
                <nav className="container flex justify-between">
                    <div className="flex flex-col">
                        <div className="font-yekan_bold text-3xl text-primary">
                            ثبت درخواست
                        </div>
                        <div className="font-yekan_bold text-xl">
                            صفحه اصلی / ثبت درخواست
                        </div>
                    </div>
                    <div className="flex flex-row gap-4">
                        <div className="cursor-pointer rounded-xl border p-4 hover:text-blue-600">
                            <KTSVG
                                path="/media/logos/gen007.svg"
                                svgClassName="h-[18px]"
                            />
                        </div>
                        <div className="cursor-pointer rounded-xl border p-4 hover:text-blue-600">
                            <KTSVG
                                path="/media/logos/gen060.svg"
                                svgClassName="h-[18px]"
                            />
                        </div>
                    </div>
                </nav>
                {/* Content */}
                <main className="pt-12">
                    <div className="container mx-auto">
                        <div className="h-96 border-4 border-dashed border-gray-500"></div>
                    </div>
                </main>
            </div>
        </>
    );
};

export default Layout;
