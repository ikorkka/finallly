import Link from "next/link";
import s from "./Third.module.css";

const Third = () => {
    return (
        <div className={s.third}>
                <div className={s.third__title}>
                    <Link href="/macbook" className={s.perehod}>MacBook Pro 14 M2</Link>
                </div>
        </div>
    );
};

export default Third;