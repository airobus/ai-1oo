import Link from 'next/link'

interface NavItem {
  name: string;
  href: string;
}

interface HeaderProps {
  link: string;
  navItems: NavItem[];
}

const Header: React.FC<HeaderProps> = ({ link, navItems }) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <Link href={link} className="text-2xl font-bold text-gray-900">
              100.AI
            </Link>
          </div>
          <nav className="hidden md:flex space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header