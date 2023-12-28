import {useState} from 'react';
import {Button} from 'components/Button/Button';
import {Container} from 'components/Container/Container';
import s from './Failure.module.css'

export const Failure = () => {
    const [isError, setIsError] = useState(false)

    return (
        <Container>
            {isError
                ? <>
                    <div className={s.errorText}>Internal Server Error</div>
                    <div className={s.text}>nginx</div>
                </>
                : <>
                    <div>Нажми эту кнопку:</div>
                    <Button onClick={() => setIsError(true)}/>
                </>}
        </Container>
    )
}
