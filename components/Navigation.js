
// components/Navigation.js
import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className="bg-gray-800 p-4">
    <div className="container mx-auto">
      <div className="flex items-center justify-between">
        <div className="text-white text-2xl font-bold">Your Logo</div>
        <div className="space-x-4">
          <Link href="/" legacyBehavior>
            <a className="text-white">Home</a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a className="text-white">About Us</a>
          </Link>
          <Link href="/services" legacyBehavior >
            <a className="text-white">Services</a>
          </Link>
          <Link href="/careers" legacyBehavior >
            <a className="text-white">Carrer</a>
          </Link>
          <Link href="/contact" legacyBehavior >
            <a className="text-white">Contact Us</a>
          </Link>
        </div>
      </div>
    </div>
  </nav>
    )
}
export default Navigation;

