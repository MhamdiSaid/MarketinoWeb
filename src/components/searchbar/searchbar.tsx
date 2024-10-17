import  "./searchbar.css";

export default function SearchBar({widthValue}:{widthValue:number}){
    //let widthValue:number=Number(width);
    let styleParentDiv={
            "--backgroundColor":"#D6E4EA",
            "--widthValue":widthValue+"em",
            "--heightValue":(widthValue/7)+"em",
            "--borderValue":`${widthValue/300}em solid black`,
            "--borderRadiusValue":`${widthValue/100}em`,
    }  as any;
    let inputStyle={
        "--fontSize":widthValue/15+"em"

    } as any;
    return (<>
    <div  className="searchbar"
        style={styleParentDiv}>
        <input type="text" placeholder="Search" style={inputStyle}/>
        <p>Filter</p>
        <div className="filterIcon">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="feather feather-filter"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
        </div>
        <div className="searchIcon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        </div>
    </div>
    </>)
}