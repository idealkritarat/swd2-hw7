import TopMenuItem from "./TopMenuItem";

export default function TopMenu() {
    return (
        <header
            className="flex h-16 w-full items-center border-b border-slate-200 bg-white px-6"
            style={{
                display: "flex",
                width: "100%",
                height: "64px",
                paddingLeft: "24px",
                paddingRight: "24px",
                boxSizing: "border-box",
            }}
        >
            <div
                className="ml-auto flex items-center gap-4"
                style={{
                    marginLeft: "auto",
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                }}
            >
                <nav>
                    <TopMenuItem title="Booking" pageRef="/booking" />
                </nav>
                <img
                    src="/img/logo.png"
                    alt="Venue Explorer logo"
                    width={120}
                    height={40}
                    className="h-10 w-auto"
                />
            </div>
        </header>
    );
}
