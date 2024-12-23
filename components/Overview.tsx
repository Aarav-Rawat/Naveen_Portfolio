'use client'
import React from 'react'
import { BackgroundBeamsWithCollision } from './ui/BackgroundBeamsWithCollision'
import { GlareCard } from './ui/GlareCard'

const Overview = () => {
    return (
        <div className=" min-h-[100vh] w-full relative ">
            <BackgroundBeamsWithCollision className="relative w-full">
                <div className=" flex flex-col gap-5 text-start">
                    <h1 className="text-6xl font-bold text-start text-purple">Overview.</h1>
                    <p className="mb-10 flex items-center justify-start text-xl w-[70vw] text-[#AAA6C3] text-start">Kirmada - Your Trusted Brand on Amazon
                      <br />
                        Kirmada is a highly-rated brand on Amazon,specializing in premium electronic accessories that customers love. Our top-selling products include glass mobile covers, designed to provide sleek, durable, and stylish protection for your devices, and mouse pads that deliver unmatched comfort and precision.

                        As one of the best in the glass mobile cover category, Kirmada is dedicated to offering products that meet the highest standards of quality and customer satisfaction. When you choose Kirmada on Amazon, you choose reliability, style, and value.
                    </p>

                    <div className='flex gap-10 items-center justify-center flex-wrap'>
                        <GlareCard >
                            <div className='flex flex-col items-center justify-center w-full h-[60%]'>
                                <span className="text-5xl font-bold">Mobile <br /> Cover</span>
                            </div>
                        </GlareCard>

                        <GlareCard>
                            <div className='flex flex-col items-center justify-center w-full h-[60%]'>
                                <span className="text-5xl font-bold">Mouse <br /> Pad</span>

                            </div>
                        </GlareCard>

                        <GlareCard>
                            <div className='flex flex-col items-center justify-center w-full h-[60%]'>
                                <span className="text-5xl font-bold">Electroic <br /> Accessories</span>

                            </div>
                        </GlareCard>
                    </div>

                </div>
            </BackgroundBeamsWithCollision>
        </div>
    )
}

export default Overview