/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from "react";
import anime from "animejs/lib/anime.es.js"
import logo1 from "../resources/assets/logo-1.svg";
import logo2 from "../resources/assets/logo-2.svg";

export default function LogoComponent({ toggleLogo, width }) {

  // svg vars
    const growfit = "M21.7391 25.4198L19.0438 23.1592C20.3765 21.4453 21.1728 19.2866 21.1728 16.9473C21.1728 15.3839 20.8184 13.9039 20.1854 12.5814C21.1659 12.3335 21.7989 11.3584 21.6171 10.3439C21.426 9.28547 20.4179 8.58368 19.366 8.77592L17.474 9.12334C15.7455 7.70586 13.5405 6.85352 11.1421 6.85352C5.61119 6.85352 1.10911 11.3816 1.10911 16.9496C1.10911 22.5177 5.60889 27.0458 11.1421 27.0458C12.8983 27.0458 14.5486 26.5895 15.9849 25.7881L18.1415 27.597C17.2807 29.0979 15.9734 30.2768 14.3668 30.9809C12.3827 31.8495 10.1823 31.8888 8.17066 31.0921C6.15899 30.2953 4.57544 28.7574 3.71231 26.7609C3.2865 25.7742 2.14486 25.3225 1.16435 25.751C0.183832 26.1795 -0.264995 27.3283 0.160816 28.315C0.791476 29.7719 1.68683 31.0712 2.82386 32.176C3.96089 33.2808 5.28205 34.1355 6.75282 34.7169C8.15685 35.2727 9.62762 35.553 11.1329 35.553C11.2043 35.553 11.2779 35.553 11.3493 35.553C12.9282 35.5252 14.4634 35.1894 15.9135 34.5547C17.3613 33.9201 18.6525 33.0191 19.7504 31.8749C20.8483 30.7308 21.6976 29.4013 22.2753 27.9213C22.3375 27.7638 22.3766 27.6016 22.3973 27.4418C22.5769 26.7215 22.349 25.9294 21.7437 25.4221L21.7391 25.4198ZM11.1421 23.1477C7.74485 23.1477 4.98283 20.366 4.98283 16.9496C4.98283 13.5333 7.74715 10.7516 11.1421 10.7516C14.5371 10.7516 17.3014 13.5333 17.3014 16.9496C17.3014 20.366 14.5371 23.1477 11.1421 23.1477Z M26.1528 25.7093C25.9227 25.7093 25.727 25.6283 25.5659 25.4661C25.4048 25.304 25.3242 25.1071 25.3242 24.8755V8.51187C25.3242 8.25709 25.4048 8.04864 25.5659 7.88651C25.727 7.72437 25.9227 7.64331 26.1528 7.64331H28.9494C29.1795 7.64331 29.3752 7.72437 29.5363 7.88651C29.7204 8.04864 29.8125 8.25709 29.8125 8.51187V9.93631C30.3419 9.19514 31.0209 8.62768 31.8495 8.23393C32.7011 7.84018 33.6793 7.64331 34.7841 7.64331H36.1997C36.4528 7.64331 36.6485 7.72437 36.7866 7.88651C36.9477 8.04864 37.0283 8.24551 37.0283 8.47712V10.9786C37.0283 11.2102 36.9477 11.4071 36.7866 11.5692C36.6485 11.7313 36.4528 11.8124 36.1997 11.8124H33.5067C32.4019 11.8124 31.5388 12.1251 30.9173 12.7504C30.3189 13.3758 30.0196 14.2328 30.0196 15.3214V24.8755C30.0196 25.1071 29.9391 25.304 29.778 25.4661C29.6169 25.6283 29.4097 25.7093 29.1565 25.7093H26.1528ZM65.9258 25.7093C65.6036 25.7093 65.3619 25.6283 65.2008 25.4661C65.0397 25.304 64.9016 25.0955 64.7865 24.8408L59.8494 8.72033C59.8264 8.60452 59.8149 8.50029 59.8149 8.40764C59.8149 8.19919 59.8839 8.02547 60.022 7.88651C60.1832 7.72437 60.3558 7.64331 60.5399 7.64331H63.0948C63.371 7.64331 63.5896 7.72437 63.7508 7.88651C63.9119 8.02547 64.0039 8.16444 64.027 8.30341L67.4104 19.8031L71.001 8.40764C71.0471 8.24551 71.1507 8.08338 71.3118 7.92125C71.4729 7.73596 71.7146 7.64331 72.0368 7.64331H73.7631C74.0853 7.64331 74.327 7.73596 74.4881 7.92125C74.6492 8.08338 74.7528 8.24551 74.7988 8.40764L78.3894 19.8031L81.7729 8.30341C81.7959 8.16444 81.8765 8.02547 82.0146 7.88651C82.1757 7.72437 82.3944 7.64331 82.6706 7.64331H85.2254C85.4326 7.64331 85.6052 7.72437 85.7433 7.88651C85.9044 8.02547 85.985 8.19919 85.985 8.40764C85.985 8.50029 85.962 8.60452 85.9159 8.72033L80.9788 24.8408C80.9098 25.0955 80.7832 25.304 80.5991 25.4661C80.4379 25.6283 80.1963 25.7093 79.874 25.7093H77.6299C77.3076 25.7093 77.0545 25.6283 76.8703 25.4661C76.6862 25.304 76.5596 25.0955 76.4906 24.8408L72.8999 13.8622L69.3093 24.8408C69.2172 25.0955 69.0791 25.304 68.895 25.4661C68.7339 25.6283 68.4807 25.7093 68.1355 25.7093H65.9258ZM89.6677 7.64331V6.21887C89.6677 4.82918 89.9208 3.68269 90.4272 2.77939C90.9336 1.85292 91.6816 1.15808 92.6714 0.694847C93.6611 0.231616 94.9155 0 96.4346 0H98.7823C99.0355 0 99.2311 0.0810626 99.3692 0.243193C99.5304 0.405324 99.6109 0.602195 99.6109 0.83381V2.84887C99.6109 3.08048 99.5304 3.27735 99.3692 3.43948C99.2311 3.60162 99.0355 3.68269 98.7823 3.68269H96.5727C95.652 3.68269 95.0191 3.91431 94.6738 4.37754C94.3286 4.84077 94.1559 5.51244 94.1559 6.39258V7.87493H98.4371C98.6903 7.87493 98.8859 7.95599 99.024 8.11812C99.1851 8.28025 99.2657 8.47712 99.2657 8.70874V10.7238C99.2657 10.9554 99.1851 11.1523 99.024 11.3144C98.8859 11.4765 98.6903 11.5576 98.4371 11.5576H94.1559V24.8755C94.1559 25.1071 94.0754 25.304 93.9143 25.4661C93.7531 25.6283 93.5575 25.7093 93.3273 25.7093H90.4963C90.2661 25.7093 90.0705 25.6283 89.9093 25.4661C89.7482 25.304 89.6677 25.1071 89.6677 24.8755V11.326M105.634 25.7093C105.404 25.7093 105.209 25.6283 105.047 25.4661C104.886 25.304 104.806 25.1071 104.806 24.8755V8.70874C104.806 8.47712 104.886 8.28025 105.047 8.11812C105.209 7.95599 105.404 7.87493 105.634 7.87493H108.5C108.753 7.87493 108.949 7.95599 109.087 8.11812C109.248 8.28025 109.329 8.47712 109.329 8.70874V24.8755C109.329 25.1071 109.248 25.304 109.087 25.4661C108.949 25.6283 108.753 25.7093 108.5 25.7093H105.634ZM114.818 7.64331V1.87608C114.818 1.64446 114.887 1.44759 115.025 1.28546C115.186 1.12333 115.394 1.04227 115.647 1.04227H118.443C118.673 1.04227 118.869 1.12333 119.03 1.28546C119.191 1.44759 119.272 1.64446 119.272 1.87608V7.87493H123.588C123.818 7.87493 124.013 7.95599 124.174 8.11812C124.336 8.28025 124.416 8.47712 124.416 8.70874V10.7238C124.416 10.9554 124.336 11.1523 124.174 11.3144C124.013 11.4765 123.818 11.5576 123.588 11.5576H119.272V18.8651C119.272 19.8147 119.433 20.5559 119.755 21.0886C120.1 21.6213 120.687 21.8877 121.516 21.8877H123.898C124.128 21.8877 124.324 21.9687 124.485 22.1309C124.646 22.293 124.727 22.4899 124.727 22.7215V24.8755C124.727 25.1071 124.646 25.304 124.485 25.4661C124.324 25.6283 124.128 25.7093 123.898 25.7093H121.102C119.721 25.7093 118.558 25.4661 117.615 24.9797C116.671 24.4933 115.969 23.7753 115.509 22.8257C115.048 21.8529 114.818 20.6485 114.818 19.2125V7.64331Z M48.5371 26.1195C43.3883 26.1195 39.1992 21.9041 39.1992 16.7228C39.1992 11.5416 43.3883 7.32617 48.5371 7.32617C53.686 7.32617 57.875 11.5416 57.875 16.7228C57.875 21.9041 53.686 26.1195 48.5371 26.1195ZM48.5371 10.9533C45.3746 10.9533 42.8036 13.5404 42.8036 16.7228C42.8036 19.9052 45.3746 22.4924 48.5371 22.4924C51.6996 22.4924 54.2706 19.9052 54.2706 16.7228C54.2706 13.5404 51.6996 10.9533 48.5371 10.9533Z M107.08 6.29038C108.084 6.29038 108.898 5.47118 108.898 4.46063C108.898 3.45008 108.084 2.63086 107.08 2.63086C106.076 2.63086 105.262 3.45008 105.262 4.46063C105.262 5.47118 106.076 6.29038 107.08 6.29038Z M107.081 6.72838C105.839 6.72838 104.828 5.71159 104.828 4.46087C104.828 3.21015 105.839 2.19336 107.081 2.19336C108.324 2.19336 109.335 3.21015 109.335 4.46087C109.335 5.71159 108.324 6.72838 107.081 6.72838ZM107.081 3.06886C106.32 3.06886 105.698 3.69422 105.698 4.46087C105.698 5.22752 106.32 5.85288 107.081 5.85288C107.843 5.85288 108.465 5.22752 108.465 4.46087C108.465 3.69422 107.843 3.06886 107.081 3.06886Z"

    const plus1 = "M135.815 13.0628C135.691 12.9378 135.527 12.8706 135.339 12.8706H132.995V10.4988C132.995 10.3066 132.922 10.1398 132.784 10.0124C132.659 9.892 132.503 9.82715 132.33 9.82715H131.108C130.922 9.82715 130.758 9.89432 130.632 10.0194C130.507 10.1445 130.441 10.3089 130.441 10.4988V12.8706H128.084C127.904 12.8706 127.741 12.9331 127.607 13.0489L127.593 13.0628C127.469 13.1879 127.402 13.3523 127.402 13.5423V14.6355C127.402 14.8231 127.469 14.9899 127.593 15.1149L127.607 15.1288C127.738 15.2446 127.904 15.3072 128.084 15.3072H130.441V17.7553C130.441 17.943 130.507 18.1097 130.632 18.2348C130.756 18.3599 130.919 18.427 131.108 18.427H132.33C132.503 18.427 132.659 18.3622 132.784 18.2417C132.922 18.1167 132.995 17.9476 132.995 17.7553V15.3072H135.339C135.525 15.3072 135.688 15.24 135.815 15.1149C135.939 14.9899 136.006 14.8254 136.006 14.6355V13.5423C136.006 13.3547 135.939 13.1879 135.815 13.0628Z"
    
    const g1 = "M21.7391 25.4198L19.0438 23.1592C20.3765 21.4453 21.1728 19.2866 21.1728 16.9473C21.1728 15.3839 20.8184 13.9039 20.1854 12.5814C21.1659 12.3335 21.7989 11.3584 21.6171 10.3439C21.426 9.28547 20.4179 8.58368 19.366 8.77592L17.474 9.12334C15.7455 7.70586 13.5405 6.85352 11.1421 6.85352C5.61119 6.85352 1.10911 11.3816 1.10911 16.9496C1.10911 22.5177 5.60889 27.0458 11.1421 27.0458C12.8983 27.0458 14.5486 26.5895 15.9849 25.7881L18.1415 27.597C17.2807 29.0979 15.9734 30.2768 14.3668 30.9809C12.3827 31.8495 10.1823 31.8888 8.17066 31.0921C6.15899 30.2953 4.57544 28.7574 3.71231 26.7609C3.2865 25.7742 2.14486 25.3225 1.16435 25.751C0.183832 26.1795 -0.264995 27.3283 0.160816 28.315C0.791476 29.7719 1.68683 31.0712 2.82386 32.176C3.96089 33.2808 5.28205 34.1355 6.75282 34.7169C8.15685 35.2727 9.62762 35.553 11.1329 35.553C11.2043 35.553 11.2779 35.553 11.3493 35.553C12.9282 35.5252 14.4634 35.1894 15.9135 34.5547C17.3613 33.9201 18.6525 33.0191 19.7504 31.8749C20.8483 30.7308 21.6976 29.4013 22.2753 27.9213C22.3375 27.7638 22.3766 27.6016 22.3973 27.4418C22.5769 26.7215 22.349 25.9294 21.7437 25.4221L21.7391 25.4198ZM11.1421 23.1477C7.74485 23.1477 4.98283 20.366 4.98283 16.9496C4.98283 13.5333 7.74715 10.7516 11.1421 10.7516C14.5371 10.7516 17.3014 13.5333 17.3014 16.9496C17.3014 20.366 14.5371 23.1477 11.1421 23.1477Z "
    
    const g2 = "M34.8444 29.7601L30.526 26.1378C32.6635 23.3906 33.9391 19.9323 33.9391 16.1811C33.9391 13.6766 33.3701 11.3028 32.3564 9.18407C33.9268 8.78592 34.9433 7.22554 34.6494 5.5988C34.3432 3.9019 32.7276 2.77665 31.0413 3.08474L28.0069 3.63931C25.2382 1.36605 21.7045 0 17.8591 0C8.99333 0 1.77998 7.25872 1.77998 16.1811C1.77998 25.1036 8.99333 32.3623 17.86 32.3623C20.673 32.3623 23.3192 31.6305 25.6226 30.3478L29.078 33.2458C27.6998 35.6499 25.6028 37.5411 23.0272 38.6692C19.8487 40.0609 16.3216 40.1234 13.096 38.8465C9.87133 37.5696 7.33342 35.1048 5.94953 31.9063C5.2656 30.3251 3.43706 29.6008 1.86571 30.2891C0.294351 30.9773 -0.425382 32.8173 0.258553 34.3986C1.26844 36.7344 2.70508 38.8162 4.52702 40.5861C6.34897 42.3559 8.46766 43.7258 10.8228 44.6586C13.0715 45.5488 15.4314 46 17.8421 46C17.957 46 18.0729 45.9991 18.1878 45.9972C20.7191 45.9517 23.1798 45.4141 25.502 44.397C27.8232 43.3798 29.892 41.935 31.6508 40.1016C33.4087 38.2682 34.7709 36.1372 35.6979 33.7663C35.7968 33.5131 35.8609 33.2553 35.892 32.9984C36.1802 31.8447 35.8138 30.5744 34.8444 29.762V29.7601ZM17.8591 26.117C12.4149 26.117 7.98533 21.6596 7.98533 16.1811C7.98533 10.7027 12.4149 6.24532 17.8591 6.24532C23.3032 6.24532 27.7328 10.7027 27.7328 16.1811C27.7328 21.6596 23.3032 26.117 17.8591 26.117Z"

    const plus2 = "M49.0794 9.92643C48.8797 9.72546 48.616 9.61928 48.3154 9.61928H44.551V5.80744C44.551 5.49934 44.4332 5.23011 44.2109 5.02819C44.0131 4.8348 43.7606 4.73242 43.4827 4.73242H41.5204C41.2208 4.73242 40.957 4.8386 40.7563 5.03957C40.5566 5.24054 40.4511 5.50598 40.4511 5.80838V9.62023H36.6631C36.3748 9.62023 36.1111 9.71882 35.8982 9.90652L35.8755 9.92833C35.6758 10.1293 35.5703 10.3947 35.5703 10.6971V12.4547C35.5703 12.7562 35.6758 13.0225 35.8755 13.2235L35.8982 13.2453C36.1101 13.4321 36.3748 13.5307 36.6631 13.5307H40.4511V17.4629C40.4511 17.7644 40.5566 18.0307 40.7563 18.2317C40.9561 18.4327 41.2198 18.5389 41.5204 18.5389H43.4827C43.7615 18.5389 44.0131 18.4365 44.2109 18.2421C44.4342 18.0402 44.551 17.771 44.551 17.4629V13.5307H48.3154C48.615 13.5307 48.8788 13.4245 49.0794 13.2235C49.2792 13.0225 49.3847 12.7571 49.3847 12.4547V10.6971C49.3847 10.3957 49.2792 10.1293 49.0794 9.92833V9.92643Z"
    
    const plus3 = "M30.4126 7.06282C30.2883 6.93775 30.1249 6.87058 29.9362 6.87058H27.5931V4.49884C27.5931 4.3066 27.5194 4.13983 27.3813 4.01244C27.257 3.892 27.1005 3.82715 26.9279 3.82715H25.7057C25.5193 3.82715 25.3558 3.89432 25.2292 4.01939C25.105 4.14447 25.0382 4.30891 25.0382 4.49884V6.87058H22.6813C22.5018 6.87058 22.3383 6.93312 22.2048 7.04893L22.191 7.06282C22.0667 7.1879 22 7.35235 22 7.54227V8.63549C22 8.8231 22.0667 8.98986 22.191 9.11493L22.2048 9.12883C22.336 9.24464 22.5018 9.30718 22.6813 9.30718H25.0382V11.7553C25.0382 11.943 25.105 12.1097 25.2292 12.2348C25.3535 12.3599 25.517 12.427 25.7057 12.427H26.9279C27.1005 12.427 27.257 12.3622 27.3813 12.2417C27.5194 12.1167 27.5931 11.9476 27.5931 11.7553V9.30718H29.9362C30.1226 9.30718 30.286 9.24001 30.4126 9.11493C30.5369 8.98986 30.6037 8.82541 30.6037 8.63549V7.54227C30.6037 7.35466 30.5369 7.1879 30.4126 7.06282Z"
  // svg vars

  const handleClickLogo = (flag) => {

    // SETTING TIMELINE
    const timeLine = anime.timeline({
      duration: 500,
      easing: 'easeOutExpo'
    });

    // ADD ANIMATIONS
    timeLine
      .add({
        targets: '#growfit',
        d: [ { value: flag ? growfit : g2 }],
        fill: [{ value: '#232A38' }],
      })
      .add({
        targets: '#plus',
        d: [ { value: flag ? plus1 : plus2 }],
        fill: [{ value: flag ? '#232A38' : '#00FFC2' }],
      }, '-= 500')
  };

  useEffect(() => {
    if (toggleLogo && toggleLogo > 1050) {
      handleClickLogo(false);
    } else {
      handleClickLogo(true);
    }
  }, [toggleLogo]);

  return (
    <>
      <svg
        alt=""
        viewBox={toggleLogo > 1050
          ? (width >= 768 // ----------- scroll
            ? '0 0 50 48' // landscape
            : '0 0 50 48') // movil
          : (width >= 768 // ----------- inicio
            ? '0 0 140 48' // landscape
            : '0 0 140 35') // movil
        }
        fill="none"
        id="logo-svg"
        className=""
        width={toggleLogo > 1050
          ? (width >= 768 // ----------- scroll
            ? '45' // landscape
            : '30') // movil
          : (width >= 768 // ----------- inicio
            ? '90' // landscape
            : '90') // movil
        }
        height="auto"
      >

        <path id="growfit" fill="#232A38" d="m 107.06553,6.479511 c 1.24546,0 2.25524,-1.0162239 2.25524,-2.2698196 0,-1.2535958 -1.00978,-2.2698448 -2.25524,-2.2698448 -1.24547,0 -2.25525,1.016249 -2.25525,2.2698448 0,1.2535957 1.00978,2.2698196 2.25525,2.2698196 z M 21.7391,25.4198 19.0438,23.1592 c 1.3327,-1.7139 2.129,-3.8726 2.129,-6.2119 0,-1.5634 -0.3544,-3.0434 -0.9874,-4.3659 0.9805,-0.2479 1.6135,-1.223 1.4317,-2.2375 C 21.426,9.28547 20.4179,8.58368 19.366,8.77592 L 17.474,9.12334 C 15.7455,7.70586 13.5405,6.85352 11.1421,6.85352 c -5.53091,0 -10.03299,4.52808 -10.03299,10.09608 0,5.5681 4.49978,10.0962 10.03299,10.0962 1.7562,0 3.4065,-0.4563 4.8428,-1.2577 l 2.1566,1.8089 c -0.8608,1.5009 -2.1681,2.6798 -3.7747,3.3839 -1.9841,0.8686 -4.1845,0.9079 -6.19614,0.1112 C 6.15899,30.2953 4.57544,28.7574 3.71231,26.7609 3.2865,25.7742 2.14486,25.3225 1.16435,25.751 c -0.980518,0.4285 -1.429345,1.5773 -1.003534,2.564 0.63066,1.4569 1.526014,2.7562 2.663044,3.861 1.13703,1.1048 2.45819,1.9595 3.92896,2.5409 1.40403,0.5558 2.8748,0.8361 4.38008,0.8361 0.0714,0 0.145,0 0.2164,0 1.5789,-0.0278 3.1141,-0.3636 4.5642,-0.9983 1.4478,-0.6346 2.739,-1.5356 3.8369,-2.6798 1.0979,-1.1441 1.9472,-2.4736 2.5249,-3.9536 0.0622,-0.1575 0.1013,-0.3197 0.122,-0.4795 0.1796,-0.7203 -0.0483,-1.5124 -0.6536,-2.0197 z m -10.597,-2.2721 c -3.39725,0 -6.15927,-2.7817 -6.15927,-6.1981 0,-3.4163 2.76432,-6.198 6.15927,-6.198 3.395,0 6.1593,2.7817 6.1593,6.198 0,3.4164 -2.7643,6.1981 -6.1593,6.1981 z m 37.395,2.9718 c -5.1488,0 -9.3379,-4.2154 -9.3379,-9.3967 0,-5.1812 4.1891,-9.39663 9.3379,-9.39663 5.1489,0 9.3379,4.21543 9.3379,9.39663 0,5.1813 -4.189,9.3967 -9.3379,9.3967 z m 0,-15.1662 c -3.1625,0 -5.7335,2.5871 -5.7335,5.7695 0,3.1824 2.571,5.7696 5.7335,5.7696 3.1625,0 5.7335,-2.5872 5.7335,-5.7696 0,-3.1824 -2.571,-5.7695 -5.7335,-5.7695 z m -22.3843,14.756 c -0.2301,0 -0.4258,-0.081 -0.5869,-0.2432 -0.1611,-0.1621 -0.2417,-0.359 -0.2417,-0.5906 V 8.51187 c 0,-0.25478 0.0806,-0.46323 0.2417,-0.62536 0.1611,-0.16214 0.3568,-0.2432 0.5869,-0.2432 h 2.7966 c 0.2301,0 0.4258,0.08106 0.5869,0.2432 0.1841,0.16213 0.2762,0.37058 0.2762,0.62536 v 1.42444 c 0.5294,-0.74117 1.2084,-1.30863 2.037,-1.70238 0.8516,-0.39375 1.8298,-0.59062 2.9346,-0.59062 h 1.4156 c 0.2531,0 0.4488,0.08106 0.5869,0.2432 0.1611,0.16213 0.2417,0.359 0.2417,0.59061 v 2.50148 c 0,0.2316 -0.0806,0.4285 -0.2417,0.5906 -0.1381,0.1621 -0.3338,0.2432 -0.5869,0.2432 h -2.693 c -1.1048,0 -1.9679,0.3127 -2.5894,0.938 -0.5984,0.6254 -0.8977,1.4824 -0.8977,2.571 v 9.5541 c 0,0.2316 -0.0805,0.4285 -0.2416,0.5906 -0.1611,0.1622 -0.3683,0.2432 -0.6215,0.2432 z m 39.773,0 c -0.3222,0 -0.5639,-0.081 -0.725,-0.2432 -0.1611,-0.1621 -0.2992,-0.3706 -0.4143,-0.6253 L 59.8494,8.72033 c -0.023,-0.11581 -0.0345,-0.22004 -0.0345,-0.31269 0,-0.20845 0.069,-0.38217 0.2071,-0.52113 0.1612,-0.16214 0.3338,-0.2432 0.5179,-0.2432 h 2.5549 c 0.2762,0 0.4948,0.08106 0.656,0.2432 0.1611,0.13896 0.2531,0.27793 0.2762,0.4169 L 67.4104,19.8031 71.001,8.40764 c 0.0461,-0.16213 0.1497,-0.32426 0.3108,-0.48639 0.1611,-0.18529 0.4028,-0.27794 0.725,-0.27794 h 1.7263 c 0.3222,0 0.5639,0.09265 0.725,0.27794 0.1611,0.16213 0.2647,0.32426 0.3107,0.48639 L 78.3894,19.8031 81.7729,8.30341 c 0.023,-0.13897 0.1036,-0.27794 0.2417,-0.4169 0.1611,-0.16214 0.3798,-0.2432 0.656,-0.2432 h 2.5548 c 0.2072,0 0.3798,0.08106 0.5179,0.2432 0.1611,0.13896 0.2417,0.31268 0.2417,0.52113 0,0.09265 -0.023,0.19688 -0.0691,0.31269 L 80.9788,24.8408 c -0.069,0.2547 -0.1956,0.4632 -0.3797,0.6253 -0.1612,0.1622 -0.4028,0.2432 -0.7251,0.2432 h -2.2441 c -0.3223,0 -0.5754,-0.081 -0.7596,-0.2432 -0.1841,-0.1621 -0.3107,-0.3706 -0.3797,-0.6253 L 72.8999,13.8622 69.3093,24.8408 c -0.0921,0.2547 -0.2302,0.4632 -0.4143,0.6253 -0.1611,0.1622 -0.4143,0.2432 -0.7595,0.2432 z M 89.6677,7.64331 V 6.21887 c 0,-1.38969 0.2531,-2.53618 0.7595,-3.43948 C 90.9336,1.85292 91.6816,1.15808 92.6714,0.694847 93.6611,0.231616 94.9155,0 96.4346,0 h 2.3477 c 0.2532,0 0.4488,0.0810626 0.5869,0.243193 0.1612,0.162131 0.2417,0.359002 0.2417,0.590617 v 2.01506 c 0,0.23161 -0.0805,0.42848 -0.2417,0.59061 -0.1381,0.16214 -0.3337,0.24321 -0.5869,0.24321 h -2.2096 c -0.9207,0 -1.5536,0.23162 -1.8989,0.69485 -0.3452,0.46323 -0.5179,1.1349 -0.5179,2.01504 v 1.48235 h 4.2812 c 0.2532,0 0.4488,0.08106 0.5869,0.24319 0.1611,0.16213 0.2417,0.359 0.2417,0.59062 v 2.01506 c 0,0.2316 -0.0806,0.4285 -0.2417,0.5906 -0.1381,0.1621 -0.3337,0.2432 -0.5869,0.2432 h -4.2812 v 13.3179 c 0,0.2316 -0.0805,0.4285 -0.2416,0.5906 -0.1612,0.1622 -0.3568,0.2432 -0.587,0.2432 h -2.831 c -0.2302,0 -0.4258,-0.081 -0.587,-0.2432 -0.1611,-0.1621 -0.2416,-0.359 -0.2416,-0.5906 V 11.326 m 15.9663,14.3833 c -0.23,0 -0.425,-0.081 -0.587,-0.2432 -0.161,-0.1621 -0.241,-0.359 -0.241,-0.5906 V 8.70874 c 0,-0.23162 0.08,-0.42849 0.241,-0.59062 0.162,-0.16213 0.357,-0.24319 0.587,-0.24319 h 2.866 c 0.253,0 0.449,0.08106 0.587,0.24319 0.161,0.16213 0.242,0.359 0.242,0.59062 V 24.8755 c 0,0.2316 -0.081,0.4285 -0.242,0.5906 -0.138,0.1622 -0.334,0.2432 -0.587,0.2432 z M 114.818,7.64331 V 1.87608 c 0,-0.23162 0.069,-0.42849 0.207,-0.59062 0.161,-0.16213 0.369,-0.24319 0.622,-0.24319 h 2.796 c 0.23,0 0.426,0.08106 0.587,0.24319 0.161,0.16213 0.242,0.359 0.242,0.59062 v 5.99885 h 4.316 c 0.23,0 0.425,0.08106 0.586,0.24319 0.162,0.16213 0.242,0.359 0.242,0.59062 v 2.01506 c 0,0.2316 -0.08,0.4285 -0.242,0.5906 -0.161,0.1621 -0.356,0.2432 -0.586,0.2432 h -4.316 v 7.3075 c 0,0.9496 0.161,1.6908 0.483,2.2235 0.345,0.5327 0.932,0.7991 1.761,0.7991 h 2.382 c 0.23,0 0.426,0.081 0.587,0.2432 0.161,0.1621 0.242,0.359 0.242,0.5906 v 2.154 c 0,0.2316 -0.081,0.4285 -0.242,0.5906 -0.161,0.1622 -0.357,0.2432 -0.587,0.2432 h -2.796 c -1.381,0 -2.544,-0.2432 -3.487,-0.7296 -0.944,-0.4864 -1.646,-1.2044 -2.106,-2.154 -0.461,-0.9728 -0.691,-2.1772 -0.691,-3.6132 z" />

        <path id="plus" fill="#232A38" d="M135.815 13.0628C135.691 12.9378 135.527 12.8706 135.339 12.8706H132.995V10.4988C132.995 10.3066 132.922 10.1398 132.784 10.0124C132.659 9.892 132.503 9.82715 132.33 9.82715H131.108C130.922 9.82715 130.758 9.89432 130.632 10.0194C130.507 10.1445 130.441 10.3089 130.441 10.4988V12.8706H128.084C127.904 12.8706 127.741 12.9331 127.607 13.0489L127.593 13.0628C127.469 13.1879 127.402 13.3523 127.402 13.5423V14.6355C127.402 14.8231 127.469 14.9899 127.593 15.1149L127.607 15.1288C127.738 15.2446 127.904 15.3072 128.084 15.3072H130.441V17.7553C130.441 17.943 130.507 18.1097 130.632 18.2348C130.756 18.3599 130.919 18.427 131.108 18.427H132.33C132.503 18.427 132.659 18.3622 132.784 18.2417C132.922 18.1167 132.995 17.9476 132.995 17.7553V15.3072H135.339C135.525 15.3072 135.688 15.24 135.815 15.1149C135.939 14.9899 136.006 14.8254 136.006 14.6355V13.5423C136.006 13.3547 135.939 13.1879 135.815 13.0628Z" />

      </svg>
    </>
  )
}