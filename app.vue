<template>
  <div class="pb-[80px] pr-[15px] pl-[15px] mr-auto ml-auto md:w-[750px]">
    <div id="join">
      <div class="phone:mt-[2em] phone:mb-[2em] desktop:mt-[1em] desktop:mb-[1em] text-center">
        <img src="@/assets/images/openvidu_grey_bg_transp_cropped.png" class="w-[15%] phone:w-[10%] align-middle border-0"/>
      </div>
      <div class="phone:max-w-inherit ml-auto mr-auto pr-[15px] pl-[15px] rounded-[6px] pt-[30px] pb-[30px] mb-[30px] text-inherit bg-[#eee] desktop:max-w-inherit md:pr-[60px] md:pl-[60px] md:pt-[48px] md:pb-[48px]">
        <h1 class="text-[#4d4d4d] font-bold text-center text-3xl md:text-[2.25rem] mt-[20px] mb-[10px] font-inherit mx-0">Join a video session</h1>
        <div class="mb-[15px]">
          <p class="mb-[15px] text-[1.31rem] font-extralight mt-0 mr-0">
            <label class="text-[#0088aa] inline-block max-w-full mb-[5px] font-bold">Participant</label>
            <input class="text-[#0088aa] font-bold block w-full h-[34px] px-[6px] py-[12px] text-sm bg-white border-[1px] border-solid border-[#ccc] rounded-[4px] shadow-[inset 0 1px 1px rgba(0,0,0,.075)] transition" type="text" required />
          </p>
          <p class="mb-[15px] text-[1.31rem] font-extralight mt-0 mr-0">
            <label class="text-[#0088aa] inline-block max-w-full mb-[5px] font-bold">Session</label>
            <input class="text-[#0088aa] font-bold block w-full h-[34px] px-[6px] py-[12px] text-sm bg-white border-[1px] border-solid border-[#ccc] rounded-[4px] shadow-[inset 0 1px 1px rgba(0,0,0,.075)] transition" type="text" required />
          </p>
          <p class="text-center mb-[15px] text-[1.31rem] font-extralight mt-0 mr-0">
            <button class="bg-[#06d362] border-[#06d362] font-bold px-[10px] py-[16px] text-[1.13rem] leading-snug rounded-[6px] text-white inline-block mb-0 text-center whitespace-nowrap align-middle touch-manipulation cursor-pointer select-none
            border-[1px] border-solid font-inherit normal-case overflow-visible mt-0 ml-0 mr-0">
              Join!
            </button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>
