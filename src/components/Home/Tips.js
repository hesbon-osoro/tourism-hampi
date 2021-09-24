import React from 'react';
import Title from '../Title';
import * as styles from '../../css/tips.module.css';
import tips from '../../constants/tips';

const Tips = () => {
    return (
        <section className={styles.tips}>
            <Title title='hot' subtitle='tips' />
            <div className={styles.center}>
                {
                    tips.map((item, index)=>{
                        return(
                            <article key={index} className={styles.tip}>
                                <span>{item.icon}</span>
                                <h4>{item.title}</h4>
                                <p>{item.text}</p>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    );
}

export default Tips;
