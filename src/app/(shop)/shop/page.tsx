import ShopSectionImg from "@/../public/images/shop-background.png"

const Shop = () => {
    return (
        <div
            style={{ backgroundImage: `url(${ShopSectionImg.src})` }}
            className="bg-cover bg-center h-64 w-full min-h-80">
        </div>
    )
}

export default Shop;
