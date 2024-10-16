'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Locations() {
  return (
    <div className="min-h-screen bg-[#231f1e] text-golden-500 p-8 pt-32">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold mb-8 text-center">Our Location</h1>
        <p className="mb-4 text-center">Visit Golden Delight at:</p>
        <p className="text-xl mb-8 text-center">8479 Garvey Ave Ste 101A, Rosemead, CA 91770</p>
        <div className="flex justify-center">
          <Link href="/" className="bg-golden-500 text-[#231f1e] px-4 py-2 rounded hover:bg-golden-300 transition-colors">
            Back to Home
          </Link>
        </div>
      </motion.div>
    </div>
  )
}