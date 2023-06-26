function PersonForm({
    formSubmitHandle,
    nameValue,
    nameChangeHandle,
    numberValue,
    numberChangeHandle
}) {
    return (
      <form onSubmit={formSubmitHandle}>
        <div>
          name: 
          <input 
            onChange={nameChangeHandle}
            value={nameValue}
          />
        </div>
        <div>
        number:
          <input 
          type="tel"
            onChange={numberChangeHandle}
            value={numberValue}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default PersonForm