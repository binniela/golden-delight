'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Menus() {
  return (
    <div className="min-h-screen bg-[#231f1e] text-golden-500 p-8 pt-32">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8 text-center">Our Menus</h1>
        <p className="mb-8 text-center">Explore our delicious Vietnamese dishes:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {['menu1', 'menu2', 'menu3', 'menu4'].map((menu, index) => (
            <motion.div
              key={menu}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="aspect-[3/4] relative"
            >
              <Image src={`/images/${menu}.jpg`} alt={`Menu ${index + 1}`} layout="fill" objectFit="cover" className="rounded-lg" />
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center">
          <Link href="/" className="bg-golden-500 text-[#231f1e] px-4 py-2 rounded hover:bg-golden-300 transition-colors">
            Back to Home
          </Link>
        </div>
      </motion.div>
    </div>
  )
}