import Link from "next/link"

export default function ItemPage(){
    return (
        <>
        Daftar Item<br />
        <Link className="flex items-center gap-1" href="/item/iPhone-17-Pro">iPhone 17 Pro</Link>
        <Link className="flex items-center gap-1" href="/item/iPhone-17-Max">iPhone 17 Max</Link>
        </>
    )
}