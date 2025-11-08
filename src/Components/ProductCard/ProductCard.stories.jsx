import React from "react";
import ProductCard from "./ProductCard";
import lips from '../../assets/lipstick.webp'
import l1 from '../../assets/l1.webp'
import l2 from '../../assets/l2.webp'
import l3 from '../../assets/l3.webp'
import lh from '../../assets/lh.webp'

export default {
    title: "UI/ProductCard",
    component: ProductCard,
    tags: ["autodocs"],
};

export const Default = () => (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-10">
        <ProductCard
            id={2}
            title="Luxury Eyeshadow Palette"
            price="49.99"
            desc="A versatile palette with 12 stunning shades for all occasions."
            img={lips}
            hoverImg={lh}
            smallImgs={[l1, l2, l3]} />
    </div>
);

export const WithoutThumbnails = () => (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-10">
        <ProductCard
            id={1}
            title="Classic Red Lipstick"
            price="24.99"
            desc="A smooth, long-lasting matte lipstick that adds a touch of elegance."
            img={lips}
            hoverImg={lh}
        />
    </div>
);