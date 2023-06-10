import styles from './SixthCard.module.css'
import Image from 'next/image';


const SixthCard = ({img, title, oldprice, price}) => {
    return (
        <div className={styles.fifth__item}>
            <div className={styles.fifth__card_container}>
                <div className={styles.fifth__card_body}>
                        <div className={styles.card__icon}>
                            <Image src='/Image/FirstBlock/Union.png' alt='Union' width={14} height={17} />
                            <div className={styles.fifth__card__favorites}></div>
                        </div>
                    <div className={styles.fifth__card_img}>
                        <Image src={img} alt="Apple-Watch" width={95} height={109} />
                    </div>
                    <div className={styles.fifth__card_info}>
                        <p>{title}</p>
                        <Image src='/Image/FirstBlock/reviews.png' alt="Reviews" width={73} height={12} />
                        <div className={styles.fifth__card_subtitle}>
                            <div>
                                <p>{oldprice} ₽</p>
                                <h2>{price} ₽</h2>
                            </div>
                            <div>
                                <button>Купить</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SixthCard;