'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Order() {
  return (
    <div className="min-h-screen bg-[#231f1e] text-golden-500 p-8 pt-32">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8 text-center">Order Online</h1>
        <p className="mb-8 text-center">
          Ready to enjoy Golden Delight at home? Place your order here!
        </p>
        {/* Add your order form or integration here */}
        <p className="mb-8 text-center">Order form coming soon...</p>
        <div className="flex justify-center">
          <Link href="/" className="bg-golden-500 text-[#231f1e] px-4 py-2 rounded hover:bg-golden-300 transition-colors">
            Back to Home
          </Link>
        </div>
      </motion.div>
    </div>
  )
}