import { Counter } from './components/Counter';
import { Repositorylist } from './components/repositoryList';
import './styles/global.scss';

export function App(){
    return(
        <>
            <Repositorylist />
            <Counter />
        </>
        
    ) 
}