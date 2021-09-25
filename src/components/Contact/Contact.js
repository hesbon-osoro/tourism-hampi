import React from 'react';
import Title from '../Title';
import * as styles from '../../css/contact.module.css';
import { useForm, ValidationError } from '@formspree/react';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { shake } from 'react-animations';
import styled, { keyframes } from 'styled-components';
export default function Contact (){ 
    const [ state, handleSubmit ] = useForm('xpzkbelr');
    // this is shown on success
    if(state.succeeded){
        return(
            <Thanks>
                <h1>Thank You!</h1>
                <h3>Form Submitted successfully.</h3>
                <Shake>
                    <FontAwesomeIcon icon={faCheckCircle} size='10x' />
                </Shake>
            </Thanks>
        )
    }
    // default form shown on site
    return (
        <section className={styles.contact}>
            <Title title='contact' subtitle='us'/>
            <div className={styles.center}>
                <form 
                    // method='POST' 
                    onSubmit={handleSubmit}
                    className={styles.form}
                >
                    <div>
                        <label htmlFor='name'>name</label>
                        <input 
                            type="text" 
                            name='name'
                            id='name'
                            className={styles.formControl}
                            placeholder='John Doe'
                            required
                        />
                        <ValidationError 
                            prefix='Name'
                            field='name'
                            errors={state.errors}
                        />
                    </div>
                    <div>
                        <label htmlFor='email'>email</label>
                        <input 
                            type="email" 
                            name='email'
                            id='email'
                            className={styles.formControl}
                            placeholder='email@email.com'
                            required
                            validate
                        />
                        <ValidationError 
                            prefix='Email'
                            field='email'
                            errors={state.errors}
                        />
                    </div>
                    <div>
                        <label htmlFor='message'>message</label>
                        <textarea 
                            name='message'
                            id='message'
                            rows='10'
                            className={styles.formControl}
                            placeholder='hello there'
                            required
                        />
                        <ValidationError 
                            prefix='Message'
                            field='message'
                            errors={state.errors}
                        />
                    </div>
                    <div>
                        <input 
                            type="submit" 
                            value="Submit Here"
                            id='name'
                            className={styles.submit}
                            disabled={state.submitting}
                        />
                    </div>
                </form>
            </div>
        </section>
    );
}

const Shake = styled.div`
    animation: 2s 3 ${keyframes `${shake}`};
    color: lime;
`;
const Thanks = styled.div`
    position: absolute;
    width: 100%;
    height: 50vh;
    top: 72px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(0,0,0,0.5);
    h1{
        text-transform: uppercase;
        font-size: 2rem;
        color: white;
        mix-blend-mode: difference;
    }
    h3{
        text-transform: uppercase;
        font-size: 1.2rem;
        color: white;
        mix-blend-mode: difference;
    }
`;