'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { IBM_Plex_Sans } from 'next/font/google'
import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react'

const ibmPlexSans = IBM_Plex_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export default function Homepage() {
  const [isSticky, setIsSticky] = useState(false)
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 100], [1, 0.8])
  const scale = useTransform(scrollY, [0, 100], [1, 0.9])

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`bg-[#1b191a] text-[#fbe79b] min-h-screen ${ibmPlexSans.className}`}>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isSticky ? 'bg-[#1b191a] shadow-md' : ''}`}>
        <div className="container mx-auto px-6 py-6 flex justify-between items-center">
          <motion.div style={{ opacity, scale }} className="w-32 h-32">
            <Image src="/images/golden.jpg" alt="Golden Delight Logo" width={128} height={128} />
          </motion.div>
          <nav className="flex items-center space-x-8">
            <ul className="flex space-x-8 items-center">
              {['Locations', 'Menus', 'About'].map((item) => (
                <li key={item} className="text-[#fbe79b] hover:text-[#fff5d1] cursor-pointer text-lg">
                  <Link href={`/${item.toLowerCase()}`}>{item}</Link>
                </li>
              ))}
              <li>
                <Link href="/order" className="bg-[#fbe79b] text-[#1b191a] px-6 py-3 rounded-lg hover:bg-[#fff5d1] transition-colors text-lg font-semibold">
                  ORDER ONLINE
                </Link>
              </li>
            </ul>
            <div className="flex space-x-4">
              <a href="#" className="text-[#fbe79b] hover:text-[#fff5d1]" aria-label="Instagram">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-[#fbe79b] hover:text-[#fff5d1]" aria-label="Facebook">
                <Facebook size={24} />
              </a>
            </div>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-6 pt-40">
        <section className="min-h-screen flex flex-col items-center justify-center py-20">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-12"
          >
            <Image src="/images/pho.png" alt="Delicious Pho" width={800} height={800} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-center">Golden Delight</h1>
            <p className="text-2xl md:text-3xl text-center">Experience authentic Vietnamese cuisine</p>
          </motion.div>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Our Specialties</h2>
          <div className="flex justify-center space-x-12 mb-16">
            <Link href="/menus" className="bg-[#fbe79b] text-[#1b191a] px-10 py-4 rounded-full hover:bg-[#fff5d1] transition-colors text-xl font-semibold">
              View Menus
            </Link>
            <Link href="/order" className="bg-[#fbe79b] text-[#1b191a] px-10 py-4 rounded-full hover:bg-[#fff5d1] transition-colors text-xl font-semibold">
              Order Online
            </Link>
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h3 className="text-3xl font-bold mb-6">Contact Us</h3>
              <div className="space-y-4">
                <p className="flex items-center">
                  <MapPin className="mr-2" size={20} />
                  8479 Garvey Avenue, Unit 101A, Rosemead, CA, United States, 91770
                </p>
                <p className="flex items-center">
                  <Phone className="mr-2" size={20} />
                  (626) 656-6262
                </p>
                <p className="flex items-center">
                  <Mail className="mr-2" size={20} />
                  goldendelightinrosemead@gmail.com
                </p>
              </div>
            </div>
            <div className="md:w-1/2 aspect-video">
              <iframe
                src="https://www.instagram.com/p/DAUKfk9SjOw/"
                className="w-full h-full"
                frameBorder="0"
                scrolling="no"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="aspect-square relative"
              >
                <Image src={`/images/gallery-${item}.jpg`} alt={`Gallery Image ${item}`} layout="fill" objectFit="cover" className="rounded-lg" />
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>

      <footer className="bg-[#fbe79b] text-[#1b191a] py-12 mt-24">
        <div className="container mx-auto px-6 text-center">
          <p className="text-xl">&copy; 2024 Golden Delight. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}