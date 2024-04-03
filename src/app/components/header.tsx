import Image from "next/image";
export default function Header() {
    return (
        <div className="w-[1350px] h-[145.33px] bg-white flex-col justify-center items-center inline-flex">
        <div className="h-[75.33px] pl-[5px] pr-[5.02px] py-[5px] bg-white justify-center items-center gap-[11.42px] inline-flex">
            <div className="w-[331.17px] pr-[131.17px] justify-start items-center inline-flex">
                <Image src="SVG.svg" alt="Picture of the author" width={100}  height={65}/>
            </div>

           <div className="w-[420.56px] h-7 px-4 py-1.5 bg-neutral-100 rounded-md justify-center items-center inline-flex">
    <div className="grow shrink basis-0 self-stretch pr-[315.57px] justify-start items-center inline-flex">
        <div className="w-[73.01px] h-4 text-gray-400 text-sm font-normal font-['Inter']">Bạn tìm gì...</div>
    </div>
</div>

            <div className="w-[356px] pr-[24.83px] justify-start items-start inline-flex">
                <div className="w-[188px] self-stretch pl-3 pr-[40.56px] pt-[7.50px] pb-[8.50px] justify-start items-center gap-5 inline-flex">
                    <div className="w-10 h-10 relative flex-col justify-start items-start flex" />
                    <div className="w-[75.44px] h-12 text-neutral-600 text-sm font-normal font-['Inter'] leading-normal">Đăng nhập<br/>Đăng ký</div>
                </div>
                <div className="w-[168px] h-16 relative flex-col justify-start items-start flex">
                    <div className="w-5 h-5 pl-1.5 pr-[5.46px] bg-red-600 rounded-[20px] justify-center items-center inline-flex">
                        <div className="w-[8.54px] h-[22.50px] text-center text-white text-[15px] font-normal font-['Inter'] leading-snug">0</div>
                    </div>
                    <div className="w-[62.09px] h-12 text-center text-neutral-600 text-sm font-normal font-['Inter'] leading-normal">Giỏ hàng<br/>của bạn</div>
                    <div className="w-10 h-10 relative" />
                </div>
            </div>
        </div>
        <div className="self-stretch h-[70px] pl-[401.69px] pr-[401.70px] py-[15px] bg-white border border-slate-200 justify-center items-center inline-flex">
            <div className="grow shrink basis-0 self-stretch pr-[0.01px] justify-center items-center inline-flex">
                <div className="w-[50px] h-7 relative flex-col justify-start items-start flex" />
                <div className="w-[110.22px] h-6 text-center text-gray-900 text-sm font-normal font-['Inter'] leading-normal">Tất cả danh mục</div>
                <div className="w-4 h-4 relative flex-col justify-start items-start flex" />
            </div>
            <div className="w-[123.42px] self-stretch pl-4 pr-[15.80px] py-2 justify-center items-center inline-flex">
                <div className="w-4 h-4 relative flex-col justify-start items-start flex" />
                <div className="w-[75.62px] h-6 text-center text-gray-900 text-sm font-normal font-['Inter'] leading-normal"> Điện Thoại</div>
            </div>
            <div className="w-[105.39px] self-stretch pl-4 pr-[15.80px] py-2 justify-center items-end inline-flex">
                <div className="w-5 h-5 relative flex-col justify-start items-start flex" />
                <div className="w-[53.59px] h-6 text-center text-gray-900 text-base font-normal font-['Inter'] leading-normal"> Laptop</div>
            </div>
            <div className="w-[94.86px] self-stretch pl-4 pr-[15.80px] py-2 justify-center items-center inline-flex">
                <div className="w-4 h-4 relative flex-col justify-start items-start flex" />
                <div className="w-[47.06px] h-6 text-center text-gray-900 text-base font-normal font-['Inter'] leading-normal"> Tablet</div>
            </div>
            <div className="w-[136.92px] self-stretch pl-4 pr-[15.80px] py-2 justify-center items-center inline-flex">
                <div className="w-4 h-4 relative flex-col justify-start items-start flex" />
                <div className="w-[89.12px] h-6 text-center text-gray-900 text-base font-normal font-['Inter'] leading-normal"> Smartwatch</div>
            </div>
        </div>
    </div>
    );
  }
  