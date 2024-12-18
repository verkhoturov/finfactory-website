import React from 'react';
import Link from 'next/link';

import styles from './Logo.module.css';

export const Logo = () => {
    return (
        <div className={styles.wrapper}>
            <Link href="/">
                <svg
                    className={styles.img}
                    width="167"
                    height="28"
                    viewBox="0 0 167 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M5.86523 4.51562V23H1.40918V4.51562H5.86523ZM13.0508 12.209V15.6367H4.5957V12.209H13.0508ZM13.7744 4.51562V7.95605H4.5957V4.51562H13.7744ZM20.8833 4.51562V23H16.4399V4.51562H20.8833ZM39.9765 4.51562V23H35.5332L28.9951 11.498V23H24.539V4.51562H28.9951L35.5332 16.0176V4.51562H39.9765ZM47.7709 4.51562V23H43.3149V4.51562H47.7709ZM54.9565 12.209V15.6367H46.5014V12.209H54.9565ZM55.6801 4.51562V7.95605H46.5014V4.51562H55.6801ZM63.4491 8.40039L58.9423 23H54.1562L60.9482 4.51562H63.9823L63.4491 8.40039ZM67.1816 23L62.662 8.40039L62.078 4.51562H65.1503L71.9804 23H67.1816ZM67.0038 16.1064V19.5469H57.5204V16.1064H67.0038ZM84.0912 16.7412H88.5346C88.4753 18.0277 88.1283 19.1618 87.4936 20.1436C86.8588 21.1253 85.9786 21.8913 84.8529 22.4414C83.7357 22.9831 82.4154 23.2539 80.892 23.2539C79.6563 23.2539 78.5518 23.0465 77.5785 22.6318C76.6137 22.2171 75.7927 21.6204 75.1156 20.8418C74.447 20.0632 73.935 19.1195 73.5795 18.0107C73.2325 16.902 73.059 15.6536 73.059 14.2656V13.2627C73.059 11.8747 73.2409 10.6263 73.6049 9.51758C73.9773 8.40039 74.502 7.45247 75.1791 6.67383C75.8646 5.88672 76.6856 5.28581 77.642 4.87109C78.5984 4.45638 79.6605 4.24902 80.8285 4.24902C82.4366 4.24902 83.795 4.53678 84.9037 5.1123C86.0124 5.68783 86.8715 6.47917 87.4809 7.48633C88.0902 8.48503 88.4499 9.62337 88.56 10.9014H84.1166C84.0997 10.2074 83.9812 9.6276 83.7611 9.16211C83.5411 8.68815 83.1941 8.33268 82.7201 8.0957C82.2462 7.85872 81.6156 7.74023 80.8285 7.74023C80.2784 7.74023 79.8002 7.8418 79.3939 8.04492C78.9877 8.24805 78.6492 8.56966 78.3783 9.00977C78.1075 9.44987 77.9044 10.0212 77.7689 10.7236C77.642 11.4176 77.5785 12.2555 77.5785 13.2373V14.2656C77.5785 15.2474 77.6378 16.0853 77.7562 16.7793C77.8747 17.4733 78.0652 18.0404 78.3275 18.4805C78.5899 18.9206 78.9284 19.2464 79.3432 19.458C79.7663 19.6611 80.2826 19.7627 80.892 19.7627C81.5691 19.7627 82.1404 19.6569 82.6059 19.4453C83.0714 19.2253 83.4311 18.8952 83.685 18.4551C83.9389 18.0065 84.0743 17.4352 84.0912 16.7412ZM99.7313 4.51562V23H95.2753V4.51562H99.7313ZM105.292 4.51562V7.95605H89.8417V4.51562H105.292ZM122.989 13.3896V14.1387C122.989 15.5521 122.79 16.8216 122.392 17.9473C122.003 19.0645 121.448 20.0208 120.729 20.8164C120.009 21.6035 119.159 22.2087 118.177 22.6318C117.195 23.0465 116.112 23.2539 114.927 23.2539C113.734 23.2539 112.642 23.0465 111.652 22.6318C110.67 22.2087 109.815 21.6035 109.087 20.8164C108.368 20.0208 107.809 19.0645 107.411 17.9473C107.022 16.8216 106.827 15.5521 106.827 14.1387V13.3896C106.827 11.9762 107.022 10.7067 107.411 9.58105C107.809 8.4554 108.364 7.49902 109.075 6.71191C109.794 5.91634 110.645 5.3112 111.626 4.89648C112.617 4.47331 113.708 4.26172 114.902 4.26172C116.087 4.26172 117.17 4.47331 118.152 4.89648C119.142 5.3112 119.997 5.91634 120.716 6.71191C121.436 7.49902 121.994 8.4554 122.392 9.58105C122.79 10.7067 122.989 11.9762 122.989 13.3896ZM118.469 14.1387V13.3643C118.469 12.4502 118.389 11.6462 118.228 10.9521C118.076 10.2497 117.847 9.66146 117.542 9.1875C117.238 8.71354 116.861 8.35807 116.412 8.12109C115.972 7.87565 115.469 7.75293 114.902 7.75293C114.309 7.75293 113.793 7.87565 113.353 8.12109C112.913 8.35807 112.545 8.71354 112.248 9.1875C111.952 9.66146 111.728 10.2497 111.576 10.9521C111.432 11.6462 111.36 12.4502 111.36 13.3643V14.1387C111.36 15.0443 111.432 15.8483 111.576 16.5508C111.728 17.2448 111.952 17.833 112.248 18.3154C112.553 18.7979 112.925 19.1618 113.366 19.4072C113.814 19.6527 114.335 19.7754 114.927 19.7754C115.494 19.7754 115.998 19.6527 116.438 19.4072C116.878 19.1618 117.246 18.7979 117.542 18.3154C117.847 17.833 118.076 17.2448 118.228 16.5508C118.389 15.8483 118.469 15.0443 118.469 14.1387ZM125.819 4.51562H133.094C134.515 4.51562 135.751 4.72721 136.801 5.15039C137.85 5.57357 138.658 6.19987 139.225 7.0293C139.801 7.85872 140.089 8.88281 140.089 10.1016C140.089 11.1595 139.924 12.0439 139.594 12.7549C139.264 13.4658 138.802 14.054 138.21 14.5195C137.626 14.9766 136.945 15.3532 136.166 15.6494L134.706 16.4746H128.599L128.574 13.0342H133.094C133.661 13.0342 134.13 12.9326 134.503 12.7295C134.875 12.5264 135.154 12.2386 135.341 11.8662C135.535 11.4854 135.633 11.0326 135.633 10.5078C135.633 9.97461 135.535 9.51758 135.341 9.13672C135.146 8.75586 134.858 8.46387 134.477 8.26074C134.105 8.05762 133.644 7.95605 133.094 7.95605H130.275V23H125.819V4.51562ZM135.937 23L131.849 14.8242L136.572 14.7988L140.711 22.8096V23H135.937ZM146.042 4.51562L149.445 12.5391L152.86 4.51562H157.659L151.717 16.3604V23H147.185V16.3604L141.231 4.51562H146.042Z"
                        fill="white"
                    />
                    <rect x="161" y="18" width="6" height="6" rx="1" fill="#F3B919" />
                </svg>
            </Link>
        </div>
    );
};
