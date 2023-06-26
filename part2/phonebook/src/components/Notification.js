const Notification = ({ message}) => {
    const notificationStyle = {
        color: 'green',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 5,
        marginBottom: 10
    }

    const errorNotificationStyle = {
        ...notificationStyle,
        color: 'red'
    }

    if (message === null) {
        return null
    }

    return (
        <div 
            className="message"
            style={message.isError ? errorNotificationStyle : notificationStyle}
        >
            {message.text}
        </div>
    )

}

export default Notification