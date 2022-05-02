const Footer = ({data:{copyright,autor}}) => {
    return (
        <footer className="mt-5">
            <p>{copyright} | <a href="https://github.com/Nicolarro" target="_blank" rel="noreferrer">{autor}</a></p>
        </footer>
    )
}

export default Footer