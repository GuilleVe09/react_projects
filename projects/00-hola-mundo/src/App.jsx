import './App.css'

export function App(){
    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                className='tw-followCard-avatar' 
                alt="Avatar estandar" 
                src="https://unavatar.io/kikobeats"/>
                <div className='tw-followCard-info'>
                    <strong>Guillermo Veintimilla</strong>
                    <span className='tw-followCard-infoUserName'>@Guilleve</span>
                </div>
            </header>

            <aside>
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}