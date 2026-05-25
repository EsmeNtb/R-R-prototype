import Topbar_Item from "@components/layout/Topbar_Item"

export default function Topbar_Item() {
    return (
    <header className = "sticky top-0 z-border-b bg-background/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7x1 items-center justify-between px-6 py-4">
            <a href = "/" 
                className="text-sm font-semibold uppercase tracking-[0.35"> Test</a>
        <Topbar_Item/>
        </nav>
    </header>
    )
}