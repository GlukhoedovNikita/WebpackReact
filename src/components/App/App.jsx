import styles from './App.module.scss'

import like from '@assets/img/like.svg'

const App = () => {
    return (
        <div className={styles.Container}>
            App
            <img
                width={80}
                height={80}
                src={like}
                alt="Like Icon"
            />
        </div>
    )
}

export default App
