import SectionTitle from "../../components/SectionTitle";
import brand from "../../data/brands.json";

const Brand = () => {
  return (
    <div className=" bg-[#f6eeff]">
      <div className=" container mx-auto px-5 py-20">
        <SectionTitle> Ours Brands</SectionTitle>
        <div className="flex flex-wrap justify-center items-center gap-5 mt-10">
          {brand.map((item, i) => (
            <div
              key={i}
              className="p-10 flex flex-col gap-4 opacity-60 hover:opacity-100">
              <div className="">
                <img src={item.img} alt="" className="w-56" />
              </div>
              <h1 className="uppercase font-semibold text-xl tracking-[.45em]">
                {item.name}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brand;
