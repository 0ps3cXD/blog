import { ReactNode } from "react";

interface Props {
    children?: ReactNode;
}

export default function InfiniteCarousel(props: Props) {
    return (
        <div className="carousel-wrapper min-h-[200px]">
            <div className="carousel-content">
                {props.children}
                {props.children}
            </div>
        </div>
    );
}