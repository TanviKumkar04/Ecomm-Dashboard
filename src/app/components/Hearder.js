'use client'
import Link from 'next/link'
import { useSelector } from 'react-redux'


export default function Header(){
const cartCount = useSelector(s => s.cart.items.reduce((a,c)=>a + c.qty,0))
return (
<header className="flex items-center justify-between p-4 border-b">
<div className="flex items-center gap-4">
<Link href="/" className="font-bold text-lg">Ecomm</Link>
</div>
<nav className="flex gap-4 items-center">
<Link href="/store/products">Store</Link>
<Link href="/store/wishlist">Wishlist</Link>
<Link href="/store/cart">Cart ({cartCount})</Link>
</nav>
</header>
)
}