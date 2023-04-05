import react, {useState} from 'react';
import styles from './styles.module.scss';
import Slider from "../../components/slider";
import Menu from "../../components/menu";

export default function Home(){
    const [image,imageState] = useState();
    return(
        <div className={styles.container}>

            <Slider/>

        </div>
    )
}