import React, { useState } from "react";
import PropTypes from "prop-types";

const ProductCard = ({ id, title, price, desc, img, hoverImg, smallImgs = [], onClick }) => {

    const [mainImg, setMainImg] = useState(img);

    const handleCardClick = () => {
        onClick?.(id);
    };

    const handleSmallImgClick = (e, img) => {
        e.stopPropagation();
        setMainImg(img);
    };

    return (
        <div
            onClick={handleCardClick}
            className="relative w-[320px] bg-white rounded-xl overflow-hidden shadow-md cursor-pointer transition-all duration-300 hover:shadow-lg">
            <div className="relative w-full h-[320px]">
                <img
                    src={mainImg}
                    alt={title}
                    className="absolute w-full h-full object-cover rounded-t-xl transition-opacity duration-300 hover:opacity-0" />
                <img
                    src={hoverImg}
                    alt={`${title}-hover`}
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-t-xl opacity-0 transition-opacity duration-300 hover:opacity-100" />
            </div>

            {smallImgs.length > 0 && (
                <div className="flex gap-2 mt-3 px-4">
                    {smallImgs.map((imgSrc, i) => (
                        <img
                            key={i}
                            src={imgSrc}
                            alt={`thumb-${i}`}
                            onClick={(e) => handleSmallImgClick(e, imgSrc)}
                            className={`w-[40px] h-[40px] object-cover rounded-md border ${mainImg === imgSrc ? "border-black" : "border-gray-300"
                                }`}
                        />
                    ))}
                </div>
            )}

            <div className="px-4 py-3">
                <h3 className="font-semibold text-lg">{title}</h3>
                <p className="text-sm text-gray-500 line-clamp-2">{desc}</p>

                <div className="flex justify-between items-center mt-2">
                    <span className="text-lg font-semibold text-gray-900">${price}</span>
                </div>
            </div>
        </div>
    );
};

ProductCard.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    desc: PropTypes.string,
    img: PropTypes.string.isRequired,
    hoverImg: PropTypes.string,
    smallImgs: PropTypes.arrayOf(PropTypes.string),
    onClick: PropTypes.func,
};

export default ProductCard;
