import Image from "next/image";
import placeholder from '../../../public/imgs/films-bg.png'
import cartTag from '../../../public/imgs/cart-tag.svg'
import Button from "@/components/button";
export default function Shop(): JSX.Element {
  return (
    <section className="cart-items-container container mt-12 mx-auto px-18 lg:px-32 py-8">
      <div className="text-center">
        <h2 className="text-4xl">Your Cargo Hold</h2>
      </div>
      <div className="product-in-cart mt-10">
        <table className="w-full table-fixed">
          <thead>
            <tr className="cart-head-row">
              <td></td>
              <td>Product</td>
              <td>Price</td>
              <td className="text-center !pr-3">Qty.</td>
              <td className="text-end !pr-4">Total</td>
            </tr>
          </thead>
          <tbody className="cart-list-body">
            <tr className="cart-item bg-[#333333]">
              <td className="!pl-3 !pr-0 max-w-6">
                <button>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2">
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    <line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>
                  </svg>
                </button>
              </td>
              <td className="max-w-32 min-w-32">
                <div className="flex items-center">
                  <Image alt="" className="md:w-32 md:h-28 md:min-w-32 min-w-20 w-20 h-20 rounded" src={placeholder}></Image>
                  <h6 className="ms-3 lg:text-lg md:text-base text-sm font-medium">Star Wars Outlaws</h6>
                </div>
              </td>
              <td>15.99</td>
              <td>
                <div className="flex quantity-selector shadow border border-[var(--theme-yellow-color)]">
                  <button className="py-[7px] w-full">-</button>
                  <span className="text-center py-[7px] w-full border-x border-l-[var(--theme-yellow-color)] border-r-[var(--theme-yellow-color)]">2</span>
                  <button className="py-[7px] w-full">+</button>
                </div>
              </td>
              <td className="text-end">
                <div className="inline-block relative right-[-30px]">
                  <Image alt="" src={cartTag}></Image>
                  <span className="absolute text-black top-[18px] right-[12px] text-lg font-semibold">$255</span>
                </div>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={5} className="pt-5">
                <div className="flex justify-between px-3 py-2 bg-[var(--theme-yellow-color)] text-black font-semibold text-base">
                  <span>Total</span>
                  <span>$381</span>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
        <div className="cart-action mt-14 text-center">
          <Button text="Place Order" />
        </div>
      </div>
    </section>
  );
}
