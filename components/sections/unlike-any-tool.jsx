import React from 'react'
import { ZapIllustration } from '../illustrations/zap'
import { LogoLightIllustration } from './logo-light'
import Button from '../button'

import KeyboardShortcuts from '../keyboard-shortcuts'
const UnlikeAnyTool = () => {
    return (
        <div className='text-white mt-[1rem]'>
            <div className='text-center'>
                <h2 className='text-4xl mb-4 md:mb-7 md:text-7xl'>Unlike any tool <br className='hidden md:inline-block' />you've used before</h2>
                <p className='text-primary-text mb-12 text-lg md:text-xl max-w-[68rem] mx-auto'>Designed to the last pixel and engineered with unforgiving precision,
                    Linear combines UI elegance with world-class performance.</p>
            </div>
            <div className='h-[48rem] overflow-hidden md:h-auto md:overflow-auto'>
                <div className='flex md:flex-wrap gap-6 overflow-x-auto snap-x snap-mandatory'>
                    <div className='shrink-0 flex flex-col w-full justify-end items-center bg-glass-gradient border-white-a08 rounded-[4.8rem] md:basis-[calc(66.66%-12px)] p-8 md:p-14 snap-center min-h-[48rem]'>
                        <KeyboardShortcuts/>
                        <p className='mb-4 text-3xl'>Built for your keyboard</p>
                        <p className='text-md text-primary-text'>Fly through your tasks with rapid-fire keyboard shortcuts for everything. Literally everything.</p>
                    </div>
                    <div className='shrink-0 flex flex-col w-full justify-end items-center bg-glass-gradient relative border-white-a08 rounded-[4.8rem] md:basis-[calc(33.33%-12px)] p-8 md:p-14 snap-center min-h-[48rem] overflow-hidden'>
                        <div className="mask-linear-faded absolute top-[-9.2rem]">
                            <ZapIllustration />
                        </div>
                        <p className='mb-4 text-3xl'>Breathtakingly fast</p>
                        <p className='text-md text-primary-text'>Built for speed with 50ms interactions and real-time sync.</p>
                    </div>
                    <div className='shrink-0 group relative w-full flex flex-col items-center justify-end bg-glass-gradient border-white-a08 rounded-[4.8rem] md:basis-[calc(33.33%-12px)] p-8 md:p-14 snap-center min-h-[40rem] overflow-hidden'>
                        <div className='width-[130%] absolute top-[-8rem]'><LogoLightIllustration /></div>
                        <p className='mb-4 text-3xl'>Designed for modern software teams</p>
                        <p className='text-md text-primary-text'>Comes with built-in workflows that create focus and routine.</p>
                        <Button className="transition-[transform,opacity] group-hover:opacity-100 group-hover:transform-none absolute bottom-[20rem] opacity-0 translate-y-[30%] scale-[0.8]" variant="secondary" href="/">
                            Product Principles
                        </Button>
                    </div>
                    <div className='shrink-0 flex flex-col w-full justify-end items-center bg-glass-gradient border-white-a08 rounded-[4.8rem] md:basis-[calc(66.66%-12px)] p-8 md:p-14 snap-center min-h-[48rem]'>
                        <p className='mb-4 text-3xl'>Meet your command line</p>
                        <p className='text-md text-primary-text'>Complete any action in seconds with the global command menu.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UnlikeAnyTool