'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="min-h-screen bg-[#1b191a] text-golden-500 p-8 pt-32">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8 text-center">About Golden Delight</h1>
        <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
          <div className="w-full md:w-1/2 aspect-video relative rounded-lg overflow-hidden">
            <Image
              src="/images/restaurant.png"
              alt="Golden Delight Restaurant"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="w-full md:w-1/2">
            <p className="mb-4">
              Golden Delight is a family-owned Vietnamese restaurant dedicated to bringing authentic flavors and experiences to our community. Our recipes have been passed down through generations, ensuring that each dish is crafted with care and tradition.
            </p>
            <p>
              Located in the heart of Rosemead, we strive to create a warm and inviting atmosphere where our guests can enjoy the best of Vietnamese cuisine. From our signature pho to our delectable banh mi, every dish is prepared with the freshest ingredients and a passion for culinary excellence.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <Link href="/" className="bg-golden-500 text-[#1b191a] px-6 py-3 rounded-lg hover:bg-golden-300 transition-colors text-lg font-semibold">
            Back to Home
          </Link>
        </div>
      </motion.div>
    </div>
  )
}