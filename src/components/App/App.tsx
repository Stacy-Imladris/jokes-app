import {Navigate, Route, Routes} from 'react-router-dom';
import {Success} from 'components/Success/Success';
import {Failure} from 'components/Failure/Failure';

export const App = () => (
    <Routes>
        <Route path="/" element={<Navigate to={'/success'}/>}/>
        <Route path="/success" element={<Success/>}/>
        <Route path="/failure" element={<Failure/>}/>
    </Routes>
)
