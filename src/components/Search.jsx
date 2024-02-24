export default function Search({ searchVal, setSearchVal, icon }) {
    return (
        <div className="search-input">
            <input type="text" placeholder="search..." value={searchVal} onChange={(e) => setSearchVal(e.target.value)} />
            <i className={icon}></i>
        </div>
    )
}