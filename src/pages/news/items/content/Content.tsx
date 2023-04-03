import React from "react";
import styles from './styles.module.scss';
import ntemp from '../../../../resources/img/ntemp.jpg';


export default function Content() {
    return (
        <div className={styles.container}>
            <div className={`${styles.wrapper}`}>

                <div  className={`${styles.main}`} style={{backgroundImage:`url(${ntemp})`,backgroundPosition:"center"}}  >

                    <div className={styles.description}>
                        <h3>Title Lorem ipsum. </h3>
                        <div className={styles.short}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad commodi dicta et,
                        fugiat iusto labore molestiae necessitatibus optio provident repellendus repudiandae veniam
                        voluptatum! Ipsam.
                        </div>
                    </div>

                </div>
                <div className={styles.newsWrapper}>
                    <div className={styles.news}>
                        <h3> Title Lorem ipsum.</h3>
                        <div className={styles.description}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam facere id minus porro
                            suscipit ut.
                        </div>
                    </div>

                    <div className={styles.news}>
                        <h3> Title Lorem ipsum.</h3>
                        <div className={styles.description}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam facere id minus porro
                            suscipit ut.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}