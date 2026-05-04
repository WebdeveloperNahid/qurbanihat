import Link from "next/link";
import facbook from "../../app/assets/facebook.png"
import instagram from "../../app/assets/instagram.png"
import twitter from "../../app/assets/twitter.png"
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-8 mt-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {/* About */}
          <div>
            <h2 className="text-lg font-bold text-green-400 mb-2">
              🐄 Qurbani Hat
            </h2>
            <p className="text-gray-300 text-sm">
              Best quality animals for Qurbani.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-lg font-bold text-green-400 mb-2">Contact</h2>
            <p className="text-gray-300 text-sm">📞 +880 01757234194</p>
            <p className="text-gray-300 text-sm">
              📧omarfaruk.nahid.webdeveloper@gmail.com
            </p>
            <p className="text-gray-300 text-sm">📍 Rajshahi, Bangladesh</p>
          </div>

          {/* Social */}
          <div>
            <h2 className="text-lg font-bold text-green-400 mb-2">Follow Us</h2>
            <div className="flex gap-4 justify-center">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="text-gray-300 hover:text-green-400 text-sm"
              >
               Facebook <Image src={facbook} alt="facebook" ></Image> 
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="text-gray-300 hover:text-green-400 text-sm"
              >
                Instagram  <Image src={instagram} alt="instagram" ></Image>
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="text-gray-300 hover:text-green-400 text-sm"
              >
                Twitter  <Image src={ twitter} alt="twitter" ></Image>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-green-700 mt-6 pt-4 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Qurbani Hat. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
