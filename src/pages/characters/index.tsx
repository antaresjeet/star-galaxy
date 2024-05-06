import Image from "next/image";
import starWarIntro from '../../../public/images/star-war-intro.png'
import avatar from '../../../public/images/avatar.png'
export default function Characters(): JSX.Element {
  return (
    <div className="star-characters-container">
      <section className="container mx-auto px-4">
        <div className="star-intro flex justify-center">
          <Image src={starWarIntro} alt="star wars"></Image>
        </div>
        <div className="character-search  flex justify-center">
          <div className="relative w-[58vw]">
            <svg className="absolute left-[20px] top-[21px]" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clipRule="evenodd" d="M1 7.58347C0.999526 4.44328 3.21735 1.74005 6.29712 1.127C9.37688 0.513948 12.4608 2.16182 13.6629 5.06282C14.865 7.96382 13.8504 11.31 11.2396 13.0549C8.62884 14.7998 5.14905 14.4575 2.92836 12.2372C1.69381 11.0031 1.00015 9.32908 1 7.58347Z" stroke="white" strokeOpacity="0.8" stroke-width="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12.2378 12.2383L15.9992 15.9997" stroke="white" strokeOpacity="0.8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <button className="w-[70px] bg-white absolute right-2 top-2 flex justify-center items-center h-[73%]">
              <svg width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.5395 14.408C15.2126 14.6623 15.1537 15.1335 15.408 15.4605C15.6623 15.7874 16.1335 15.8463 16.4605 15.592L15.5395 14.408ZM25.4605 8.59201C25.7874 8.33771 25.8463 7.86651 25.592 7.53955C25.3377 7.21258 24.8665 7.15368 24.5395 7.40799L25.4605 8.59201ZM24.5395 8.59201C24.8665 8.84632 25.3377 8.78742 25.592 8.46045C25.8463 8.13349 25.7874 7.66229 25.4605 7.40799L24.5395 8.59201ZM16.4605 0.407986C16.1335 0.153684 15.6623 0.212584 15.408 0.539545C15.1537 0.866506 15.2126 1.33771 15.5395 1.59201L16.4605 0.407986ZM25 8.75C25.4142 8.75 25.75 8.41421 25.75 8C25.75 7.58579 25.4142 7.25 25 7.25V8.75ZM1 7.25C0.585787 7.25 0.25 7.58579 0.25 8C0.25 8.41421 0.585787 8.75 1 8.75V7.25ZM16.4605 15.592L25.4605 8.59201L24.5395 7.40799L15.5395 14.408L16.4605 15.592ZM25.4605 7.40799L16.4605 0.407986L15.5395 1.59201L24.5395 8.59201L25.4605 7.40799ZM25 7.25L1 7.25V8.75L25 8.75V7.25Z" fill="black" />
              </svg>
            </button>
            <input type="text" className="w-full p-[18px] !pl-[50px] bg-[#1D1E1F]" placeholder="Search the galaxy for your favorite  character..." />
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4">
        <div className="charcters-list-wrap grid grid-cols-4 gap-4">
          <div className="bg-zinc-300 character-card">
            <div className="p-3 mt-5 pt-10 bg-black relative">
              <Image alt='' className="absolute top-[-20px] right-[10px]" src={avatar}></Image>
              <h3 className="text-xs font-semibold">Darth Vader</h3>
              <p>Planet: Tatooine</p>
              <p>Birth year: 19BBY</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
