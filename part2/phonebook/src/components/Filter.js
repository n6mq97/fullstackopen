function Filter({ filter, onChangeHandler }) {
    return (
        <div>
            filter shown with
            <input
                onChange={onChangeHandler}
                value={filter}
            />
        </div>
    )
}

export default Filter