import { FcLike } from "react-icons/fc";
import { HiShoppingCart } from "react-icons/hi";

const ItemDetail = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  md:px-32 md:py-10 p-8">
      <div>Route chain</div>

      <div className="py-5">
        {/* image section */}
        <div>
          {/* main image */}
          <div></div>
          {/* supporting  images */}
          <div></div>
        </div>

        {/* form section */}
        <div className="cursor-pointer md:w-3/4 w-full ">
          <h2 className="font-bold text-xl">My Product name</h2>
          <div className="py-5 flex items-center gap-5 ">
            <p className="text-2xl font-bold">$30.00</p>
            <p className="text-red-500 line-through">$89.95</p>
            <button className="text-white bg-greenBtnColor p-2 rounded">
              Save 67%
            </button>
            <div className="flex gap-2 items-center border p-3 m-auto ">
              <FcLike />
              <p className="hidden md:block">Add to Favourites</p>
            </div>
          </div>
          <div className="font-light py-3 pr-4">
            Voluptate qui adipisicing est laboris sit esse aliqua. Ut aliqua
            cillum magna laboris. Excepteur incididunt enim elit nisi ut. Dolor
            id irure eu laborum non incididunt ullamco culpa sunt laboris.
            Occaecat aliqua exercitation aute proident reprehenderit...
          </div>

          {/* form */}
          <form className="w-full mt-5 pr-4">
            <div className="flex items-center gap-4 ">
              <label for="size">
                Size <span className="text-red-500">*</span>
              </label>
              <div className="flex-auto flex gap-3 ">
                <select
                  id="size"
                  name="size"
                  className="outline-none px-4 py-2 w-full border"
                >
                  <option>Select a shirt size</option>
                  <option>Small</option>
                  <option>Medium</option>
                  <option>Large</option>
                  <option>Extra Large</option>
                </select>
              </div>
              <button className="border text-sm p-2">View Size Chart</button>
            </div>

            <div className="flex items-center gap-4 my-5">
              <label for="name">Name</label>
              <input
                id="name"
                type={"text"}
                placeholder="What name would you want in the shirt?"
                className="w-full border p-2 outline-none"
              />
            </div>

            <div className="flex items-center gap-3 ">
              <label for="number">Number</label>
              <input
                id="number"
                type={"text"}
                placeholder="Enter a number between 0 and 99"
                className="w-full border p-2 outline-none"
              />
            </div>

            <div className="flex items-center gap-4 my-5">
              <label for="patch">Patch</label>
              <select
                id="patch"
                name="patch"
                className="outline-none px-4 py-2 w-full border"
              >
                <option>Select a patch</option>
                <option>Patch 1</option>
                <option>Patch 2</option>
                <option>Patch 3</option>
                <option>Patch 4</option>
              </select>
            </div>

            <div className="flex items-center gap-4 mb-5">
              <label for="quantity">Quantity</label>
              <input
                id="quantity"
                value="1"
                type={"number"}
                min="1"
                className="w-fit border p-2 outline-none"
              />
            </div>

            <div className="flex items-center justify-between bg-yellowColor ">
              <p className="font-semibold px-3"> Add to Cart</p>
              <span className="bg-headerColor text-white p-3 text-xl">
                <HiShoppingCart />
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
