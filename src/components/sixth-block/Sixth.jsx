import { watch } from '@/constans/watch';
import styles from './Sixth.module.css'
import SixthCard from './sixthBlock-card/SixthCard';

const Sixth = () => {
    return (
        <div className={styles.fifth}>
            <div className={styles.fifth__container}>
                <div className={styles.fifth__body}>
                    <div>
                        <div className={styles.fifth__title}>
                            <h1>Просмотренные товары</h1>
                        </div>
                        <div className={styles.fifth__card}>
                            {watch.map ((item) =>{
                                return <SixthCard  id={item.id} img={item.img} title={item.title} oldprice={item.oldprice} price={item.price}
                                ></SixthCard>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sixth;