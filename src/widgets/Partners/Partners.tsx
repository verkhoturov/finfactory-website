import Image from 'next/image';
import { Layout } from '@/shared/ui/Layout';
import { Heading } from '@/shared/ui/Heading';

import styles from './Partners.module.css';

import alfImg from './img/alf.png';
import metcomImg from './img/metcom.png';
import mkppImg from './img/mkpp.png';
import moscreditImg from './img/moscredit.png';
import otkrImg from './img/otkr.png';
import rsbImg from './img/rsb.png';
import rusnarImg from './img/rusnar.png';
import sberImg from './img/sber.png';
import sovcomImg from './img/sovcom.png';
import uniImg from './img/uni.png';
import vtbImg from './img/vtb.png';

export const Partners = () => {
    return (
        <Layout.Container>
            <div className={styles.wrapper}>
                <Heading.H2>Наши партнеры</Heading.H2>

                <div className={styles.row}>
                    <Image
                        src={sovcomImg}
                        alt="sovcom"
                        width={sovcomImg.width / 3.25}
                        height={sovcomImg.height / 3.25}
                    />
                    <Image
                        src={vtbImg}
                        alt="vtb"
                        width={vtbImg.width / 3.25}
                        height={vtbImg.height / 3.25}
                    />
                    <Image
                        src={sberImg}
                        alt="sber"
                        width={sberImg.width / 3.25}
                        height={sberImg.height / 3.25}
                    />
                    <Image
                        src={otkrImg}
                        alt="otkr"
                        width={otkrImg.width / 3.25}
                        height={otkrImg.height / 3.25}
                    />
                    <Image
                        src={rusnarImg}
                        alt="rusnar"
                        width={rusnarImg.width / 3.25}
                        height={rusnarImg.height / 3.25}
                    />
                    <Image
                        src={alfImg}
                        alt="alf"
                        width={alfImg.width / 3.25}
                        height={alfImg.height / 3.25}
                    />
                    <Image
                        src={rsbImg}
                        alt="rsb"
                        width={rsbImg.width / 3.25}
                        height={rsbImg.height / 3.25}
                    />
                    <Image
                        src={metcomImg}
                        alt="metcom"
                        width={metcomImg.width / 3.25}
                        height={metcomImg.height / 3.25}
                    />
                    <Image
                        src={mkppImg}
                        alt="mkpp"
                        width={mkppImg.width / 3.25}
                        height={mkppImg.height / 3.25}
                    />
                    <Image
                        src={uniImg}
                        alt="uni"
                        width={uniImg.width / 3.25}
                        height={uniImg.height / 3.25}
                    />
                    <Image
                        src={moscreditImg}
                        alt="moscredit"
                        width={moscreditImg.width / 3.25}
                        height={moscreditImg.height / 3.25}
                    />
                </div>
            </div>
        </Layout.Container>
    );
};
