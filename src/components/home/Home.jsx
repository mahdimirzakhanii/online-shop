import Banner from "./Banner";
import BestProducts from "./BestProducts";
import Header from "./Header";

const Home = () => {
  const category = [
    {
      name: "Apple",
      imgSrc: "/public/image/public/aple-logo.png",
    },
    {
      name: "Samsung",
      imgSrc: "/public/image/public/samsung-logo.png",
    },
    {
      name: "Xiaomi",
      imgSrc: "/public/image/public/xiaomi-logo.png",
    },
    {
      name: "Huawei",
      imgSrc: "/public/image/public/huawei-logo.png",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-10 w-full h-full ">
      <div className="w-full h-full">
        <Header />
      </div>

      <div className="flex flex-col items-center px-10 w-full gap-10">
        <div className="flex flex-col items-start gap-4 w-full">
          <span className="text-2xl text-start pl-20">Browse By Category</span>
        </div>

        <div className="flex w-full items-center justify-around  pb-40">
          {category?.map((item, index) => (
            <div
              className="flex flex-col gap-3 items-center justify-around w-full basis-1/6 p-2  cursor-pointer "
              key={index}
            >
              <img
                className="w-24 h-24 object-contain	rounded-full  bg-primary/10 hover:shadow-lg duration-300 p-2"
                src={item?.imgSrc}
                alt=""
              />
              <span className="text-xl text-primary">{item?.name}</span>
            </div>
          ))}
        </div>
        <Banner />

        <div className="flex flex-col items-center gap-4 w-full pl-20">
          <span className="text-2xl text-start w-full items-start ">
            Explore Our Products
          </span>
          <BestProducts />
        </div>
      </div>
    </div>
  );
};

export default Home;