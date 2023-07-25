import Link from 'next/link';

export default function AdminPanelLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        <nav>
            <ul>
                <li>
                    <Link href={'/dashboard'}>Dashboard</Link>
                </li>
                <li>
                    <Link href={'/kiosks'}>Kioscos</Link>
                </li>
            </ul>
        </nav>
        {children}
      </section>
    )
  }