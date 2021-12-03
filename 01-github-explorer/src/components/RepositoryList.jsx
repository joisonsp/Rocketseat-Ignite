import { RepositoryItem } from "./RepositoryItem"

const repository={
    name: 'Reository name',
    description: 'compile, build and run',
    link: 'www.google.com'
}

export function Repositorylist(){
    return(
        <section className='repository-list'>
            <h1>Lista de repositorios</h1>
            <ul>
                <li>
                    <RepositoryItem repository={repository}/>
                </li>
                <li>
                    <p>outra coisa</p>
                </li>
            </ul>
        </section>
    )
}