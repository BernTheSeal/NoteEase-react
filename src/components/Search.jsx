export default function Search({ searchVal, setSearchVal, icon }) {
    return (
        <>
            <input type="text" placeholder="search..." value={searchVal} onChange={(e) => setSearchVal(e.target.value)} />
            <i class={icon}></i>
        </>

    )
}