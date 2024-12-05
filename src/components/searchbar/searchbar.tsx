import  "./searchbar.css";

export default function SearchBar({widthValue}:{widthValue:number}){
    //let widthValue:number=Number(width);
    let styleParentDiv={
            "--backgroundColor":"#D6E4EA",
            "--widthValue":widthValue+"em",
            "--heightValue":(widthValue/9)+"em",
            "--borderValue":`${widthValue/200}em solid black`,
            "--borderRadiusValue":`${widthValue/100}em`,
    }  as any;
    let inputStyle={
        "--fontSize":"0.9rem"

    } as any;
    return (<>
    <div  className="searchbar"
        style={styleParentDiv}>
        <input type="text" placeholder="Search" style={inputStyle}/>
        <p style={{fontSize:widthValue/23+"em",borderLeft:`${widthValue/(widthValue*8)}em solid black`,
            paddingLeft:"1%"
    }}  className="filterIcon-p">Filter</p>
        <div className="filterIcon">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-filter"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
        </div>
        <div className="searchIcon" style={{fontSize:widthValue/20+"em",borderLeft:`${widthValue/(widthValue*8)}em solid #354859`} as any}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        </div>
    </div>
    </>)
}