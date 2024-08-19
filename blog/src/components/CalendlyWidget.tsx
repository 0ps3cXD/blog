"use client"
import { InlineWidget } from 'react-calendly';

export default function CalendlyWidget() {
    return (
        <div className="h-fit w-[95%]">
            <InlineWidget url="https://calendly.com/bono-behappycoaching/kennenlernen-mit-frau-dr-bono" />
        </div>
    )
}