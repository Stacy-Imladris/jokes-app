import {useState} from 'react';
import {Button} from 'components/Button/Button';
import {Container} from 'components/Container/Container';
import Confetti from 'react-confetti'

export const Success = () => {
    const [isPressed, setIsPressed] = useState(false)

    return (
        <Container>
            {isPressed && <Confetti/>}
            <div>Нажми эту кнопку:</div>
            <Button onClick={() => setIsPressed(true)} isPressed={isPressed}/>
        </Container>
    )
}
