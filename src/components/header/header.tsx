import Logo from "../Logo/logo.tsx";
import "./header.css"

export default function Header(){




    return(
        <div className="header">
                <div className="logo-storeName">
                <Logo width={3} height={3} src="test.jpeg"/>
                <h3 >Marketino</h3>
                </div>

        </div>
    )

}