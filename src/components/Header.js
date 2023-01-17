function Header(){
    return (
        <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
            <img className="mr-15" width={40} height={40} alt="logo" src="/img/logo.png"/>
            <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
            </div>
        </div>
            
        <ul className="d-flex">
            <li className="mr-30">
            <img width={20} height={20} alt="cart" src="/img/cart.svg"/>
            <span>1205 руб.</span>
            </li>
            <li>
            <img width={20} height={20} alt="user" src="/img/user.svg"/>
            </li>
        </ul>
        </header>
    )
}

export default Header;