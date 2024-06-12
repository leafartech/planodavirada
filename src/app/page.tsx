import { Card } from "@/components/card";
import { Header } from "@/components/header";
import Section from "@/components/section";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Header />
      <main className="bg-[#0e0e0e] sm:translate-y-0 -translate-y-12">
        <Section classNameS="pt-0 sm:pt-12 px-4">
          <div className="flex flex-col gap-8 items-center">
            <h1 className="text-white text-2xl sm:text-3xl text-center">
              O Plano da Virada não é para todo mundo <br className="sm:block hidden" /><strong className="italic">Nós desenhamos esse evento para:</strong>
            </h1>
            <div className="flex flex-wrap gap-4">
              <Card
                svgBack={<svg className="absolute w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 372 245" fill="none"><g clip-path="url(#clip0_4976_62)">
                  <path d="M0 9.99999C0 4.47715 4.47715 0 10 0H371.793V234.989C371.793 240.512 367.316 244.989 361.793 244.989H0V9.99999Z" fill="#CD9F5B" /><path d="M278.977 131.291C278.977 145.793 276.905 160.295 273.058 173.613C259.444 219.782 221.266 258.255 180.424 258.255C142.542 258.255 122.121 217.414 122.121 171.541C122.121 157.927 123.897 143.721 128.337 129.22C141.95 82.4591 180.128 44.5771 220.674 44.5771C258.556 44.5771 278.977 85.7146 278.977 131.291ZM175.985 254.112C194.63 254.112 213.571 220.373 230.44 163.846C240.799 128.924 245.83 101.104 245.83 83.9389C245.83 61.4464 238.135 48.4245 224.817 48.4245C206.764 48.4245 189.895 77.7238 171.25 138.986C160.595 173.613 155.268 199.657 155.268 218.598C155.268 239.906 162.667 254.112 175.985 254.112ZM341.7 224.813C336.373 243.162 334.006 250.857 361.529 252.04L360.642 255H263.865L264.457 252.04C292.868 250.857 295.236 243.162 300.563 224.813L342.588 76.2441C333.71 79.2036 324.535 81.5712 312.401 83.347L312.993 80.0915C344.956 74.7643 372.776 61.4464 390.533 44.873H392.9L341.7 224.813Z" fill="black" fill-opacity="0.05" /></g><defs><clipPath id="clip0_4976_62"><path d="M0 9.99999C0 4.47715 4.47715 0 10 0H371.793V234.989C371.793 240.512 367.316 244.989 361.793 244.989H0V9.99999Z" fill="white" /></clipPath></defs>
                </svg>}
                text="Empreendedores que querem faturar R$30.000 todos os meses no Instagram."
              >
                <svg className="sm:w-6 w-8 sm:h-6 h-8 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M441-120v-86q-53-12-91.5-46T293-348l74-30q15 48 44.5 73t77.5 25q41 0 69.5-18.5T587-356q0-35-22-55.5T463-458q-86-27-118-64.5T313-614q0-65 42-101t86-41v-84h80v84q50 8 82.5 36.5T651-650l-74 32q-12-32-34-48t-60-16q-44 0-67 19.5T393-614q0 33 30 52t104 40q69 20 104.5 63.5T667-358q0 71-42 108t-104 46v84h-80Z" /></svg>
              </Card>
              <Card
                text="Prestadores de serviços que sonham em lotar sua agenda todos os meses."
                svgBack={<svg className="absolute w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 373 245" fill="none">
                  <g clip-path="url(#clip0_4976_68)"><path d="M0.792725 9.99999C0.792725 4.47715 5.26988 0 10.7927 0H372.585V234.989C372.585 240.512 368.108 244.989 362.585 244.989H0.792725V9.99999Z" fill="#CD9F5B" /><path d="M250.501 131.291C250.501 145.793 248.429 160.295 244.582 173.613C230.968 219.782 192.79 258.255 151.948 258.255C114.066 258.255 93.6455 217.414 93.6455 171.541C93.6455 157.927 95.4212 143.721 99.8605 129.22C113.474 82.4591 151.652 44.5771 192.198 44.5771C230.08 44.5771 250.501 85.7146 250.501 131.291ZM147.509 254.112C166.154 254.112 185.095 220.373 201.964 163.846C212.323 128.924 217.354 101.104 217.354 83.9389C217.354 61.4464 209.659 48.4245 196.341 48.4245C178.288 48.4245 161.419 77.7238 142.774 138.986C132.119 173.613 126.792 199.657 126.792 218.598C126.792 239.906 134.191 254.112 147.509 254.112ZM327.925 176.276C292.115 190.186 271.102 207.056 258.968 227.476C270.214 216.23 290.931 206.464 314.311 206.464C336.804 206.464 351.897 213.271 367.583 213.271C374.094 213.271 379.421 211.791 383.86 207.943C389.483 203.504 393.627 193.738 400.138 176.868L403.393 177.164C386.228 222.149 370.542 257.96 337.396 257.96C305.137 257.96 300.401 223.037 276.133 223.037C268.142 223.037 261.335 227.18 256.008 234.579C253.937 241.09 253.049 246.417 252.457 255H245.058C256.008 208.831 284.42 191.666 315.791 173.909C356.041 151.416 383.268 133.659 383.268 90.4498C383.268 64.11 371.134 51.6799 350.122 51.6799C314.903 51.6799 288.859 85.7146 288.859 116.79C288.859 136.619 297.442 149.049 311.056 149.049C339.763 149.049 352.193 103.768 342.427 79.2036L346.57 77.1319C356.633 103.768 342.427 152.304 311.056 152.304C295.666 152.304 285.308 138.69 285.308 116.79C285.308 84.2348 313.127 44.873 362.552 44.873C396.586 44.873 423.222 66.1817 423.222 97.2568C423.222 142.538 371.43 159.407 327.925 176.276Z" fill="black" fill-opacity="0.05" /></g><defs><clipPath id="clip0_4976_68"><path d="M0.792725 9.99999C0.792725 4.47715 5.26988 0 10.7927 0H372.585V234.989C372.585 240.512 368.108 244.989 362.585 244.989H0.792725V9.99999Z" fill="white" /></clipPath></defs>
                </svg>}
              >
                <svg className="sm:w-6 w-8 sm:h-6 h-8 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" ><path d="M290-290h260v-60H290v60Zm0-160h380v-60H290v60Zm0-160h380v-60H290v60Zm-77.69 470Q182-140 161-161q-21-21-21-51.31v-535.38Q140-778 161-799q21-21 51.31-21h535.38Q778-820 799-799q21 21 21 51.31v535.38Q820-182 799-161q-21 21-51.31 21H212.31Zm0-60h535.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-535.38q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H212.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v535.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85ZM200-760v560-560Z" /></svg>
              </Card>
              <Card
                text="Quem sente que já tentou de tudo mas nada fez escalar no digital."
                svgBack={<svg className="absolute w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 373 245" fill="none">
                  <g clip-path="url(#clip0_4976_76)"><path d="M0.585449 9.99999C0.585449 4.47715 5.0626 0 10.5854 0H372.378V234.989C372.378 240.512 367.901 244.989 362.378 244.989H0.585449V9.99999Z" fill="#CD9F5B" /><path d="M250.227 131.291C250.227 145.793 248.155 160.295 244.308 173.613C230.694 219.782 192.516 258.255 151.675 258.255C113.793 258.255 93.3717 217.414 93.3717 171.541C93.3717 157.927 95.1474 143.721 99.5867 129.22C113.201 82.4591 151.379 44.5771 191.924 44.5771C229.806 44.5771 250.227 85.7146 250.227 131.291ZM147.235 254.112C165.88 254.112 184.821 220.373 201.691 163.846C212.049 128.924 217.08 101.104 217.08 83.9389C217.08 61.4464 209.385 48.4245 196.068 48.4245C178.014 48.4245 161.145 77.7238 142.5 138.986C131.846 173.613 126.519 199.657 126.519 218.598C126.519 239.906 133.917 254.112 147.235 254.112ZM421.173 86.8984C421.173 123.301 375.3 140.466 341.857 146.089C366.421 150.528 396.312 163.55 396.312 193.738C396.312 233.691 350.736 257.96 305.751 257.96C266.981 257.96 254.551 237.539 254.551 215.342C254.551 196.105 268.757 173.317 289.473 173.317C301.311 173.317 310.486 183.083 309.006 198.769C289.769 203.504 271.124 213.567 271.124 231.324C271.124 248.785 288.585 254.112 302.199 254.112C341.561 254.112 356.359 212.383 356.359 179.236C356.359 149.049 340.377 144.609 315.517 149.937L317.293 144.017C321.732 143.721 327.947 144.017 335.05 144.905C366.421 140.466 384.474 110.279 384.474 80.9793C384.474 59.6707 372.044 50.2002 353.991 50.2002C316.997 50.2002 294.504 79.4996 294.504 104.952C294.504 119.749 301.311 130.995 313.446 130.995C337.418 130.995 345.408 93.4094 338.01 73.5805L342.449 71.8048C349.256 92.8175 340.377 134.251 313.15 134.251C300.128 134.251 290.953 123.597 290.953 105.248C290.953 78.0198 314.925 44.873 361.982 44.873C388.618 44.873 421.173 56.1192 421.173 86.8984Z" fill="black" fill-opacity="0.05" /></g><defs><clipPath id="clip0_4976_76"><path d="M0.585449 9.99999C0.585449 4.47715 5.0626 0 10.5854 0H372.378V234.989C372.378 240.512 367.901 244.989 362.378 244.989H0.585449V9.99999Z" fill="white" /></clipPath></defs>
                </svg>}
              >
                <svg className="sm:w-6 w-8 sm:h-6 h-8 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M616.24-527.69q21.84 0 37.03-15.29 15.19-15.28 15.19-37.11t-15.28-37.02q-15.28-15.2-37.12-15.2-21.83 0-37.02 15.29-15.19 15.28-15.19 37.11t15.28 37.02q15.28 15.2 37.11 15.2Zm-272.3 0q21.83 0 37.02-15.29 15.19-15.28 15.19-37.11t-15.28-37.02q-15.28-15.2-37.11-15.2-21.84 0-37.03 15.29-15.19 15.28-15.19 37.11t15.28 37.02q15.28 15.2 37.12 15.2ZM480-420q-62.61 0-114.46 35.04-51.85 35.04-76.46 92.65H342q22-37 58.5-58.5t79.5-21.5q43 0 79.5 21.5t58.5 58.5h52.92q-24.61-57.61-76.46-92.65Q542.61-420 480-420Zm.07 320q-78.84 0-148.21-29.92t-120.68-81.21q-51.31-51.29-81.25-120.63Q100-401.1 100-479.93q0-78.84 29.92-148.21t81.21-120.68q51.29-51.31 120.63-81.25Q401.1-860 479.93-860q78.84 0 148.21 29.92t120.68 81.21q51.31 51.29 81.25 120.63Q860-558.9 860-480.07q0 78.84-29.92 148.21t-81.21 120.68q-51.29 51.31-120.63 81.25Q558.9-100 480.07-100ZM480-480Zm0 320q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Z" /></svg>
              </Card>
            </div>
          </div>
        </Section>
        <Section classNameS="py-6 sm:py-12 px-4">
          <div className="w-full sm:grid sm:grid-cols-2 flex flex-col sm:gap-0 gap-8 items-center">
            <div className="flex items-center justify-center">
              <div className="relative sm:w-[64%]">
                <Image
                  src="/images/bg2.webp"
                  alt=""
                  width={552}
                  height={731}
                />
                <svg className="absolute h-[34px] top-28 right-0 sm:-right-12 backdrop-blur-md" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 152 41" fill="none">
                  <rect x="0.5" y="0.5" width="151" height="40" rx="4.5" fill="url(#paint0_linear_4976_99)" fill-opacity="0.6" /><rect x="0.5" y="0.5" width="151" height="40" rx="4.5" stroke="url(#paint1_linear_4976_99)" /><path d="M32.5396 20.63L34.6546 20.63C36.4246 20.63 37.1146 19.82 37.1146 18.53C37.1146 17.18 36.4246 16.4 34.6546 16.4L32.5396 16.4L32.5396 20.63ZM38.1946 18.53C38.1946 20.225 37.1146 21.53 34.6546 21.53L32.5396 21.53L32.5396 26L31.4896 26L31.4896 15.515L34.6546 15.515C37.0846 15.515 38.1946 16.805 38.1946 18.53ZM43.4513 18.59C41.9663 18.59 40.6613 19.55 40.5413 21.455L46.3013 21.455C46.3463 19.55 44.9663 18.59 43.4513 18.59ZM47.2463 23.405C46.8713 24.95 45.5513 26.12 43.4963 26.12C41.1713 26.12 39.4763 24.5 39.4763 21.905C39.4763 19.295 41.1413 17.69 43.4963 17.69C45.8963 17.69 47.3663 19.4 47.3663 21.485C47.3663 21.815 47.3663 22.025 47.3363 22.31L40.5413 22.31C40.6313 24.23 41.9663 25.235 43.4963 25.235C44.8913 25.235 45.8363 24.5 46.1363 23.405H47.2463ZM48.8074 21.89C48.8074 19.325 50.4724 17.69 52.7374 17.69C54.2074 17.69 55.4374 18.5 55.9624 19.58L55.9624 14.9L57.0124 14.9L57.0124 26L55.9624 26V24.17C55.4824 25.25 54.3424 26.12 52.7224 26.12C50.4724 26.12 48.8074 24.455 48.8074 21.89ZM55.9624 21.905C55.9624 19.865 54.5974 18.605 52.9174 18.605C51.1924 18.605 49.8724 19.805 49.8724 21.89C49.8724 23.96 51.1924 25.205 52.9174 25.205C54.5974 25.205 55.9624 23.945 55.9624 21.905ZM60.4595 21.425V26H59.4095L59.4095 17.81L60.4595 17.81L60.4595 19.265C60.9095 18.26 61.8545 17.66 63.2645 17.66V18.755H62.9795C61.6145 18.755 60.4595 19.37 60.4595 21.425ZM72.554 21.905C72.554 24.5 70.739 26.12 68.429 26.12C66.119 26.12 64.364 24.5 64.364 21.905C64.364 19.295 66.164 17.69 68.459 17.69C70.769 17.69 72.554 19.295 72.554 21.905ZM65.429 21.905C65.429 24.155 66.869 25.205 68.429 25.205C69.974 25.205 71.474 24.155 71.474 21.905C71.474 19.655 70.004 18.605 68.444 18.605C66.884 18.605 65.429 19.655 65.429 21.905ZM78.5843 15.515L79.6343 15.515L79.6343 25.145L83.3993 25.145L83.3993 26L78.5843 26L78.5843 15.515ZM91.9928 17.81L91.9928 26H90.9428L90.9428 24.56C90.4478 25.595 89.3678 26.135 88.1528 26.135C86.2928 26.135 84.8228 24.995 84.8228 22.595L84.8228 17.81L85.8578 17.81L85.8578 22.475C85.8578 24.29 86.8478 25.22 88.3478 25.22C89.8778 25.22 90.9428 24.26 90.9428 22.265L90.9428 17.81L91.9928 17.81ZM93.9099 21.905C93.9099 19.31 95.5749 17.69 97.8849 17.69C99.9399 17.69 101.275 18.785 101.65 20.48H100.525C100.255 19.31 99.2649 18.59 97.8849 18.59C96.2799 18.59 94.9749 19.685 94.9749 21.905C94.9749 24.125 96.2799 25.235 97.8849 25.235C99.2649 25.235 100.24 24.53 100.525 23.33H101.65C101.275 24.965 99.9399 26.12 97.8849 26.12C95.5749 26.12 93.9099 24.5 93.9099 21.905ZM103.109 21.905C103.109 19.31 104.774 17.69 107.084 17.69C109.139 17.69 110.474 18.785 110.849 20.48L109.724 20.48C109.454 19.31 108.464 18.59 107.084 18.59C105.479 18.59 104.174 19.685 104.174 21.905C104.174 24.125 105.479 25.235 107.084 25.235C108.464 25.235 109.439 24.53 109.724 23.33L110.849 23.33C110.474 24.965 109.139 26.12 107.084 26.12C104.774 26.12 103.109 24.5 103.109 21.905ZM112.308 21.89C112.308 19.325 113.973 17.69 116.223 17.69C117.873 17.69 118.998 18.575 119.463 19.61L119.463 17.81L120.513 17.81L120.513 26L119.463 26V24.185C118.983 25.235 117.843 26.12 116.208 26.12C113.973 26.12 112.308 24.455 112.308 21.89ZM119.463 21.905C119.463 19.865 118.098 18.605 116.418 18.605C114.693 18.605 113.373 19.805 113.373 21.89C113.373 23.96 114.693 25.205 116.418 25.205C118.098 25.205 119.463 23.945 119.463 21.905Z" fill="white" /><defs><linearGradient id="paint0_linear_4976_99" x1="76" y1="0" x2="98.0126" y2="60.608" gradientUnits="userSpaceOnUse"><stop stop-color="white" stop-opacity="0.2" /><stop offset="1" stop-color="white" stop-opacity="0" /></linearGradient><linearGradient id="paint1_linear_4976_99" x1="0" y1="0" x2="154.716" y2="20.6375" gradientUnits="userSpaceOnUse"><stop stop-color="#F0EE92" stop-opacity="0" /><stop offset="0.38621" stop-color="#DEC676" stop-opacity="0" /><stop offset="1" stop-color="#CC9D59" /></linearGradient></defs>
                </svg>
                <svg className="absolute h-[36px] bottom-28 left-0 sm:-left-12 backdrop-blur-md" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 139 41" fill="none">
                  <rect x="0.5" y="0.5" width="138" height="40" rx="4.5" fill="url(#paint0_linear_4976_97)" fill-opacity="0.6" /><rect x="0.5" y="0.5" width="138" height="40" rx="4.5" stroke="url(#paint1_linear_4976_97)" /><path d="M35.9398 15.395C38.1898 15.395 39.9598 16.58 40.7098 18.575H39.4798C38.8948 17.225 37.6198 16.355 35.9398 16.355C33.6148 16.355 31.8298 18.035 31.8298 20.75C31.8298 23.465 33.6148 25.16 35.9398 25.16C38.1448 25.16 39.7648 23.675 39.9298 21.29L35.5198 21.29L35.5198 20.435L41.0398 20.435L41.0398 21.2C40.8748 23.975 38.8048 26.105 35.9398 26.105C32.9998 26.105 30.7498 23.9 30.7498 20.75C30.7498 17.615 32.9998 15.395 35.9398 15.395ZM42.9632 26L42.9632 17.81L44.0132 17.81L44.0132 26L42.9632 26ZM43.4882 16.265C43.0682 16.265 42.7232 15.935 42.7232 15.485C42.7232 15.035 43.0682 14.72 43.4882 14.72C43.9082 14.72 44.2532 15.035 44.2532 15.485C44.2532 15.935 43.9082 16.265 43.4882 16.265ZM54.1009 21.905C54.1009 24.5 52.2859 26.12 49.9759 26.12C47.6659 26.12 45.9109 24.5 45.9109 21.905C45.9109 19.295 47.7109 17.69 50.0059 17.69C52.3159 17.69 54.1009 19.295 54.1009 21.905ZM46.9759 21.905C46.9759 24.155 48.4159 25.205 49.9759 25.205C51.5209 25.205 53.0209 24.155 53.0209 21.905C53.0209 19.655 51.5509 18.605 49.9909 18.605C48.4309 18.605 46.9759 19.655 46.9759 21.905ZM64.8412 15.395C67.0912 15.395 68.8612 16.58 69.6112 18.575L68.3812 18.575C67.7962 17.225 66.5212 16.355 64.8412 16.355C62.5162 16.355 60.7312 18.035 60.7312 20.75C60.7312 23.465 62.5162 25.16 64.8412 25.16C67.0462 25.16 68.6662 23.675 68.8312 21.29L64.4212 21.29L64.4212 20.435L69.9412 20.435V21.2C69.7762 23.975 67.7062 26.105 64.8412 26.105C61.9012 26.105 59.6512 23.9 59.6512 20.75C59.6512 17.615 61.9012 15.395 64.8412 15.395ZM71.3846 21.89C71.3846 19.325 73.0496 17.69 75.2996 17.69C76.9496 17.69 78.0746 18.575 78.5396 19.61V17.81L79.5896 17.81L79.5896 26H78.5396L78.5396 24.185C78.0596 25.235 76.9196 26.12 75.2846 26.12C73.0496 26.12 71.3846 24.455 71.3846 21.89ZM78.5396 21.905C78.5396 19.865 77.1746 18.605 75.4946 18.605C73.7696 18.605 72.4496 19.805 72.4496 21.89C72.4496 23.96 73.7696 25.205 75.4946 25.205C77.1746 25.205 78.5396 23.945 78.5396 21.905ZM83.0366 21.425L83.0366 26L81.9866 26L81.9866 17.81L83.0366 17.81V19.265C83.4866 18.26 84.4316 17.66 85.8416 17.66V18.755H85.5566C84.1916 18.755 83.0366 19.37 83.0366 21.425ZM86.9412 21.905C86.9412 19.31 88.6062 17.69 90.9162 17.69C92.9712 17.69 94.3062 18.785 94.6812 20.48H93.5562C93.2862 19.31 92.2962 18.59 90.9162 18.59C89.3112 18.59 88.0062 19.685 88.0062 21.905C88.0062 24.125 89.3112 25.235 90.9162 25.235C92.2962 25.235 93.2712 24.53 93.5562 23.33L94.6812 23.33C94.3062 24.965 92.9712 26.12 90.9162 26.12C88.6062 26.12 86.9412 24.5 86.9412 21.905ZM96.6204 26L96.6204 17.81L97.6704 17.81L97.6704 26H96.6204ZM97.1454 16.265C96.7254 16.265 96.3804 15.935 96.3804 15.485C96.3804 15.035 96.7254 14.72 97.1454 14.72C97.5654 14.72 97.9104 15.035 97.9104 15.485C97.9104 15.935 97.5654 16.265 97.1454 16.265ZM99.5681 21.89C99.5681 19.325 101.233 17.69 103.483 17.69C105.133 17.69 106.258 18.575 106.723 19.61L106.723 17.81L107.773 17.81L107.773 26L106.723 26V24.185C106.243 25.235 105.103 26.12 103.468 26.12C101.233 26.12 99.5681 24.455 99.5681 21.89ZM106.723 21.905C106.723 19.865 105.358 18.605 103.678 18.605C101.953 18.605 100.633 19.805 100.633 21.89C100.633 23.96 101.953 25.205 103.678 25.205C105.358 25.205 106.723 23.945 106.723 21.905Z" fill="white" /><defs><linearGradient id="paint0_linear_4976_97" x1="69.5" y1="0" x2="93.0343" y2="59.2559" gradientUnits="userSpaceOnUse"><stop stop-color="white" stop-opacity="0.2" /><stop offset="1" stop-color="white" stop-opacity="0" /></linearGradient><linearGradient id="paint1_linear_4976_97" x1="0" y1="0" x2="141.89" y2="17.3079" gradientUnits="userSpaceOnUse"><stop stop-color="#F0EE92" stop-opacity="0" /><stop offset="0.38621" stop-color="#DEC676" stop-opacity="0" /><stop offset="1" stop-color="#CC9D59" /></linearGradient></defs>
                </svg>
              </div>
            </div>
            <div className="text-white flex flex-col gap-4 sm:w-[100%] sm:translate-y-12">
              <h2 className="text-2xl sm:text-3xl"><strong>Gio Garcia & Pedro Lucca</strong></h2>
              <div className="flex flex-col gap-1 inter text-sm max-w-md">
                <p>Saíram do zero juntos em 2020, começando no marketing digital com o que tinham.</p>
                <p>E hoje já faturaram mais de R$4.000.000 e impactaram o negócio de mais de 14.000 empreendedores Giovanna é especialista em criação de conteúdo no Instagram voltado para crescimento orgânico, engajamento e captação de leads</p>
                <p>E Pedro Lucca é especialista em estratégias e funis de venda de alta conversão</p>
                <p>A expertise dos dois combinadas foi o que os fez construir uma empresa milionária com apenas 22 anos de idade</p>
                <p>E é no Plano da Virada que você vai aprender com duas referencias do marketing digital no Brasil e receber um plano detalhado para sair do zero para os R$20.000/mes todos os meses</p>
              </div>
              <Link href="#inscricao" className="py-3 shadow-my bg-[#33f682] text-[#030303] inter font-medium text-sm text-center rounded max-w-sm">QUERO IR PARA O PLANO DA VIRADA</Link>
            </div>
          </div>
        </Section>
      </main>
      <footer className="bg-[#0e0e0e] py-6 border-t border-t-zinc-700 text-center sm:mt-0 mt-[-49px]">
        <p className="text-zinc-500 inter font-medium text-sm">supernova © Copyright 2024. Todos os direitos reservados.</p>
      </footer>
    </>
  )
}