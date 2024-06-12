import { ElementType, ReactElement, ReactNode } from "react";

interface CardProps {
    children: ReactNode
    text: string
    svgBack: ReactElement
}

export function Card({ children, svgBack, text }: CardProps) {
    return (
        <div className="relative sm:max-w-[272px] h-[229px] rounded-xl">
            {svgBack}
            <div className="flex flex-col gap-4 relative text-white z-50 p-8 text-lg sm:text-sm">
                {children}
                <h4 className="inter">{text}</h4>
            </div>
        </div>
    )
}