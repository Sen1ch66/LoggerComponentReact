import './Logger.css'
function Logger(props) {
    const {content} = props
    return (
        <section className="LogsSection">
            <h1>Logs have created</h1>
            {content?.map((content, index) => (
                <p key={index} className='logs'>{content}</p>
            ))}
        </section>
    )
}
export default Logger;