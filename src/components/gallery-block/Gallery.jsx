import Link from 'next/link';
import styles from './Gallery.module.css'
import Image from 'next/image';


const Gallery = () => {
    return (
        <div className={styles.gallery}>
            <div className={styles.gallery__container}>
                <div className={styles.gallery__body}>
                    <div className={styles.gallery__up}>    
                        <div className={styles.dyson__picture}>
                            <Image src='/Image/GalleryImg/Dyson.png' alt='location-logo' width={732} height={368} />
                            <p>Dyson Supersonic HD07 EU</p>
                        </div>
                        <div className={styles.iphone__picture}>
                            <Image src='/Image/GalleryImg/14pro.png' alt='location-logo' width={732} height={368} />
                            <Link href="/second">
                            <p>iPhone 14 Pro</p>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.gallery__down}>
                        <Image src='/Image/GalleryImg/Galaxy-s23.png' alt='location-logo' width={1440} height={219} />
                        <p>Samsung Galaxy S23</p>
                    </div>
                </div>  
            </div>
        </div>
    );
};

export default Gallery;