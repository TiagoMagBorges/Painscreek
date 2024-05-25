import Link from 'next/link'

export default function Home() {
    return (
        <ul>
            <li><Link href="/login">Login</Link></li>
            <li><Link href="/people">Pessoas</Link></li>
            <li><Link href="/places">Lugares</Link></li>
            <li><Link href="/events">Eventos</Link></li>
        </ul>
    )
}